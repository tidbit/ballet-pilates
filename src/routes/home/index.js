import { h, Component } from "preact";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import Sidebar from "../../components/sidebar";
import LoadingSpinner from "../../components/loading-spinner";
import CTABlocks from "../../components/cta-blocks";
import Quote from "../../components/quote";
import ClassesOverview from "../../components/classes-overviews";
import withData from "../../components/withData";

const masthead = "/assets/img/home-masthead.jpg";

import style from "./style.scss";

class Home extends Component {
  render({ page, path, data: { loading, page: Page, siteInfo, pages } }) {
    const { homePageQuote, homePageQuoteImage, contentBlocks } =
      Object(siteInfo);
    console.log(siteInfo);

    return loading ? (
      <LoadingSpinner />
    ) : (
      <div class={[style.home, "home"].join(" ")}>
        <div class={`wrapper ${style.wrapper}`}>
          {Page && Page.masthead !== null ? (
            <div class={style.masthead}>
              <img src={Page.masthead.url} title={`${page} masthead image`} />
            </div>
          ) : (
            <div class={style.masthead}>
              <img src={masthead} title={`${page} masthead image`} />
            </div>
          )}

          {contentBlocks.length > 0 && <CTABlocks blocks={contentBlocks} />}
        </div>

        {homePageQuote && (
          <Quote quote={homePageQuote} quoteImage={homePageQuoteImage} />
        )}

        <ClassesOverview classes={pages} />

        <Sidebar />
      </div>
    );
  }
}

const page = gql`
  query {
    page(where: { page: Home }) {
      masthead {
        id
        url
        handle
        fileName
      }
    }
    siteInfo(where: { id: "cj97sbb83hzqw0128cva2wlrd" }) {
      homePageQuote
      homePageQuoteImage {
        id
        fileName
        url
      }
      contentBlocks {
        icon
        iconsize
        title
        linkLabel
        url
      }
    }
    pages(
      where: { page_in: [Children_Classes, Adult_Classes, Private_Sessions] }
    ) {
      page
      title
      subtitle
      shortDescription
      previewImage {
        url
        fileName
      }
    }
  }
`;

export default withData(graphql(page)(Home));
