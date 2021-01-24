import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

let apolloClient = null;

const GRAPHCMS_API = 'https://api-us-east-1.graphcms.com/v2/ck4wh9so4ds6p01hf6c83dckl/master';
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MTE1MTA5NTAsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NrNHdoOXNvNGRzNnAwMWhmNmM4M2Rja2wvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZWRhYmI2ZWQtZDVmOC00YWMzLWJlNTctYzc4MTdiMzhjY2FkIiwianRpIjoiY2trYmcwZmw4MXYzMzAxejAybWdyN2drNyJ9.sIZw1r-OrelPPzEXS3NO4t15tpH8FzjEu_7y3ebEPwkelUpXFVofI1-kSXtsggJ2a5nNumsNmNgdKKzccyhN_a4whd2aqPwIj3XTLURanrjDaaNF333uHDKPQP3147YcjP3-CNHV_WFm3b9pZIDinQFI3vi6Jru-Jj-ychGiEmu9Ih9loQhqJo_Tfgtw-VT4g7XWzP5zbH5flOE942JZsnnew962jsDuQUWXOxJ7bx0XIohjy3FrN8CUX-Rk7s5HXs-OPlGAZM-h9bEbm5UDz0wQlEd8AW8cmjI48IfyI_BkgqeEhQj34ksr948VsTF74XD0Cvwk-gFInwOqSSWGNmlveK_KXPcDwN2BTeFbkrmppJd1hXRzyvD78O3Nt95a75RIAfecyBJSEo82KTwiqr7h2LBnrklmIpx45l5KDEYHU5VmAuOD4gvZNAtNEagk1nmAOvFgBuQNbn8UzukhKIYfSBp5hxTE5EFmjyDwxTspQIvGNTG8Xi4JGRxlf7n_CPFUnRfjrYJLraHaQrZk5yOE24KhZCeStJC5ftLnwEwt7h6wvehTUVsRpQYCSX7MHPY2R34FNtqqmFwguPNnNpcFFslHFQW7hDnNteXVFufCmOJ1-1E3huwilarPXJdLpDi0ATWfXLOBcxVjTWYdN9cuYwkwmhqocrQ2V0mQDEM'

function createClient(initialState) {

  const httpLink = createHttpLink({
    uri: GRAPHCMS_API
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      }
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    dataIdFromObject: result => result.id || null,
    cache: new InMemoryCache(),
  });

};


const initClient = function initClient(initialState) {
  if (!apolloClient) {
    apolloClient = createClient(initialState);
  }

  return apolloClient;
};

export default initClient;
