import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/contact")({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Contact!!!</h3>
    </div>
  );
}
