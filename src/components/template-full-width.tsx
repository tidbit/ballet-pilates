import { PageQuery } from "@/gql/graphql";
import { Schedule } from "./schedule";
import { NotFound } from "./not-found";
import { Page } from "./page";

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
    <div className="container mx-auto min-h-60 px-6 md:px-8 py-8 grid grid-cols-1">
      <Comp data={data} slug={slug} />
    </div>
  ) : (
    <NotFound />
  );
}
