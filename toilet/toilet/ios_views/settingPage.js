import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class settingPage extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          设置
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