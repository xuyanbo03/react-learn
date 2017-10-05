import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
  AlertIOS
} from 'react-native';

import Detail from './detail'
import request from '../common/request';
import config from '../common/config';


let width = Dimensions.get('window').width;
let cachedResults = {
  nextPage: 1,
  items: [],
  total: 0
};

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row: this.props.row,
      up: this.props.row.voted
    }
  }

  render() {
    let row = this.state.row;
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
        <View style={styles.item}>
          <Text style={styles.title}>{row.title}</Text>
          <Image style={styles.thumb} source={{uri: row.thumb}}>
            <Icon name='ios-play' size={28} style={styles.play}/>
          </Image>
          <View style={styles.itemFooter}>
            <View style={styles.handleBox}>
              <Icon name={this.state.up ? 'ios-heart' : 'ios-heart-outline'} size={28}
                    style={[styles.up, this.state.up ? null : styles.down]} onPress={this._up.bind(this)}/>
              <Text style={styles.handleText} onPress={this._up.bind(this)}>喜欢</Text>
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

  _up() {
    let that = this;
    let up = !this.state.up;
    let row = this.state.row;
    let url = config.api.base + config.api.up;

    let body = {
      id: row._id,
      up: up ? 'yes' : 'no',
      accessToken: 'abc'
    };

    request.post(url, body)
      .then(function (data) {
        if (data && data.success) {
          that.setState({
            up: up
          })
        } else {
          AlertIOS.alert('点赞失败，稍后重试');
        }
      })
      .catch(function (err) {
        console.log(err);
        AlertIOS.alert('点赞失败，稍后重试');
      })
  }
}

export default class List extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
      isLoadingTail: false,
      isRefreshing: false
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
          renderFooter={this._renderFooter.bind(this)}
          onEndReached={this._fetchMoreData.bind(this)}
          onEndReachedThreshold={20}
          enableEmptySections={true}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh.bind(this)}
              tintColor='#ff6600'
              title='拼命加载中...'
            />
          }
        />
      </View>
    )
  }

  componentDidMount() {
    this._fetchData(1);
  }

  _renderRow(row) {
    return <Item key={row._id} onSelect={()=>this._loadPage(row)} row={row}/>;
  }

  _fetchData(page) {
    let that = this;

    if (page !== 0) {
      this.setState({
        isLoadingTail: true
      });
    } else {
      this.setState({
        isRefreshing: true
      });
    }

    request.get(config.api.base + config.api.creations, {accessToken: 'abc', page: page})
      .then((data) => {
        if (data.success) {
          let items = cachedResults.items.slice();
          if (page !== 0) {
            items = items.concat(data.data);
            cachedResults.nextPage += 1;
          } else {
            items = data.data.concat(items);
          }
          cachedResults.items = items;
          cachedResults.total = data.total;

          setTimeout(function () {
            if (page !== 0) {
              that.setState({
                isLoadingTail: false,
                dataSource: that.state.dataSource.cloneWithRows(cachedResults.items)
              })
            } else {
              that.setState({
                isRefreshing: false,
                dataSource: that.state.dataSource.cloneWithRows(cachedResults.items)
              })
            }
          }, 1000);
        }
      })
      .catch((error) => {
        if (page !== 0) {
          this.setState({
            isLoadingTail: false
          });
        } else {
          this.setState({
            isRefreshing: false
          });
        }
        console.error(error);
      })
  }

  _fetchMoreData() {
    if (!this._hasMore() || this.state.isLoadingTail) {
      return;
    }
    let page = cachedResults.nextPage;
    this._fetchData(page);
  }

  _onRefresh() {
    if (!this._hasMore() || this.state.isRefreshing) {
      return;
    }

    this._fetchData(0);
  }

  _hasMore() {
    return cachedResults.items.length !== cachedResults.total;
  }

  _renderFooter() {
    if (!this._hasMore() && cachedResults.total !== 0) {
      return (
        <View style={styles.loadingMore}>
          <Text style={styles.loadingText}>没有更多了</Text>
        </View>
      )
    }
    if (!this.state.isLoadingTail) {
      return <View style={styles.loadingMore}/>
    }
    return (
      <ActivityIndicator style={styles.loadingMore}/>
    );
  }

  _loadPage(row){
    this.props.navigator.push({
      name:'detail',
      component:Detail,
      params:{
        data:row
      }
    })
  }
}

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
  down: {
    fontSize: 22,
    color: '#333'
  },
  up: {
    fontSize: 22,
    color: '#ed7b66'
  },
  commentIcon: {
    fontSize: 22,
    color: '#333'
  },
  loadingMore: {
    marginVertical: 20
  },
  loadingText: {
    color: '#777',
    textAlign: 'center'
  }
});