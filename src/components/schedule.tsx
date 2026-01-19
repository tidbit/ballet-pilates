import { useRouter, useRouterState } from "@tanstack/react-router";
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
    }
  }, [location, isLoading]);

  const emit = () => {
    const widgets = window.document.querySelectorAll(".mindbody-widget");
    if (widgets.length > 0) {
      const domContentLoadedEvent = new Event("DOMContentLoaded", {
        bubbles: true,
        cancelable: false,
      });

      setTimeout(() => {
        window.document.dispatchEvent(domContentLoadedEvent);
      }, 60);
    }
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
