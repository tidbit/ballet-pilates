import { PageQuery } from "@/gql/graphql";
import { InspectData } from "./inspect-data";

type PageProps = {
  data: PageQuery["page"];
};
export function Page({ data }: PageProps) {
  if (import.meta.env.DEV) {
    console.log({ data });
  }
  return (
    <main className="pt-4 pb-10 space-y-6">
      {(data?.title || data?.subtitle) && (
        <header>
          {data.title && <h1 className="text-4xl">{data.title}</h1>}
          {data.subtitle && <h2 className="text-2xl">{data.subtitle}</h2>}
        </header>
      )}

      {data?.masthead ? (
        <div className="">
          <img src={data.masthead.url} title={`${data.title} masthead image`} />
        </div>
      ) : null}

      <div
        className="prose space-y-4"
        dangerouslySetInnerHTML={{ __html: data?.pageContent?.html || "" }}
      />

      {data?.videoEmbeds &&
        data?.videoEmbeds.map((embed) => {
          return embed ? (
            <div className="">
              <iframe className="aspect-video w-full" src={embed} />
            </div>
          ) : null;
        })}

      <InspectData data={data} />
    </main>
  );
}
