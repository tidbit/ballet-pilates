import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

export function EmitDomContentLoadedOnNav() {
  const { location, isLoading } = useRouterState();

  useEffect(() => {
    if (!isLoading) {
      // console.log("Loaded -- emit");
      setTimeout(() => window.instgrm?.Embeds?.process(), 0);
    }
  }, [location, isLoading]);

  return null;
}

export function Schedule() {
  return (
    <iframe className="w-full min-h-[800px]" src="/embed/schedule-all.html" />
  );
}

export function Adults() {
  return (
    <iframe className="w-full min-h-full" src="/embed/schedule-adults.html" />
  );
}

export function Childrens() {
  return (
    <iframe className="w-full min-h-full" src="/embed/schedule-children.html" />
  );
}
