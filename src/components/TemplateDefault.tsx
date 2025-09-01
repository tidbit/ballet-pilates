import { PageQuery } from "~/gql/graphql";
import { Page } from "./Page";
import { Sidebar } from "./Sidebar";

type PageProps = {
  data: PageQuery["page"];
};

export function TemplateDefault({ data }: PageProps) {
  return (
    <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-[1fr_380px] lg:gap-8">
      <Page data={data} />
      <Sidebar />
    </div>
  );
}
