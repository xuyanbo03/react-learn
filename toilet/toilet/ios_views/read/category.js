import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Util from '../util';

export default class category extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>
          分类
        </Text>
        <View style={styles.row}>
          <View style={styles.row_item}>
            <View style={styles.item}>
              <Text style={styles.title}>互联网</Text>
            </View>
          </View>
          <View style={styles.row_item}>
            <View style={styles.item}>
              <Text style={styles.title}>互联网</Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.row_item}>
            <View style={styles.item}>
              <Text style={styles.title}>互联网</Text>
            </View>
          </View>
          <View style={styles.row_item}>
            <View style={styles.item}>
              <Text style={styles.title}>互联网</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    marginLeft:10,
    marginRight:10,
    marginTop:10
  },
  text1:{
    color:'#5E5E5E',
    marginBottom:8,
    fontSize:16,
    marginTop:10
  },
  row:{
    flexDirection:'row',
    marginTop:5
  },
  row_item:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  item:{
    height:81,
    width:(Util.size.width-30)/2,
    borderWidth:1,//Util.pixel
    borderColor:'#F1F1F1',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  title:{
    fontSize:17,
    color:'#707070',
    fontWeight:'400'
  }
});