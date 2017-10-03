import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Util from '../util';
import List from './list';

export default class category extends Component {
  constructor(props){
    super(props);
    this.state={
      data:this.props.data,
      navigator:this.props.navigator
    };
  }
  render() {
    let views1=[];
    let views2=[];
    let data=this.state.data;
    for (let i in data){
      let items=(
        <View style={styles.row_item} key={i}>
          <TouchableOpacity style={styles.item} onPress={this._goToList.bind(this)}>
            <Text style={styles.title}>{data[i].text}</Text>
          </TouchableOpacity>
        </View>
      );
      if(i<2){
        views1.push(items);
      }else{
        views2.push(items);
      }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>
          分类
        </Text>
        <View style={styles.row}>
          {views1}
        </View>
        <View style={styles.row}>
          {views2}
        </View>
      </View>
    )
  }

  _goToList(name){
    let type=this._getType(name);
    let url='http://123.57.39.116:3000/data/read?type='+type;
    this.state.navigator.push({
      component:List,
      title:name,
      barTintColor:'#FFF',
      passProps:{
        url:url
      }
    });
  }
  _getType(name){
    let type='it';
    switch (name){
      case '互联网':
        type='it';
        break;
      case '笑话':
        type='cookies';
        break;
      case '管理':
        type='manager';
        break;
      case '散文':
        type='sanwen';
        break;
      default:
        type='it';
        break;
    }
    return type;
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