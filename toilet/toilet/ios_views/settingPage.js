import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Util from './util';
import Detail from './setting/detail';
import Help from './setting/help';
import Tips from './setting/tips';
import About from './setting/about';

export default class setting extends Component {
  render() {
    return (
      <NavigatorIOS initialRoute={{
        component: settingPage,
        title: '设置',
        navigationBarHidden: true
      }} style={{flex: 1}}/>
    )
  }
}

class settingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View>
          <View style={styles.img_view}>
            <Image style={styles.icon} source={require('./html/close_blue.png')} resizeMode="contain"/>
            <Text style={styles.version}>v1.0.0</Text>
          </View>
          <TouchableOpacity style={styles.text_view} navigator={this.props.navigator}
                            onPress={this._goPage.bind(this, Detail, '功能介绍')}>
            <Text style={styles.text}>功能介绍</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text_view} navigator={this.props.navigator}
                            onPress={this._goPage.bind(this, Help, '帮助中心')}>
            <Text style={styles.text}>帮助中心</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text_view} navigator={this.props.navigator}
                            onPress={this._goPage.bind(this, Tips, '服务条款')}>
            <Text style={styles.text}>服务条款</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.text_view, styles.bottom_add]} navigator={this.props.navigator}
                            onPress={this._goPage.bind(this, About, '关于')}>
            <Text style={styles.text}>关于</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }

  _goPage(component, title) {
    this.props.navigator.push({
      component: component,
      title: title
    })
  }
}

const styles = StyleSheet.create({
  img_view: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 88,
    height: 100
  },
  text_view: {
    borderTopWidth: Util.pixel,
    borderTopColor: '#ececec',
    height: 50,
    paddingLeft: 15,
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    color: '#868887',
    fontWeight: '400'
  },
  bottom_add: {
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#ececec'
  },
  version: {
    fontSize: 13,
    fontWeight: '300',
    marginTop: 10,
    marginBottom: 30
  }
});