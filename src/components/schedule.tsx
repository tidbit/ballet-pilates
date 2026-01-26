import { ClientOnly, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { useInterval, useScript } from "usehooks-ts";

export function EmitDomContentLoadedOnNav() {
  const { location, isLoading } = useRouterState();

  const status = useScript("//www.instagram.com/embed.js", {
    removeOnUnmount: false,
    id: "instagram",
  });

  useEffect(() => {
    if (status !== "ready") {
      return;
    }

    if (!isLoading) {
      // console.log("Loaded -- emit");
      setTimeout(() => window.instgrm?.Embeds?.process(), 0);
    }
  }, [location, isLoading, status]);

  return null;
}

function AllSchedule() {
  const ref = useRef<HTMLIFrameElement | null>(null);

  const setHeight = () => {
    if (ref.current) {
      const scrollHeight =
        ref.current.contentWindow?.document.body.scrollHeight ?? 800;
      // console.log({ scrollHeight });

      ref.current.style.height = `${scrollHeight + 20}px`;
    }
  };

  useInterval(() => {
    setHeight();
  }, 60);

  return (
    <iframe
      ref={ref}
      className="w-full min-h-[800px]"
      src="/embed/schedule-all.html"
    />
  );
}

export function Schedule() {
  return (
    <ClientOnly>
      <AllSchedule />
    </ClientOnly>
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
