import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/_page/private-sessions")({
  component: Page,
});

function Page() {
  return (
    <main className="">
      <h3>Welcome Private sessions!!!</h3>
    </main>
  );
}
