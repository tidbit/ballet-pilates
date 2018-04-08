import { h, Component } from 'preact';
import style from './style.scss';

import headshot from '../../assets/img/victoria-headshot.jpg';

export default class Quote extends Component {
	render() {
		return (
      <div class={ style.quoteWrapper }>
        <div class="wrapper">
          <div class={ style.quote }>
            <blockquote>
              <h3 class={ style.quoteText }>
                Be inspired &amp; challenged to find your best self &mdash; all while having fun. More than classes, they're experiences!
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
