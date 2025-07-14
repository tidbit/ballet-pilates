import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Sidebar } from "~/components/Sidebar";

export const Route = createFileRoute("/_page")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-[270px_1fr] lg:gap-8  ">
      <Sidebar />

      <Outlet />
    </div>
  );
}
