import { h, Component } from 'preact';
import Match, { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
        <header class={style.header}>
          <div class="wrapper">

            <nav id="main-nav" class="nav">
              <h1><Link href="/">Ballet & Pilates By Victoria</Link></h1>
              <ul>
                <li id="signup"><Link target="_blank" href="https://clients.mindbodyonline.com/classic/ws?studioid=27108&stype=-2&subTab=info">Login</Link></li>
                <li id="contact"><Link href="/contact">Contact&nbsp;Us</Link></li>
              </ul>
            </nav>

            <Match path="/">
              { ({matches, path, url}) => !matches && (

                  <nav id="class-nav" class="nav">
                    <ul class="class-nav">
                      <li><Link activeClassName={style.current} href="/children-classes">Children Classes</Link></li>
                      <li><Link activeClassName={style.current} href="/adult-classes">Adult Classes</Link></li>
                      <li><Link activeClassName={style.current} href="/private-sessions">Private Sessions</Link></li>
                    </ul>
                  </nav>

              )}
            </Match>

            <button id="toggle-nav" title="Toggle Menu" onClick={ (e) => console.log("toggle nav") }><span>Menu</span></button>

          </div>
        </header>
		);
	}
}
