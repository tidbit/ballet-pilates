import { h, Component } from 'preact';
import style from './style.scss';

import headshot from '../../assets/img/victoria-headshot.jpg';

export default class Quote extends Component {
	render({quote}) {
		return (
      <div class={ style.quoteWrapper }>
        <div class="wrapper">
          <div class={ style.quote }>
            <blockquote>
              <h3 class={ style.quoteText }>
                {quote}
              </h3>
              <span class={ style.byLine }>&ndash; Victoria Simo, Owner &amp; Instructor</span>
              <img class={ style.headshot } src={ headshot } />
            </blockquote>
          </div>
        </div>
      </div>
    );
	}
}
