/**
 * Created by awebone on 2017/10/1.
 */
var express = require('express');
var router = express.Router();
var fs=require('fs');

var PATH= './public/data/';

//读取数据模块
//data/read?type=it
router.get('/read', function(req, res, next) {
    var type=req.param('type')||'';
    fs.readFile(PATH+type+'.json',function (err, data) {
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

module.exports = router;
