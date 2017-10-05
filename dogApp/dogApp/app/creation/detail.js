import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

let width=Dimensions.get('window').width;

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      rate: 1,
      muted: false,
      resizeMode: 'contain',
      repeat: false
    }
  }

  render() {
    let data = this.state.data;
    return (
      <View style={styles.container}>
        <Text onPress={this._backToList.bind(this)}>详情页面:{data.title}</Text>
        <View style={styles.videoBox}>
          <Video ref='videoPlayer' source={{uri: data.video}} style={styles.video} volume={3} paused={false}
                 rate={this.state.rate} muted={this.state.muted} resizeMode={this.state.resizeMode}
                 repeat={this.state.repeat} onLoadStart={this._onLoadStart} onLoad={this._onLoad}
                 onProgress={this._onProgress} onEnd={this._onEnd} onError={this._onError}/>
        </View>
      </View>
    )
  }

  _onLoadStart(){

  }
  _onLoad(){

  }
  _onProgress(){

  }
  _onEnd(){

  }
  _onError(){

  }

  _backToList() {
    this.props.navigator.pop()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  videoBox:{
    width:width,
    height:360,
    backgroundColor:'#000'
  },
  video:{
    width:width,
    height:360,
    backgroundColor:'#000'
  }
});