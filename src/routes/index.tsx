import { gql } from "graphql-request";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { CMSRequest } from "~/utils/cms-request";
import { HomePageQuery } from "~/gql/graphql";
import { graphql } from "~/gql/gql";
import { request } from "graphql-request";

const homePageQueryDocument = graphql(`
  query HomePage {
    page(where: { page: Home }) {
      masthead {
        id
        url
        handle
        fileName
      }
    }
    siteInfo(where: { id: "cj97sbb83hzqw0128cva2wlrd" }) {
      homePageQuote
      homePageQuoteImage {
        id
        fileName
        url
      }
      contentBlocks {
        icon
        iconsize
        title
        linkLabel
        url
      }
    }
    pages(
      where: { page_in: [Children_Classes, Adult_Classes, Private_Sessions] }
    ) {
      page
      title
      subtitle
      shortDescription
      previewImage {
        url
        fileName
      }
    }
  }
`);

//const homeQueryOptions = () =>
//  queryOptions({
//    queryKey: ["hygraph", "home"],
//    queryFn: () => CMSRequest(homePageQuery),
//  });

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { data } = useSuspenseQuery({
    queryKey: ["hygraph", "home"],
    queryFn: () => CMSRequest<HomePageQuery>(homePageQueryDocument),
  });
  console.log({ data, foo: data.siteInfo });

  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      <div>
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
      </div>
    </div>
  );
}
