import { PageQuery } from "@/gql/graphql";
import { Page } from "./page";
import { Sidebar } from "./sidebar";

type PageProps = {
  data: PageQuery["page"];
};

export function TemplateDefault({ data }: PageProps) {
  return (
    <div className="container mx-auto px-6 md:px-8 py-8 grid grid-cols-1 lg:grid-cols-[1fr_380px] lg:gap-8">
      <Page data={data} />
      <Sidebar />
    </div>
  );
}
