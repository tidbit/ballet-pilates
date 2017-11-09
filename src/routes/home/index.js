import { h, Component } from 'preact';
import { gql, graphql } from 'react-apollo';

import withData from '../../components/withData';

import style from './style';

class Home extends Component {
	render({ data: { loading, Page }}) {
		return loading ? <div>Loading...</div> : (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
        { JSON.stringify(Page) }
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
