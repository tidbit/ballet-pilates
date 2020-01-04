import { h, Component } from 'preact';
import Match, { Link } from 'preact-router/match';
import { observer } from 'mobx-react';
import style from './style.scss';

import Icon from '../icon';

import { appData } from '../../store/app-data';

@observer
export default class Header extends Component {

  toggleNav = (e) => {
    const { toggleMenu } = appData;
    e.preventDefault();
    toggleMenu();
  }

  render() {
    const { showMenu } = appData;
    return (
      <header class={style.header}>
        <div class="wrapper">

          <nav class={[style.mainNav, 'nav'].join(' ')}>
            <h1><Link href="/">Ballet & Pilates By Victoria</Link></h1>
            <ul>
              <li class={style.contact}>
                <Link href="/contact">
                  <Icon name={'contact'} color={'#62625E'} width={57} height={37} />
                  <span>Contact</span>
                </Link>
              </li>
              <li class={style.signup}>
                <a target="_blank" href="https://clients.mindbodyonline.com/classic/ws?studioid=27108&stype=-2&subTab=info">
                  <Icon name={'login'} color={'#62625E'} width={52} height={49} />
                  <span>Login</span>
                </a>
              </li>
            </ul>
          </nav>

          <Match path="/">
            {({ matches, path, url }) => !matches && (

              <nav class={[style.classNav, 'nav'].join(' ')}>
                <ul class={style.classNav}>
                  <li><Link activeClassName={style.current} href="/children-classes">Children Classes</Link></li>
                  <li><Link activeClassName={style.current} href="/adult-classes">Adult Classes</Link></li>
                  <li><Link activeClassName={style.current} href="/private-sessions">Private Sessions</Link></li>
                </ul>
              </nav>

            )}
          </Match>

          <button class={[style.toggleNav, showMenu ? style.active : ''].join(' ')} title="Toggle Menu" onClick={this.toggleNav}><span>Menu</span></button>

        </div>
      </header>
    );
  }
}
