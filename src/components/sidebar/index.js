import { h, Component } from 'preact';
import Match, { Link } from 'preact-router/match';
import { observer } from 'mobx-react';
import style from './style.scss';

import { appData } from '../../store/app-data';

@observer
export default class Sidebar extends Component {
	render() {
    const { showMenu } = appData;

		return (
      <div class={[style.secondaryCol, 'sidebar', showMenu ? `show ${style.show}` : style.hide].join(' ')}>
        <nav class={ style.nav }>
          <ul class={[style.sideNav, 'class-nav'].join(' ')}>
            <li><Link activeClassName={style.current} href="/children-classes">Children Classes</Link>
              <ul class={style.subNav}>
                <li><Link activeClassName={style.current} href="/children-classes/fall-spring">Fall &amp; Spring</Link></li>
                <li><Link activeClassName={style.current} href="/children-classes/summer">Summer</Link></li>
                <li><a target="_blank" href="https://clients.mindbodyonline.com/classic/ws?studioid=27108&stype=-106&sView=week">Schedule</a></li>
              </ul>
            </li>
            <li><Link activeClassName={style.current} href="/adult-classes">Adult Classes</Link>
              <ul class={style.subNav}>
                <li><Link activeClassName={style.current} href="/adult-classes/new-to-us">New to Us</Link></li>
                <li><a target="_blank" href="https://clients.mindbodyonline.com/classic/ws?studioid=27108&stype=-103&sView=week">Schedule</a></li>
              </ul>
            </li>
            <li><Link activeClassName={style.current} href="/private-sessions/">Private Sessions</Link></li>
          </ul>
          <ul class={[style.sideNav, style.socialNav].join(' ') }>
            <li><Link activeClassName={style.current} href="/about-victoria">About Victoria</Link></li>
            <li><Link activeClassName={style.current} href="/instructors">Instructors</Link></li>
            <li><Link activeClassName={style.current} href="/contact">Contact Us</Link></li>
            <li><Link activeClassName={style.current} href="/social">Social</Link></li>
          </ul>
        </nav>
      </div>
		);
	}
}
