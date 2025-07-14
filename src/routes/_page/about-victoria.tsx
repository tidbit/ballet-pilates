import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/_page/about-victoria")({
  component: Page,
});

function Page() {
  return (
    <main className="">
      <h3>Welcome About!!!</h3>
    </main>
  );
}
