import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { Sidebar } from "~/components/Sidebar";
import { CMSRequest } from "~/utils/cms-request";
import { graphql } from "~/gql/gql";
import { PageQuery } from "~/gql/graphql";

const definedRoutes: Record<string, string> = {
  "adult-classes": "Adult_Classes",
  "adult-classes/new-to-us": "Adult_Classes_NewToUs",
  "children-classes": "Children_Classes",
  "children-classes/fall-spring": "Children_Classes_FallSpring",
  "children-classes/summer": "Children_Classes_Summer",
  "private-sessions": "Private_Sessions",
  "about-victoria": "About_Victoria",
  contact: "Contact_Us",
  instructors: "Instructors",
  social: "Social",
} as const;

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

  console.log({ _splat, page, data });
  return (
    <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-[1fr_270px] lg:gap-8  ">
      <Page data={data.page} />
      <Sidebar />
    </div>
  );
}

type PageProps = {
  data: PageQuery["page"];
};
function Page({ data }: PageProps) {
  console.log({ data });
  return (
    <main className="max-w-prose">
      {(data?.title || data?.subtitle) && (
        <header>
          {data.title && <h1>{data.title}</h1>}
          {data.subtitle && <h2>{data.subtitle}</h2>}
        </header>
      )}

      <div className="py-10 overflow-scroll w-full">
        <pre className="">
          <code>{JSON.stringify(data, undefined, 2)}</code>
        </pre>
      </div>
    </main>
  );
}
