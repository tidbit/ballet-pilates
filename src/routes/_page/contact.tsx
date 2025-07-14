import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/_page/contact")({
  component: Page,
});

function Page() {
  return (
    <main className="">
      <h3>Welcome Contact!!!</h3>
    </main>
  );
}
