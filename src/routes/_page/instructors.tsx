import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/_page/instructors")({
  component: Page,
});

function Page() {
  return (
    <main className="">
      <h3>Welcome instructors!!!</h3>
    </main>
  );
}
