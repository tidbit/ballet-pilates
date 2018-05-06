import { h, Component } from 'preact';
import style from './style.scss';

const classes = [{
  image: 'class-image',
  title: 'Children Classes',
  subtitle: 'imagine. dance. play.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu consectetur augue, id tristique eros. Praesent vel enim nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum viverra eros lorem, non eleifend nunc hendrerit non.',
  link: '#'
},{
  image: 'class-image',
  title: 'Adult Classes',
  subtitle: 'lengthen. strengthen. love your body.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu consectetur augue, id tristique eros. Praesent vel enim nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum viverra eros lorem, non eleifend nunc hendrerit non.',
  link: '#'
},{
  image: 'class-image',
  title: 'Private Lessons',
  subtitle: 'stretch. balance. educate.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu consectetur augue, id tristique eros. Praesent vel enim nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum viverra eros lorem, non eleifend nunc hendrerit non.',
  link: '#'
}]

export default class ClassesOverview extends Component {
	render() {
		return (
      <div class={`wrapper ${style.classesOverview}`}>
        { classes.map( c => (
          <div class={style.classOverview}>
            <img src="https://placeimg.com/320/200/any" />
            <div class={style.classGroup}>
              <header>
                <h3>{c.title}</h3>
                <h4>{c.subtitle}</h4>
              </header>
              <p>{c.description}</p>
              <footer>
                <a href={c.link}>Learn More</a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    );
	}
}
