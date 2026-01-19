import { Link } from "@tanstack/react-router";
import { SplatLink } from "./splat-link";

export function Nav() {
  const linkClass = `grow px-2 py-1 hover:text-base-content/50 text-center`;
  return (
    <div className="z-10 sticky top-0 bg-base-100 border-t border-b border-base-300 py-2 px-1">
      <nav
        className={`container flex gap-2 flex-wrap flex-row justify-stretch mx-auto`}
      >
        <Link className={linkClass} to="/">
          Home
        </Link>
        <SplatLink className={linkClass} to="adult-classes">
          Adult Classes
        </SplatLink>
        <SplatLink className={linkClass} to="children-classes">
          Children's Classes
        </SplatLink>
        <SplatLink className={linkClass} to="schedule">
          Schedule
        </SplatLink>
        <SplatLink className={linkClass} to="pricing">
          Pricing
        </SplatLink>
        <SplatLink className={linkClass} to="about-victoria">
          About
        </SplatLink>
        <SplatLink className={linkClass} to="contact">
          Contact
        </SplatLink>
      </nav>
    </div>
  );
}
