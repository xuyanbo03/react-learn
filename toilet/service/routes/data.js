/**
 * Created by awebone on 2017/10/1.
 */
var express = require('express');
var router = express.Router();
var fs=require('fs');

var PATH= './public/data/';


//读取数据模块 客户端开发调用
//查询接口，token校验
//公共接口，无需校验
//data/read?type=
router.get('/read', function(req, res, next) {
    var type=req.param('type')||'';

    var filePath=PATH+type+'.json';
    fs.readFile(filePath,function (err, data) {
        if (err){
            return res.send({
                status:0,
                info:'读取文件异常'
            });
        }
        var COUNT=50;
        //try catch
        var obj=[];
        try {
            obj = JSON.parse(data.toString());
        }catch (e){
            obj=[];
        }
        if(obj.length>COUNT){
            obj.slice(0,COUNT);
        }
        return res.send({
            status:1 ,
            data:obj
        });
    });
});


//数据存储模块 后台开发接口
//data/write?type=
router.post('/write',function (req, res, next) {
    if (!req.session.user){
        return res.send({
            status:0,
            info:'未鉴权认证'
        });
    }
    //文件名
    var type =req.param('type')||'';
    //关键字
    var url =req.param('url')||'';
    var title =req.param('title')||'';
    var img =req.param('img')||'';
    if (!type||!url||!title||!img){
        return res.send({
            status:0,
            info:'提交字段不全'
        })
    }

    var filePath=PATH+type+'.json';
    //读取文件
    fs.readFile(filePath,function (err, data) {
        if(err){
            return res.send({
                status:0,
                info:'读取文件失败'
            });
        }
        var arr= JSON.parse(data.toString());
        var obj={
            img:img,
            url:url,
            title:title,
            id:guidGenerate(),
            data:new Date()
        };
        arr.splice(0,0,obj);
        //写入文件
        var newData=JSON.stringify(arr);
        fs.writeFile(filePath,newData,function (err) {
            if(err){
                return res.send({
                    status:0,
                    info:'读取文件失败'
                });
            }
            return res.send({
                status:1,
                info:obj
            })
        })
    })
});

function guidGenerate() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function (c) {
        var r=Math.random()*16|0;
        var v=c == 'x' ?r:(r&0x3|0x8);
        return v.toString(16);
    }).toUpperCase();
}


//阅读模块接口 后台开发接口
router.post('/write_config',function (req,res,next) {
    if (!req.session.user){
        return res.send({
            status:0,
            info:'未鉴权认证'
        });
    }

    var data=req.body.data;
    var obj=JSON.parse(data);
    var newData=JSON.stringify(obj);
    fs.writeFile(PATH+'config.json',newData,function (err) {
        if(err){
            return res.send({
                status:0,
                info:'写入数据失败'
            });
        }
        return res.send({
            status:1,
            info:obj
        })
    })
    //后期做提交数据验证和try...catch
});


//登录接口
router.post('/login',function (req, res, next) {
    //- 用户名、密码、验证码
    //- 对用户名、密码校验、判空、xss处理
    //- 密码加密md5(md5(password+'随机字符串'))，可以写入json文件
    var username=req.body.username;
    var password=req.body.password;

    if(username==='admin'&&password==='123456'){
        req.session.user={
            username:username
        };
        return res.send({
            status:1
        });
    }
    return res.send({
        status:0,
        info:'登录失败'
    });
});

module.exports = router;
