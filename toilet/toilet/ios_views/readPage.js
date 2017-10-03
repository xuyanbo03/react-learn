import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  NavigatorIOS
} from 'react-native';

import Util from './util';
import Search from './read/search';
import Topic from './read/topic';
import Recommend from './read/recommend';
import Category from './read/category';
import List from './read/list';

class Hr extends Component{
  render(){
    return (
      <View>
        <View style={styles.hr}/>
      </View>
    )
  }
}

export default class read extends Component{
  render(){
    return (
      <NavigatorIOS initialRoute={{
        component:readPage,
        title:'阅读',
        navigationBarHidden:true
      }} style={{flex:1}}/>
    )
  }
}

class readPage extends Component {
  constructor(){
    super();
    this.state={
      isShow:false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Search/>
        <Hr/>
        {
          this.state.isShow?
            <ScrollView style={styles.container}>
              <Topic/>
              <Hr/>
              <Recommend/>
              <Hr/>
              <Category/>
              <Hr/>
              <Recommend/>
            </ScrollView>
            :null
        }
      </View>
    )
  }

  //fetch data
  componentDidMount(){
    this.setState({
      isShow:true
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  hr:{
    borderColor:'#F0F0F0',
    borderWidth:Util.pixel,
    marginTop:10
  }
});