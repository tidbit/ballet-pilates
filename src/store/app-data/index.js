import {observable} from 'mobx';

const debug = false;

class AppData {
  @observable showMenu = false;

  toggleMenu = () => {
    debug && console.log("toggle menu called", this.showMenu);
    this.showMenu = !this.showMenu;
  }

}

const appData = new AppData();
export {appData};
