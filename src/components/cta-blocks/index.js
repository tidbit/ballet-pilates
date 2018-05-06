import { h, Component } from 'preact';
import style from './style.scss';

import Icon from '../icon';

const blocks = [{
  title: "See Upcoming Classes",
  icon: "calendar",
  iconSize: 46,
  iconStyle: style.calendarIcon,
  linkText: "View Calendar",
  linkHref: "#"
}, {
  title: "Get Mindbody Connect",
  icon: "download",
  iconSize: 42,
  iconStyle: style.downloadIcon,
  linkText: "Download Now",
  linkHref: "#"
}, {
  title: "Reserve Your Spot",
  icon: "signup",
  iconSize: 46,
  iconStyle: style.signupIcon,
  linkText: "Sign Up",
  linkHref: "#"
}];

export default class CTABlocks extends Component {
	render() {
		return (
      <div class={ style.ctaBlocks }>
        { blocks.map( block => (
          <div class={ style.ctaBlock }>
            <header>
              <h3 class={ style.ctaTitle }>{ block.title }</h3>
              <div class={ style.ctaIconGroup }>
                <Icon name={block.icon} color={'#62625E'} size={block.iconSize} class={block.iconStyle} />
              </div>
            </header>
            <a class={ style.ctaLink } href={ block.linkHref }>{ block.linkText }</a>
          </div>
        )) }
      </div>
    );
	}
}
