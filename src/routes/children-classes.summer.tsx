import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/children-classes/summer")({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Children Classes - Summer!!!</h3>
    </div>
  );
}
