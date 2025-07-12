import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/children-classes/fall-spring")({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Children Classes - Fall/Spring!!!</h3>
    </div>
  );
}
