import { h, Component } from 'preact';
import style from './style.scss';

export default class Quote extends Component {
	render() {
		return (
      <div class={ style.quoteWrapper }>
        <div class="wrapper">
          <div class={ style.quote }>
            <blockquote>
              <h3>Be inspired &amp; challenged to find your best self &mdash; all while having fun. More than classes, they're experiences!</h3>
              <span>&ndash; Victoria Simo, Owner &amp; Instructor</span>
              <span>Headshot Image Here</span>
            </blockquote>
          </div>
        </div>
      </div>
    );
	}
}
