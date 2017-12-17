import { h, Component } from 'preact';

import style from './style.scss';

const debug = false;

export default class HomeSlider extends Component {
  state = {
    slideIndex: 0
  }

  componentDidMount() {

    console.log("START HERE!");
    this.interval = this.newInterval();

  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = null;
  }

  newInterval() {
    return setInterval(() => {

      debug && console.log("interval fire:");
      const newSlideIndex = this.state.slideIndex + 1;
      this.setState({ slideIndex: newSlideIndex > 2 ? 0 : newSlideIndex });

    }, 5000);
  }

  // Set the index to the current item if we enter into it
  handleItemSelect = ( e, i ) => {
    e.preventDefault();
    this.setState({slideIndex: i});
  }

  // Turn the interval off if mouse enters slideshow
  handleMouseEnter = (e) => {
    debug && console.log("mouse enter:", e);
    clearInterval(this.interval);
    this.interval = null;
  }

  // Turn interval back on if mouse leaves slideshow
  handleMouseLeave = (e) => {
    debug && console.log("mouse leave:", e);
    this.interval = this.newInterval();
  }

	render({}, { slideIndex }) {

    const slideData = [{
      className: style.kids,
      link: "/children-classes/",
      text: "Children Classes"
    }, {
      className: style.pilates,
      link: "/adult-classes/",
      text: "Adult Classes"
    }, {
      className: style.adult,
      link: "/private-sessions/",
      text: "Private Sessions"
    }];

    return (
      <div class={style.homeSlider}>
        <div class="wrapper">

        <ul class={['clearfix', style.slides].join(' ')} onMouseEnter={ this.handleMouseEnter } onMouseLeave={ this.handleMouseLeave }>
        { slideData.map( (slide, i) => (
            <li class={[slide.className, style.slide, slideIndex === i ? style.current : ''].join(' ') } key={ i } onMouseEnter={ (e) => this.handleItemSelect(e, i) }>
            <a href={slide.link}>
              <span>{slide.text}</span>
            </a>
          </li>
        ))}
        </ul>

        <ul class={ style.sliderNav }>
        { slideData.map( (slide, i) => (
          <li class={[slide.className, slideIndex === i ? style.current : '' ].join(' ') } onClick={ (e) => this.handleItemSelect(e, i) } />
        ))}
        </ul>
        </div>
      </div>
    );
  }
}
