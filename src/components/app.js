import { h, Component } from 'preact';
import { Router, } from 'preact-router';
import Match from 'preact-router/match';

import Home from '../routes/home';
import Page from '../routes/page';
import Error from '../routes/error';

import Header from './header';
import Footer from './footer';
import Redirect from './redirect';

import routes from '../routes.json';

import { appData } from '../store/app-data';

import s from '../style/index.scss';

export default class App extends Component {
  /** 
  * Gets fired when the route changes.
  * @param {Object} event "change" event from [preact-router](http://git.io/preact-router)
  * @param {string} event.url The newly routed URL
  */
  handleRoute = e => {

    const { showMenu, toggleMenu } = appData;

    if (e.url !== e.previous) {
      (typeof window !== "undefined") && window.scrollTo(0, 0);

      // if the menu is open on route change, let's close it
      if (showMenu) {
        toggleMenu();
      }

    }

    this.currentUrl = e.url;
  };

  render() {

    return (
      <div id="app">
        <Header />

        <div role="main" class={['mainContent', 'clearfix'].join(' ')}>
          <Router onChange={this.handleRoute}>
            {Object.keys(routes).map(route => (route === 'Home' ?
              <Home path="/" /> :
              <Page page={route} path={routes[route]} />
            ))}
            <Error type="404" default />
          </Router>
        </div>

        <Footer />
      </div>
    );
  }
}
