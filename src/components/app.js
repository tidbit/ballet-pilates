import { h, Component } from 'preact';
import { Router, } from 'preact-router';
import Match from 'preact-router/match';

// Unnecessary unless it's a dramatic redesign
// import Home from '../routes/home';
import Page from '../routes/page';
import Error from '../routes/error';

import Header from './header';
import HomeSlider from './home-slider';
import Footer from './footer';
import Redirect from './redirect';

import routes from '../routes.json';

import s from '../style/index.scss';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
    console.log("handleRoute:", e);
    if( e.url !== e.previous ) {
      (typeof window !== "undefined") && window.scrollTo(0,0);
    }
		this.currentUrl = e.url;
	};

	render() {

    console.log(s);
		return (
			<div id="app">
				<Header />
        <Match path="/">
          { ({ matches, path, url }) => (
            matches && <HomeSlider />
          ) }
        </Match>

        <div role="main" class={ [ 'mainContent', 'clearfix'].join(' ') }>
          <Router onChange={this.handleRoute}>
            { /* <Home path="/" /> */ }
            { Object.keys(routes).map( route => <Page page={ route } path={ routes[route] } /> )}
            <Error type="404"  default />
          </Router>
        </div>

        <Footer />
			</div>
		);
	}
}
