import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/adult-classes/new-to-us")({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome new to us!!!</h3>
    </div>
  );
}
