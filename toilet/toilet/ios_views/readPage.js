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
              <Topic data={this.state.recommendTopic} navigator={this.props.navigator}/>
              <Hr/>
              <Recommend name="热门推荐" data={this.state.hotTopic} navigator={this.props.navigator}/>
              <Hr/>
              <Category data={this.state.category} navigator={this.props.navigator}/>
              <Hr/>
              <Recommend name="清新一刻" data={this.state.other} navigator={this.props.navigator}/>
              <View style={{height:30}}/>
            </ScrollView>
            :null
        }
      </View>
    )
  }

  //fetch data
  componentDidMount(){
    let that=this;
    Util.get('http://123.57.39.116:3000/data/read?type=config',function (data) {
      if(data.status){
        let obj=data.data;
        let hotTopic=obj.hotTopic;
        let recommendTopic=obj.recommendTopic;
        let category=obj.category;
        let other=obj.other;
        that.setState({
          isShow:true,
          recommendTopic:recommendTopic,
          hotTopic:hotTopic,
          category:category,
          other:other
        });
      }else{
        alert('服务异常,正在紧急修复,请耐心等待');
      }
    },function (err) {
      alert(err);
      alert('服务异常,正在紧急修复,请耐心等待2');
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