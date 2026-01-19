import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { TemplateFullWidth } from "@/components/template-full-width";
import { CMSRequest } from "@/utils/cms-request";
import { graphql } from "@/gql/gql";
import { PageQuery } from "@/gql/graphql";
import { TemplateDefault } from "@/components/template-default";
import { definedRoutes } from "@/consts";

export const Route = createFileRoute("/$")({
  loader: ({ params }) => {
    const { _splat } = params;
    if (_splat && !definedRoutes[_splat]) {
      throw notFound();
    }
  },
  component: RouteComponent,
});

const pageQueryDocument = graphql(`
  query Page($page: PageType) {
    page(where: { page: $page }) {
      updatedAt
      title
      subtitle
      masthead {
        url
        fileName
      }
      videoEmbeds
      pageTemplate
      pageContent {
        html
      }
    }
  }
`);

function RouteComponent() {
  const { _splat } = Route.useParams();
  const page = _splat ? definedRoutes[_splat] : "unknown";

  const { data } = useSuspenseQuery({
    queryKey: ["hygraph", page],
    queryFn: () => CMSRequest<PageQuery>(pageQueryDocument, { page }),
  });

  if (import.meta.env.DEV) {
    console.log({ _splat, page, data });
  }

  return _splat && data?.page?.pageTemplate === "fullWidth" ? (
    <TemplateFullWidth data={data.page} slug={_splat} />
  ) : (
    <TemplateDefault data={data.page} />
  );
}
