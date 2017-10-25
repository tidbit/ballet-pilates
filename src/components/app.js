import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home';
import Page from '../routes/page';
import Error from '../routes/error';

// import Home from 'async!../routes/home';
// import Page from 'async!../routes/page';
// import Error from 'async!../routes/error';

import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import Redirect from './redirect';

import routes from '../routes.json';


export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {

    console.log(routes);
		return (
			<div id="app">
				<Header />

        <div id="main" role="main" class="clearfix">
          <div class="wrapper">
            <div class="primary-col">

              <Router onChange={this.handleRoute}>
                <Home path="/" />
                { routes.map( route => <Page path={ route } /> )}
                <Error type="404"  default />
              </Router>

            </div>

            <div class="secondary-col">
              <Sidebar />
            </div>
          </div>
        </div>

        <Footer />
			</div>
		);
	}
}
