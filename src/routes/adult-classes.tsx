import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/adult-classes")({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Adult Classes!!!</h3>
    </div>
  );
}
