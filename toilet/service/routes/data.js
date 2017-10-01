/**
 * Created by awebone on 2017/10/1.
 */
var express = require('express');
var router = express.Router();
var fs=require('fs');

//读取数据模块
router.get('/read', function(req, res, next) {
    res.render('data', { title: 'Express' });
});

module.exports = router;
