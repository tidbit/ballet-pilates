import { h, Component } from 'preact';
import Match, { Link } from 'preact-router/match';
import style from './style';

export default class Sidebar extends Component {
	render() {
		return (
        <nav>
          <ul class="side-nav class-nav">
            <li><Link activeClassName="current" href="/children-classes">Children Classes</Link>
              <ul class="sub-nav">
                <li><Link activeClassName="current" href="/children-classes/fall-spring">Fall &amp; Spring</Link></li>
                <li><Link activeClassName="current" href="/children-classes/summer">Summer</Link></li>
                <li><Link target="_blank" href="https://clients.mindbodyonline.com/classic/ws?studioid=27108&stype=-106&sView=week">Schedule</Link></li>
              </ul>
            </li>
            <li><Link activeClassName="current" href="/adult-classes">Adult Classes</Link>
              <ul class="sub-nav">
                <li><Link activeClassName="current" href="/adult-classes/new-to-us">New to Us</Link></li>
                <li><Link target="_blank" href="https://clients.mindbodyonline.com/classic/ws?studioid=27108&stype=-103&sView=week">Schedule</Link></li>
              </ul>
            </li>
            <li><Link activeClassName="current" href="/private-sessions/">Private Sessions</Link></li>
          </ul>
          <ul class="side-nav social-nav">
            <li><Link activeClassName="current" href="/about-victoria">About Victoria</Link></li>
            <li><Link activeClassName="current" href="/instructors">Instructors</Link></li>
            <li><Link activeClassName="current" href="/contact">Contact Us</Link></li>
            <li><Link activeClassName="current" href="/social">Social</Link></li>
          </ul>
        </nav>
		);
	}
}
