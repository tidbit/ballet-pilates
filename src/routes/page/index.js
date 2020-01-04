import { h, Component } from 'preact';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import LoadingSpinner from '../../components/loading-spinner';
import Sidebar from '../../components/sidebar';
import withData from '../../components/withData';

import style from './style.scss';

const debug = false;

class Page extends Component {
  render({ page, path, data: { loading, page: Page } }, { time, count }) {
    return loading ? <LoadingSpinner /> : (
      <div class="wrapper">
        {(Page.masthead) && (
          <div class={style.masthead}>
            <img src={Page.masthead.url} title={`${page} masthead image`} />
          </div>
        )}

        <div class={style.primaryCol}>

          {(Page.title || Page.subtitle) && (
            <header>
              {Page.title && <h1>{Page.title}</h1>}
              {Page.subtitle && <h2>{Page.subtitle}</h2>}
            </header>
          )}

          {Page.content && <div class="page-content" dangerouslySetInnerHTML={{ __html: Page.content }} />}

          {Page.videoEmbeds && (
            Object.keys(Page.videoEmbeds).map(i => {
              return (
                <div class={style.videoContainer}>
                  <iframe src={Page.videoEmbeds[i]} frameborder="0"></iframe>
                </div>
              )
            })
          )}

          {debug && Object.keys(Page).map((k, v) => (
            <p>{k} - {JSON.stringify(Page[k])}</p>
          ))}

        </div>

        <Sidebar />

      </div>
    );
  }
}


const page = gql`
query pageDetails($page: PageType) {
  page(where: { page: $page }) {
    updatedAt,
    title,
    subtitle,
    content,
    masthead{
      url,
      fileName
    },
    videoEmbeds
  },
}
`;

export default withData(graphql(page, {
  options: ({ page }) => ({ variables: { page } })
})(Page));
