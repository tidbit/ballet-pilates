import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { CMSRequest } from "~/utils/cms-request";
import { HomePageQuery } from "~/gql/graphql";
import { graphql } from "~/gql/gql";
import { HomeCarousel } from "~/components/HomeCarousel";

const homePageQueryDocument = graphql(`
  query HomePage {
    page(where: { page: Home }) {
      masthead {
        id
        url
        handle
        fileName
      }
      videoEmbeds
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
    <main className="">
      <HomeCarousel />

      <div className="bg-base-200 py-24">
        <div className="container mx-auto px-24">
          <div className="flex gap-8 justify-around items-stretch">
            {[1, 2].map((e) => (
              <div
                key={e}
                className="border border-base-300 rounded-lg p-4 bg-base-100 w-[430px]  space-y-4"
              >
                <header className="flex gap-4">
                  <div className="bg-primary aspect-square rounded-full size-[64px]" />
                  <h3 className="grow text-lg">
                    Reformer Pilates, Barre, &amp; Private Sessions
                  </h3>
                </header>
                <p>
                  Experience the transformative benefits of Pilates &amp; barre
                  in a welcoming, supportive environment.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card bg-base-300 p-10 overflow-scroll w-full">
        <details className="collapse">
          <summary className="collapse-title font-semibold">
            inspect data
          </summary>
          <div className="collapse-content text-sm">
            <pre className="">
              <code>{JSON.stringify(data, undefined, 2)}</code>
            </pre>
          </div>
        </details>
      </div>
    </main>
  );
}
