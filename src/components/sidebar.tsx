import { usePage } from "@/hooks";
import { Adults, Childrens } from "./schedule";

export function Sidebar() {
  const { isChildrens, isAdults } = usePage();

  return (
    <aside>
      {isChildrens ? <Childrens /> : null}
      {isAdults ? <Adults /> : null}
    </aside>
  );
}
