import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/private-sessions")({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Private sessions!!!</h3>
    </div>
  );
}
