import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class list extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          阅读
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60
  }
});