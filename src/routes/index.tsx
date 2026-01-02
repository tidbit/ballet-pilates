import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { CMSRequest } from "@/utils/cms-request";
import { HomePageQuery } from "@/gql/graphql";
import { graphql } from "@/gql/gql";
import { HomeCarousel } from "@/components/home-carousel";
import { InspectData } from "@/components/inspect-data";
import { SplatLink } from "@/components/splat-link";

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
        <div className="container mx-auto px-8 md:px-24">
          <div className="flex flex-wrap gap-8 justify-center items-stretch">
            {[1, 2, 3].map((e) => (
              <div
                key={e}
                className="w-full md:w-[calc(50%_-_1.5rem)] lg:w-[calc(33.3333%_-_1.5rem)] border border-base-300 rounded-lg p-4 bg-base-100 space-y-4"
              >
                <header className="flex gap-4 ">
                  <div className="bg-primary aspect-square rounded-full size-[64px]" />
                  <h3 className="grow text-lg">
                    Reformer Pilates, Barre, &amp; Private Sessions
                  </h3>
                </header>
                <p>
                  Experience the transformative benefits of Pilates &amp; barre
                  in a welcoming, supportive environment.
                </p>

                {Boolean(e / 2 !== 1) ? (
                  <SplatLink
                    className="underline hover:text-base-content/50"
                    to="./adult-classes"
                  >
                    Learn more
                  </SplatLink>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      <InspectData data={data} />
    </main>
  );
}
