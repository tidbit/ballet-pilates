import { h, Component } from 'preact';
import { gql, graphql } from 'react-apollo';

import LoadingSpinner from '../../components/loading-spinner';
import withData from '../../components/withData';

const masthead = '/assets/img/home-masthead.jpg';

import style from './style';

class Home extends Component {

  componentDidMount() {
    console.log("Home didMount", this);
  }

	render({ page, path, data: { loading, Page }}) {
    return loading ? <LoadingSpinner /> : (
      <div class="home">
        <div class="wrapper">
          { ( Page && Page.masthead !== null ) ? (
            <div class={ style.masthead }>
              <img src={ Page.masthead.url } title={ `${page} masthead image` } />
            </div>
          ) : (
            <div class={ style.masthead }>
              <img src={ masthead } title={ `${page} masthead image` } />
            </div>
          )}

          <div class="cta-blocks">
            <div class="cta-block">
              <header>
                <h3>See Upcoming Classes</h3>
                <span>Calendar Icon</span>
              </header>
              <a href="#">View Calendar</a>
            </div>

            <div class="cta-block">
              <header>
                <h3>Get Mindbody Connect</h3>
                <span>Download Icon</span>
              </header>
              <a href="#">Download Now</a>
            </div>

            <div class="cta-block">
              <header>
                <h3>Reserve Your Spot</h3>
                <span>Add User Icon</span>
              </header>
              <a href="#">Sign Up</a>
            </div>
          </div>

        </div>

        <div class="quote-wrapper">
          <div class="wrapper">
            <div class="quote">
              <blockquote>
                <h3>Be inspired &amp; challenged to find your best self &mdash; all while having fun. More than classes, they're experiences!</h3>
                <span>&ndash; Victoria Simo, Owner &amp; Instructor</span>
                <span>Headshot</span>
              </blockquote>
            </div>
          </div>
        </div>

        <div class="wrapper classes-overview">
          <div class="class-overview children-overview">
            <header>
              <span>class image</span>
              <h3>Children Classes</h3>
              <h4>imagine. dance. play.</h4>
            </header>
            <p>class description</p>
            <footer>
              <a href="#">Learn More</a>
            </footer>
          </div>

          <div class="class-overview children-overview">
            <header>
              <span>class image</span>
              <h3>Children Classes</h3>
              <h4>imagine. dance. play.</h4>
            </header>
            <p>class description</p>
            <footer>
              <a href="#">Learn More</a>
            </footer>
          </div>

          <div class="class-overview children-overview">
            <header>
              <span>class image</span>
              <h3>Children Classes</h3>
              <h4>imagine. dance. play.</h4>
            </header>
            <p>class description</p>
            <footer>
              <a href="#">Learn More</a>
            </footer>
          </div>

        </div>

        <div class="wrapper">
          <div class={style.home}>
            <p>This is the Home component.</p>
            { JSON.stringify(Page) }
          </div>
        </div>
      </div>
		);
	}
}

const page = gql`
query {
  Page(page: Home) {
    updatedAt,
    id,
    title,
    subtitle,
    content,
    masthead{
      id,
      url,
      handle,
      fileName
    },
    videoEmbeds
  }
}`

export default  withData(graphql(page)(Home));
