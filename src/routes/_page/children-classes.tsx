import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/_page/children-classes")({
  component: Page,
});

function Page() {
  return (
    <main className="">
      <h3>Welcome Children Classes!!!</h3>
    </main>
  );
}
