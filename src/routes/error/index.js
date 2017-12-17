import { h, Component } from 'preact';
import style from './style';

export default class Error extends Component {
	render({ type }) {
		return (
			  <div class={style.home}>
				<h1>Error { type }</h1>
				<p>Sorry, you found a missing page. <a href="/">Go home</a></p>
			  </div>
		);
	}
}
