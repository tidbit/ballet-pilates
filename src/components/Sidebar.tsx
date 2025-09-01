import { usePage } from "~/hooks";
import { Adults, Childrens } from "./Schedule";
import { SplatLink } from "./SplatLink";

export function Sidebar() {
  const { isChildrens, isAdults } = usePage();

  return (
    <aside>
      {isChildrens ? <Childrens /> : null}
      {isAdults ? <Adults /> : null}

      {/**


      <div className={``}>
        <nav className={``}>
          <ul className={``}>
            <li>
              <SplatLink className={``} to="/children-classes">
                Children Classes
              </SplatLink>
              <ul className={``}>
                <li>
                  <SplatLink className={``} to="/children-classes/fall-spring">
                    Fall &amp; Spring
                  </SplatLink>
                </li>
                <li>
                  <SplatLink className={``} to="/children-classes/summer">
                    Summer
                  </SplatLink>
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
              <SplatLink className={``} to="/adult-classes">
                Adult Classes
              </SplatLink>
              <ul className={``}>
                <li>
                  <SplatLink className={``} to="/adult-classes/new-to-us">
                    New to Us
                  </SplatLink>
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
              <SplatLink className={``} to="/private-sessions">
                Private Sessions
              </SplatLink>
            </li>
          </ul>
          <ul className={``}>
            <li>
              <SplatLink className={``} to="/about-victoria">
                About Victoria
              </SplatLink>
            </li>
            <li>
              <SplatLink className={``} to="/instructors">
                Instructors
              </SplatLink>
            </li>
            <li>
              <SplatLink className={``} to="/contact">
                Contact Us
              </SplatLink>
            </li>
            <li>
              <SplatLink className={``} to="/social">
                Social
              </SplatLink>
            </li>
          </ul>
        </nav>
      </div>

        **/}
    </aside>
  );
}
