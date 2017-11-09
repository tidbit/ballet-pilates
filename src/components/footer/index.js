import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { gql, graphql } from 'react-apollo';

import withData from '../withData';
import LoadingSpinner from '../loading-spinner';
import EmailSubscribe from '../email-subscribe';

import style from './style.scss';

class Footer extends Component {

	render({ data: { loading, SiteInfo }, ...props }, {}) {
		return (
        <footer class={[ style.footer, 'clearfix' ].join(' ') }>
          <div class="wrapper">
            { loading ? <LoadingSpinner /> : <h3>{ SiteInfo.footerTitle }</h3> }
          </div>

          <div class="wrapper">
            <div class={ style.footerCol }>

            <EmailSubscribe />

            <h4>Questions? Get in touch!</h4>

            <p>
              <a href="mailto:balletandpilates@gmail.com?subject=Ballet%20and%20Pilates">balletandpilates@gmail.com</a>
              <br /><a target="_blank" href="https://clients.mindbodyonline.com/classic/home?studioid=27108" title="See the class schedule">Class Schedule</a>
              <br /><a target="_blank" href="https://goo.gl/maps/Ww4x1">Get Directions</a>
              <br />281.855.0255
              <br /><a target="_blank" href="https://clients.mindbodyonline.com/classic/ws?studioid=27108&stype=-2&subTab=info">Login</a>
              <br /><iframe id="getOurApp" scrolling="no" allowtransparency="true" src="https://clients.mindbodyonline.com/connect/appbutton" style="border: none;width:200px;height:48px;margin: 20px 0;"></iframe>
            </p>

          </div>

          <div class={ style.footerCol }>
            <div class={ style.iframeWrapper }>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.22181442122!2d-95.64194039999998!3d29.8867086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d0cdbf20aaaf%3A0xddb25e12a6d01bcd!2s15544+Ridge+Park+Dr%2C+Houston%2C+TX+77095!5e0!3m2!1sen!2sus!4v1433523478239" frameborder="0"></iframe>
            </div>

            <h4 class={ style.mapTitle }>Drop-ins welcome, swing on by!</h4>

          </div>
        </div>

        <div class="wrapper">
          { loading ? <LoadingSpinner /> : <p class={ style.copyright }>{ SiteInfo.footerCopyright }</p> }
        </div>
      </footer>
		);
	}
}

const siteInfo = gql`
query {
  SiteInfo(id:"cj97sbb83hzqw0128cva2wlrd") {
    footerTitle,
    footerCopyright
  }
}
`;

export default withData(graphql(siteInfo)(Footer));
