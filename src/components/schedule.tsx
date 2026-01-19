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
      console.log({ show });
      callback();
    }
  }, [show]);

  return show ? children : null;
}

export function Schedule() {
  return (
    <RenderOnLoad
      callback={() => {
        const domContentLoadedEvent = new Event("DOMContentLoaded", {
          bubbles: true,
          cancelable: false,
        });

        window?.document?.dispatchEvent(domContentLoadedEvent);
      }}
    >
      <div
        className="mindbody-widget"
        data-widget-type="Schedules"
        data-widget-id="9731261000e"
      />
    </RenderOnLoad>
  );
}

export function Adults() {
  return (
    <RenderOnLoad
      callback={() => {
        const domContentLoadedEvent = new Event("DOMContentLoaded", {
          bubbles: true,
          cancelable: false,
        });

        window?.document?.dispatchEvent(domContentLoadedEvent);
      }}
    >
      <div
        className="mindbody-widget"
        data-widget-type="Schedules"
        data-widget-id="9732984000e"
      />
    </RenderOnLoad>
  );
}

export function Childrens() {
  return (
    <RenderOnLoad
      callback={() => {
        const domContentLoadedEvent = new Event("DOMContentLoaded", {
          bubbles: true,
          cancelable: false,
        });

        window?.document?.dispatchEvent(domContentLoadedEvent);
      }}
    >
      <div
        className="mindbody-widget"
        data-widget-type="Schedules"
        data-widget-id="9732981000e"
      />
    </RenderOnLoad>
  );
}
