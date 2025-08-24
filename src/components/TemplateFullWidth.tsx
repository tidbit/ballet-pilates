import { PageQuery } from "~/gql/graphql";
import { Schedule } from "./Schedule";
import { NotFound } from "./NotFound";

type PageProps = {
  data: PageQuery["page"];
  slug: string;
};

const pageMap = {
  schedule: Schedule,
  pricing: () => <div>wat</div>,
};
export function TemplateFullWidth({ data, slug }: PageProps) {
  console.log({ data, slug, p: pageMap[slug as keyof typeof pageMap] });
  const Comp = pageMap[slug as keyof typeof pageMap];
  return Comp ? (
    <div className="container mx-auto py-8 grid grid-cols-1">
      <Comp />
    </div>
  ) : (
    <NotFound />
  );
}
