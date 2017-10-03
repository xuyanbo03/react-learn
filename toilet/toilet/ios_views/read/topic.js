import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Util from '../util';
import TWebView from '../twebview';

export default class topic extends Component {
  constructor(props){
    super(props);
    this.state={
      data:this.props.data
    };
  }
  render() {
    let views=[];
    let data=this.state.data;
    for (let i in data){
      views.push(
        <TouchableOpacity style={styles.img_item} key={i} onPress={this._showWebPage.bind(this,data[i].url,data[i].title)}>
          <Image resizeModel="cover" style={styles.img} source={{uri:data[i].img}}/>
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text1}>推荐专题</Text>
        </View>
        <View style={styles.img_view}>
          {views}
        </View>
        <View>
          <Text style={styles.text2}>查看同期更多专题&gt;</Text>
        </View>
      </View>
    )
  }

  _showWebPage(url,title){
    this.props.navigator.push({
      component:TWebView,
      title:title,
      passProps:{
        url:url
      }
    })
  }
}

const styles = StyleSheet.create({
  container:{
    marginLeft:10,
    marginRight:10,
    paddingTop:10
  },
  img:{
    width:(Util.size.width-30)/2,
    height:100,
    borderRadius:5
  },
  img_view:{
    flexDirection:'row'
  },
  img_item:{
    flex:1
  },
  text1:{
    color:'#5E5E5E',
    marginBottom:8,
    fontSize:16
  },
  text2:{
    color:'#CCCCCC',
    marginTop:10,
    marginBottom:10,
    fontSize:13,
    fontWeight:'300'
  }
});