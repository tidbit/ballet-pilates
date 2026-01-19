import { useRouterState } from "@tanstack/react-router";
import { ReactNode, useEffect, useState } from "react";

type RenderOnLoadProps = {
  children: ReactNode;
  callback?: () => void;
};
export function RenderOnLoad({ children, callback }: RenderOnLoadProps) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    if (show && callback) {
      callback();
    }
  }, [show]);

  return show ? children : null;
}

export function EmitDomContentLoadedOnNav() {
  const { location, isLoading } = useRouterState();

  useEffect(() => {
    if (!isLoading) {
      console.log("Loaded -- emit");
      emit();
      setTimeout(() => window.instgrm?.Embeds?.process(), 60);
    }
  }, [location, isLoading]);

  const emit = () => {
    setTimeout(() => {
      const widgets = window.document.querySelectorAll(".mindbody-widget");
      console.log({ widgets });
      if (widgets.length > 0) {
        const domContentLoadedEvent = new Event("DOMContentLoaded", {
          bubbles: true,
          cancelable: false,
        });

        window.document.dispatchEvent(domContentLoadedEvent);
      }
    }, 1000);
  };

  return null;
}

export function Schedule() {
  return (
    <div
      className="mindbody-widget"
      data-widget-type="Schedules"
      data-widget-id="9731261000e"
    />
  );
}

export function Adults() {
  return (
    <div
      className="mindbody-widget"
      data-widget-type="Schedules"
      data-widget-id="9732984000e"
    />
  );
}

export function Childrens() {
  return (
    <div
      className="mindbody-widget"
      data-widget-type="Schedules"
      data-widget-id="9732981000e"
    />
  );
}
