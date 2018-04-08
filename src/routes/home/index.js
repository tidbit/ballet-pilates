import { h, Component } from 'preact';
import { gql, graphql } from 'react-apollo';

import LoadingSpinner from '../../components/loading-spinner';
import CTABlocks from '../../components/cta-blocks';
import Quote from '../../components/quote';
import ClassesOverview from '../../components/classes-overviews';
import withData from '../../components/withData';

const masthead = '/assets/img/home-masthead.jpg';

import style from './style.scss';

class Home extends Component {

  componentDidMount() {
    console.log("Home didMount", this);
  }

	render({ page, path, data: { loading, Page }}) {
    return loading ? <LoadingSpinner /> : (
      <div class={ style.home }>
        <div class={ `wrapper ${ style.wrapper }` }>
          { ( Page && Page.masthead !== null ) ? (
            <div class={ style.masthead }>
              <img src={ Page.masthead.url } title={ `${page} masthead image` } />
            </div>
          ) : (
            <div class={ style.masthead }>
              <img src={ masthead } title={ `${page} masthead image` } />
            </div>
          )}

          <CTABlocks />

        </div>

        <Quote />

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
