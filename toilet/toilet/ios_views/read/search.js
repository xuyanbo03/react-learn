import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import Util from '../util';

export default class search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.search_input} placeholder="搜索" placeholderTextColor="#5E6877"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft:10,
    paddingRight:10,
    marginTop:20
  },
  search_input:{
    height:35,
    borderColor:'#EEEEEE',
    borderWidth:Util.pixel,
    //borderWidth:1,
    paddingLeft:5,
    borderRadius:3,
    fontSize:15
  }
});