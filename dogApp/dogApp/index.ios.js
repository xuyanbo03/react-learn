/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import List from './app/creation/index';
import Edit from './app/edit/index';
import Account from './app/account/index';


export default class dogApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'list'
    }
  }

  render() {
    return (
      <TabBarIOS tintColor='#ee735c'>
        <Icon.TabBarItem iconName='ios-videocam-outline' selectedIconName='ios-videocam'
                         selected={this.state.selectedTab === 'list'} onPress={()=>{this.setState({selectedTab:'list'})}}>
          <List/>
        </Icon.TabBarItem>
        <Icon.TabBarItem iconName='ios-recording-outline' selectedIconName='ios-recording'
                         selected={this.state.selectedTab === 'edit'} onPress={()=>{this.setState({selectedTab:'edit'})}}>
          <Edit/>
        </Icon.TabBarItem>
        <Icon.TabBarItem iconName='ios-more-outline' selectedIconName='ios-more'
                         selected={this.state.selectedTab === 'account'} onPress={()=>{this.setState({selectedTab:'account'})}}>
          <Account/>
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('dogApp', () => dogApp);
