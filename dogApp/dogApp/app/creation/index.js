import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';

import request from '../common/request';
import config from '../common/config';

export default class List extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>列表页面</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          onEndReached={this._fetchMoreData.bind(this)}
          enableEmptySections={true}
          automaticallyAdjustContentInsets={false}
        />
      </View>
    )
  }

  componentDidMount(){
    this._fetchData();
  }

  _fetchData() {
    request.get(config.api.base+config.api.creations,{accessToken:'abc'})
      .then((data) => {
        if(data.success){
          this.setState({
            dataSource:this.state.dataSource.cloneWithRows(data.data)
          })
        }
      })
      .catch((error) => {
        console.error(error);
      })
  }

  _renderRow(row) {
    return (
      <TouchableHighlight>
        <View style={styles.item}>
          <Text style={styles.title}>{row.title}</Text>
          <Image style={styles.thumb} source={{uri: row.thumb}}>
            <Icon name='ios-play' size={28} style={styles.play}/>
          </Image>
          <View style={styles.itemFooter}>
            <View style={styles.handleBox}>
              <Icon name='ios-heart-outline' size={28} style={styles.up}/>
              <Text style={styles.handleText}>喜欢</Text>
            </View>
            <View style={styles.handleBox}>
              <Icon name='ios-chatboxes-outline' size={28} style={styles.commentIcon}/>
              <Text style={styles.handleText}>评论</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  _fetchMoreData(){

  }
}

let width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    paddingTop: 25,
    paddingBottom: 12,
    backgroundColor: '#ee735c'
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600'
  },
  item: {
    width: width,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  thumb: {
    width: width,
    height: width * 0.56,
    resizeMode: 'cover'
  },
  title: {
    padding: 10,
    fontSize: 18,
    color: '#333'
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eee'
  },
  handleBox: {
    padding: 10,
    width: width / 2 - 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  play: {
    position: 'absolute',
    bottom: 14,
    right: 14,
    height: 46,
    width: 46,
    paddingTop: 9,
    paddingLeft: 18,
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderRadius: 23,
    borderWidth: 1,
    color: '#ed7b66'
  },
  handleText: {
    paddingLeft: 12,
    fontSize: 18,
    color: '#333'
  },
  up: {
    fontSize: 22,
    color: '#333'
  },
  commentIcon: {
    fontSize: 22,
    color: '#333'
  }
});