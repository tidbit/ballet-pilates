import { Link } from "@tanstack/react-router";
import { Button } from "./button";

export function NotFound({ children }: { children?: any }) {
  return (
    <div className="container mx-auto py-12">
      <div className="space-y-8 py-8 px-12 flex flex-col items-center">
        <div className="">
          {children || <h1 className="text-3xl ">There was an Error</h1>}
        </div>
        <p className="flex items-center gap-4 flex-wrap">
          <Button
            className="font-sans border border-1 border-base-200/25"
            color="primary"
            size="lg"
            onClick={() => window.history.back()}
          >
            Go back
          </Button>
          <Button
            asChild
            className="font-sans border border-1 border-base-200/25"
            color="neutral"
            dstyle="soft"
            size="lg"
          >
            <Link to="/">Start Over</Link>
          </Button>
        </p>
      </div>
    </div>
  );
}
