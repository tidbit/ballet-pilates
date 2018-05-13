import { h, Component } from 'preact';
import style from './style.scss';

import Icon from '../icon';

export default class CTABlocks extends Component {

  getIconStyle = icon => {
    return style[`${icon.toLowerCase()}Icon`];
  }

	render({blocks}) {

		return (
      <div class={ style.ctaBlocks }>
        { blocks.map( block => (
          <div class={ style.ctaBlock }>
            <header>
              <h3 class={ style.ctaTitle }>{ block.title }</h3>
              <div class={ style.ctaIconGroup }>
                <Icon
                  size={block.iconsize ? block.iconsize : 46 }
                  class={this.getIconStyle(block.icon)}
                  name={block.icon.toLowerCase()}
                  color={'#62625E'}
                />
              </div>
            </header>
            <a class={ style.ctaLink } href={ block.url }>{ block.linkLabel }</a>
          </div>
        )) }
      </div>
    );
	}
}
