import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/_page/social")({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Social!!!</h3>
    </div>
  );
}
