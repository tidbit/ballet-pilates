import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/_page/adult-classes/new-to-us")({
  component: Page,
});

function Page() {
  return (
    <main className="">
      <h3>Welcome new to us!!!</h3>
    </main>
  );
}
