import queryString from 'query-string';
import _ from 'lodash';
import Mock from 'mockjs'

import config from './config';

let request={
  get(url,params){
    if(params){
      url+='?'+queryString.stringify(params)
    }
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => Mock.mock(responseJson))
  },
  post(url,body){
    let options=_.extend(config.header,{
      body:JSON.stringify(body)
    });
    return fetch(url,options)
      .then((response) => response.json())
      .then((responseJson) => Mock.mock(responseJson))
  }
};

module.exports=request;