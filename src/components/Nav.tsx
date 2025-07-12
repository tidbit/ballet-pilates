import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <nav className={``}>
      <ul className={``}>
        <li>
          <Link className={``} to="/children-classes">
            Children Classes
          </Link>
        </li>
        <li>
          <Link className={``} to="/adult-classes">
            Adult Classes
          </Link>
        </li>
        <li>
          <Link className={``} to="/private-sessions">
            Private Sessions
          </Link>
        </li>
      </ul>
    </nav>
  );
}
