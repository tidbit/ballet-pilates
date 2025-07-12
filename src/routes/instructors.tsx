import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/instructors")({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome instructors!!!</h3>
    </div>
  );
}
