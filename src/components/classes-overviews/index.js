import { h, Component } from 'preact';
import style from './style.scss';

export default class ClassesOverview extends Component {
  getImage = img => {
    return Object(img).url;
  }

  getLink = page => {
    return `/${page.toLowerCase().split('_').join('-')}`;
  }

	render({classes}) {
		return (
      <div class={`wrapper ${style.classesOverview}`}>
        { classes.map( c => (
          <div class={style.classOverview}>
            <img src={this.getImage(c.previewImage)} />
            <div class={style.classGroup}>
              <header>
                <h3>{c.title}</h3>
                <h4>{c.subtitle}</h4>
              </header>
              <p>{c.shortDescription}</p>
              <footer>
                <a href={this.getLink(c.page)}>Learn More</a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    );
	}
}
