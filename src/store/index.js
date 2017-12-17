import {appData} from './app-data';

const debug = false;

const store = {
  appData
};

debug && (typeof window !== "undefined") && window.store = store;

export {store};
