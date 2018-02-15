import { h, Component } from 'preact';
import style from './style.scss';

const blocks = [{
  title: "See Upcoming Classes",
  icon: "Calendar Icon",
  linkText: "View Calendar",
  linkHref: "#"
}, {
  title: "Get Mindbody Connect",
  icon: "Download Icon",
  linkText: "Download Now",
  linkHref: "#"
}, {
  title: "Reserve Your Spot",
  icon: "Add User Icon",
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
              <h3>{ block.title }</h3>
              <span>{ block.icon }</span>
            </header>
            <a href={ block.linkHref }>{ block.linkText }</a>
          </div>
        )) }
      </div>
    );
	}
}
