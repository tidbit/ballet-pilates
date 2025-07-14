import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/_page/children-classes/fall-spring")({
  component: Page,
});

function Page() {
  return (
    <main className="">
      <h3>Welcome Children Classes - Fall/Spring!!!</h3>
    </main>
  );
}
