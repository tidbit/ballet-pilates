import { Link } from "@tanstack/react-router";

export function Nav() {
  const linkClass = `grow px-2 py-1 hover:text-base-900/50 text-center`;
  return (
    <div className="border-t border-b border-base-200 py-2 px-1">
      <nav
        className={`container flex gap-2 flex-wrap flex-row justify-stretch mx-auto`}
      >
        <Link className={linkClass} to="/">
          Home
        </Link>
        <Link className={linkClass} to="/adult-classes">
          Adult Pilates
        </Link>
        <Link className={linkClass} to="/children-classes">
          Children's Dance
        </Link>
        <Link className={linkClass} to="/">
          Schedule
        </Link>
        <Link className={linkClass} to="/">
          Pricing
        </Link>
        <Link className={linkClass} to="/about-victoria">
          About
        </Link>
        <Link className={linkClass} to="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
}
