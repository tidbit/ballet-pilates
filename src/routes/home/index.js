import { h, Component } from 'preact';
import { gql, graphql } from 'react-apollo';

import Sidebar from '../../components/sidebar';
import LoadingSpinner from '../../components/loading-spinner';
import CTABlocks from '../../components/cta-blocks';
import Quote from '../../components/quote';
import ClassesOverview from '../../components/classes-overviews';
import withData from '../../components/withData';

const masthead = '/assets/img/home-masthead.jpg';

import style from './style.scss';

class Home extends Component {

  componentDidMount() {
    // console.log("Home didMount", this);
  }

	render({ page, path, data: { loading, Page, SiteInfo, allPages }}) {
    const { homePageQuote, contentBlocks } = Object(SiteInfo);

    return loading ? <LoadingSpinner /> : (
      <div class={ [style.home, 'home'].join(' ') }>
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

          {contentBlocks.length > 0 && (
              <CTABlocks blocks={contentBlocks} />
          )}

        </div>

        {homePageQuote && <Quote quote={homePageQuote} />}

        <ClassesOverview classes={allPages} />

        <Sidebar />

      </div>
		);
	}
}

const page = gql`
query {
  Page(page: Home) {
    masthead{
      id,
      url,
      handle,
      fileName
    }
  },
  SiteInfo(id:"cj97sbb83hzqw0128cva2wlrd") {
    homePageQuote,
    contentBlocks {
      icon,
      iconsize,
      title,
      linkLabel,
      url
    }
  },
  allPages(filter: {
    page_in :[Children_Classes, Adult_Classes, Private_Sessions]
  }) {
    page,
    title,
    subtitle,
    shortDescription,
    previewImage {
      url,
      fileName
    }
  },
}`

export default  withData(graphql(page)(Home));
