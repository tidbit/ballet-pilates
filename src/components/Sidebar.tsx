import { Link } from "@tanstack/react-router";

export function Sidebar() {
  return (
    <div className={``}>
      <nav className={``}>
        <ul className={``}>
          <li>
            <Link className={``} to="/children-classes">
              Children Classes
            </Link>
            <ul className={``}>
              <li>
                <Link className={``} to="/children-classes/fall-spring">
                  Fall &amp; Spring
                </Link>
              </li>
              <li>
                <Link className={``} to="/children-classes/summer">
                  Summer
                </Link>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://clients.mindbodyonline.com/classic/ws?studioid=27108&stype=-106&sView=week"
                >
                  Schedule
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link className={``} to="/adult-classes">
              Adult Classes
            </Link>
            <ul className={``}>
              <li>
                <Link className={``} to="/adult-classes/new-to-us">
                  New to Us
                </Link>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://clients.mindbodyonline.com/classic/ws?studioid=27108&stype=-103&sView=week"
                >
                  Schedule
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link className={``} to="/private-sessions">
              Private Sessions
            </Link>
          </li>
        </ul>
        <ul className={``}>
          <li>
            <Link className={``} to="/about-victoria">
              About Victoria
            </Link>
          </li>
          <li>
            <Link className={``} to="/instructors">
              Instructors
            </Link>
          </li>
          <li>
            <Link className={``} to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className={``} to="/social">
              Social
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
