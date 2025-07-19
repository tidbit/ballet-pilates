import { PageQuery } from "~/gql/graphql";

type PageProps = {
  data: PageQuery["page"];
};
export function Page({ data }: PageProps) {
  console.log({ data });
  return (
    <main className="max-w-prose pt-6 pb-10 space-y-6">
      {(data?.title || data?.subtitle) && (
        <header>
          {data.title && <h1 className="text-5xl">{data.title}</h1>}
          {data.subtitle && <h2 className="text-3xl">{data.subtitle}</h2>}
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

      <div className="card bg-base-300 p-10 overflow-scroll w-full">
        <details className="collapse">
          <summary className="collapse-title">data</summary>
          <div className="collapse-content">
            <pre className="">
              <code>{JSON.stringify(data, undefined, 2)}</code>
            </pre>
          </div>
        </details>
      </div>
    </main>
  );
}
