import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Drawer from 'react-native-drawer';

import SideBar from './src/SideBar.js';
import Main from './src/Main.js';

export default class App extends Component {
  state={
    drawerOpen: false,
    drawerDisabled: false,
  };
  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };
  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
   content={<SideBar />}
   tapToOpen={true}
  tapToClose={true}
  openDrawerOffset={0.2} 
  panCloseMask={0.2}
  closedDrawerOffset={-3}
  styles={drawerStyles}
  tweenHandler={(ratio) => ({
    main: { opacity:(2-ratio)/2 }
  })}
>
        <Main />
      </Drawer>
    )
  }
}


const drawerStyles = {
  drawer: { shadowColor: '#000001', shadowOpacity: 0.3, shadowRadius: 10},
  main: {paddingLeft: 3},
}
const styles = StyleSheet.create({
  container: {
 flex: 1,
  }
})
