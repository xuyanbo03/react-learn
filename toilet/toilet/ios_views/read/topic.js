import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Util from '../util';

export default class topic extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text1}>推荐专题</Text>
        </View>
        <View style={styles.img_view}>
          <View style={styles.img_item}>
            <Image resizeModel="cover" style={styles.img} source={{uri:''}}/>
          </View>
          <View style={styles.img_item}>
            <Image resizeModel="cover" style={styles.img} source={{uri:''}}/>
          </View>
        </View>
        <View>
          <Text style={styles.text2}>查看同期更多专题&gt;</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    marginLeft:10,
    marginRight:10
  },
  img:{
    width:(Util.size.width-30)/2,
    height:80,
    borderRadius:5
  },
  img_view:{
    flex:1
  },
  img_item:{
    flexDirection:'row'
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