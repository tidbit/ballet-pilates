import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/_page/adult-classes")({
  component: Page,
});

function Page() {
  return (
    <main className="">
      <h3>Welcome Adult Classes!!!</h3>
    </main>
  );
}
