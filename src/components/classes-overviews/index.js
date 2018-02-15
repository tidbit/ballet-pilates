import { h, Component } from 'preact';
import style from './style.scss';

export default class LoadingSpinner extends Component {
	render() {
		return (
      <div class={ style.spinner }>
        <div class={ style.rect1 }></div>
        <div class={ style.rect2 }></div>
        <div class={ style.rect3 }></div>
        <div class={ style.rect4 }></div>
        <div class={ style.rect5 }></div>
      </div>
    );
	}
}
