import {appData} from './app-data';

const debug = false;

const store = {
  appData
};

debug && window.store = store;

export {store};
