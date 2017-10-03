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

export default class recommend extends Component {
  constructor(props){
    super(props);
    this.state={
      name:this.props.name,
      data:this.props.data
    };
  }
  render() {
    let views1=[];
    let views2=[];
    let data=this.state.data;
    for (let i in data){
      let item=(
        <TouchableOpacity style={styles.img_item} key={i} onPress={this._showWebPage.bind(this,data[i].url,data[i].title)}>
          <Image resizeModel="cover" style={[styles.img,styles.shadow]} source={{uri:data[i].img}}/>
          <Text style={styles.title} numberOfLines={2}>{data[i].title} </Text>
        </TouchableOpacity>
      );
      if(i<4){
        views1.push(item);
      }else{
        views2.push(item);
      }
    }
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text1}>{this.state.name}</Text>
        </View>
        <View style={styles.img_view}>
          {views1}
        </View>
        <View style={styles.img_view}>
          {views2}
        </View>
        <View>
          <Text style={styles.text2}>查看更多推荐&gt;</Text>
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
    marginRight:10
  },
  shadow:{
    shadowColor:'#CCC',
    shadowOpacity:1,
    shadowOffset:{
      width:1*Util.pixel,
      height:Util.pixel
    }
  },
  img_view:{
    flexDirection:'row'
  },
  img_item:{
    flex:1,
    height:160
  },
  img:{
    width:(Util.size.width-40)/4,
    height:120
  },
  text1:{
    color:'#5E5E5E',
    marginBottom:8,
    fontSize:16,
    marginTop:10
  },
  text2:{
    color:'#CCCCCC',
    marginTop:10,
    marginBottom:10,
    fontSize:13,
    fontWeight:'300'
  },
  title:{
    marginTop:4,
    fontSize:14,
    color:'#818181'
  }
});