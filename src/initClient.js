import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

let apolloClient = null;

const GRAPHCMS_API = 'https://api-uswest.graphcms.com/v1/ck4wh9so4ds6p01hf6c83dckl/master';
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjoyLCJ0b2tlbklkIjoiZTk5ODQ0ZWUtYzM5YS00N2U0LWExYWYtNWU0MGNmN2EwNjNmIiwiaWF0IjoxNTc4MTU4ODcyLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyJ9.n8rcHTzVmz9uTfg6BstsrbWCGEM1xJmwIKe65vqXDYLZuqahZuhf-udBxSGaWVJrFEupsHemMrRfuW33gBvd5Foy_7PLeV7fzysnPcZYj0VDJR2kEbZvweRbu5T0UZ7aV6wdcme8caL8n8KmXLhe2ulRZ-JnY7fKJk84dxuimlV-i8kmfIp1Tp17PhfiyzcLhFrtagan5U3aJo6_DFAt9Hh1GT2SXaLj4yVZEQQnmcxdicdCawgUvyL7R95ZapMnVFzch5uiw-hwHTtD4z2rM-ps7Kfn2IfjM3D9GtAoxD01ld7ZXr2CmsKhZxY7S_W52E-FeSvlyZ5r09HolTeV6Zb4E5gXBv7UXeQXq4qzKHpmwoQOGWrILAuL8yLvUR1s8JZi9ApO5VhBKw7sUjaVCJvThvSAsnzvZkU53cwpHTf-kPv2aiKziaJd2vrtDa_apPbBbuOLhlYxD8tZ_aHzW9hPfKdr5XV3kqgjk9JmmpJtOMHlm-Fd46w-iy-JtFtsbtpRS5lW3lj8HTPyFKoQkVdSiITEput4ZaBEnOedmxYFvFfuc6zgOiZGhkwPZcsDcgzF4ziGWn9kqC9ntuVsef5A6fNLHeqkCsFyLvTqdK-PMpcO22soxYuXiYgxD8wJmWRgsOkdJiB2eoj2uQ8kiaCqt2pnMeNTuAvMhyf8QVE';

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
