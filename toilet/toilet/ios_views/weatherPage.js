import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class weatherPage extends Component{
  render(){
      return(
          <View>
              <Text style={styles.text}>
                  天气
              </Text>
          </View>
      )
  }
}

const styles = StyleSheet.create({
    text:{
        fontSize:60
    }
});