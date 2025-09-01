import { PageQuery } from "~/gql/graphql";
import { Schedule } from "./Schedule";
import { NotFound } from "./NotFound";
import { Page } from "./Page";

type PageProps = {
  data: PageQuery["page"];
  slug: string;
};

const pageMap = {
  schedule: (props: PageProps) => <Schedule />,
  pricing: (props: PageProps) => <Page data={props.data} />,
};
export function TemplateFullWidth({ data, slug }: PageProps) {
  console.log({ data, slug, p: pageMap[slug as keyof typeof pageMap] });
  const Comp = pageMap[slug as keyof typeof pageMap];
  return Comp ? (
    <div className="container mx-auto min-h-60 py-8 grid grid-cols-1">
      <Comp data={data} slug={slug} />
    </div>
  ) : (
    <NotFound />
  );
}
