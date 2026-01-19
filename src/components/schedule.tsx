import { ClientOnly, useRouter, useRouterState } from "@tanstack/react-router";
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
      }, 120);
    } else {
      setTimeout(() => {
        emit();
      }, 240);
    }
  };

  return null;
}

export function Schedule() {
  return (
    <ClientOnly>
      <div
        className="mindbody-widget"
        data-widget-type="Schedules"
        data-widget-id="9731261000e"
      />
    </ClientOnly>
  );
}

export function Adults() {
  return (
    <ClientOnly>
      <div
        className="mindbody-widget"
        data-widget-type="Schedules"
        data-widget-id="9732984000e"
      />
    </ClientOnly>
  );
}

export function Childrens() {
  return (
    <ClientOnly>
      <div
        className="mindbody-widget"
        data-widget-type="Schedules"
        data-widget-id="9732981000e"
      />
    </ClientOnly>
  );
}
