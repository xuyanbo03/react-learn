import React, {Component} from 'react';
import {StyleSheet, Text, View, WebView} from 'react-native';

export default class tWebView extends Component {
    constructor(props) {
        super(props);
        this.state={
            url:this.props.url,
            isError:false
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.isError?
                        <View style={styles.errInfo}>
                            <Text style={styles.errText}>请检查网络，再刷新</Text>
                        </View>
                    :
                        <WebView
                        onError={this._showError.bind(this)}
                        startInLoadingState={true}
                        source={{uri : this.state.url}} 
                        style={{marginTop:0}}/>
                }
            </View>
        )
    }

    _showError(){
        this.setState({
            isError:true  
        })
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    errInfo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    errText:{
        fontSize:16,
        fontWeight:'bold'
    }
});