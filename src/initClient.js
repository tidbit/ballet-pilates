import { ApolloClient, createNetworkInterface } from 'react-apollo';

let apolloClient = null;

const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/cj8z2m8kq0e150134vdnm4ufq';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MDk4MjgxNTEsImNsaWVudElkIjoiY2l2Z29zNmNqMDE5MjAxODRucDAxZGRkMiIsInByb2plY3RJZCI6ImNqOHoybThrcTBlMTUwMTM0dmRubTR1ZnEiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqOWxzcDVsdDcxNnAwMTIxMmlpZ2NiNDIifQ.w2NYJeFjqCwxeawzy4ubhiSuYvDPMwPiI-q5PyNpPa0';

function createClient ( initialState ) {

  const networkInterface = createNetworkInterface({
    uri: GRAPHCMS_API,
    ops: {
      credentials: 'include'
    }
  });

  networkInterface.use([{
    applyMiddleware(req, next) {
      if(!req.options.headers) {
        req.options.headers = {};
      }

      req.options.headers.authorization = `Bearer ${token}`;
      next();
    }
  }]);

  return new ApolloClient({
    initialState,
    dataIdFromObject: result => result.id || null,
    networkInterface
  });

};


const initClient = function initClient( initialState ) {
  if( !apolloClient ) {
    apolloClient = createClient( initialState );
  }

  return apolloClient;
};

export default initClient;
