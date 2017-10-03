import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Util from '../util';

export default class recommend extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text1}>热门推荐</Text>
        </View>
        <View style={styles.img_view}>
          <View style={styles.img_item}>
            <Image resizeModel="cover" style={[styles.img,styles.shadow]} source={{uri:''}}/>
            <Text style={styles.title} numberOfLines={2}>标题标题标题标题标题标题标题标题标题标题标题标题标题</Text>
          </View>
          <View style={styles.img_item}>
            <Image resizeModel="cover" style={[styles.img,styles.shadow]} source={{uri:''}}/>
            <Text style={styles.title} numberOfLines={2}>标题标题标题标题标题标题标题标题标题标题标题标题标题</Text>
          </View>
          <View style={styles.img_item}>
            <Image resizeModel="cover" style={[styles.img,styles.shadow]} source={{uri:''}}/>
            <Text style={styles.title} numberOfLines={2}>标题标题标题标题标题标题标题标题标题标题标题标题标题</Text>
          </View>
          <View style={styles.img_item}>
            <Image resizeModel="cover" style={[styles.img,styles.shadow]} source={{uri:''}}/>
            <Text style={styles.title} numberOfLines={2}>标题标题标题标题标题标题标题标题标题标题标题标题标题</Text>
          </View>
        </View>
        <View style={styles.img_view}>
          <View style={styles.img_item}>
            <Image resizeModel="cover" style={[styles.img,styles.shadow]} source={{uri:''}}/>
            <Text style={styles.title} numberOfLines={2}>标题标题标题标题标题标题标题标题标题标题标题标题标题</Text>
          </View>
          <View style={styles.img_item}>
            <Image resizeModel="cover" style={[styles.img,styles.shadow]} source={{uri:''}}/>
            <Text style={styles.title} numberOfLines={2}>标题标题标题标题标题标题标题标题标题标题标题标题标题</Text>
          </View>
          <View style={styles.img_item}>
            <Image resizeModel="cover" style={[styles.img,styles.shadow]} source={{uri:''}}/>
            <Text style={styles.title} numberOfLines={2}>标题标题标题标题标题标题标题标题标题标题标题标题标题</Text>
          </View>
          <View style={styles.img_item}>
            <Image resizeModel="cover" style={[styles.img,styles.shadow]} source={{uri:''}}/>
            <Text style={styles.title} numberOfLines={2}>标题标题标题标题标题标题标题标题标题标题标题标题标题</Text>
          </View>
        </View>
        <View>
          <Text style={styles.text2}>查看更多推荐&gt;</Text>
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