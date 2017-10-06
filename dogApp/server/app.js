//db
const fs=require('fs');
const path=require('path');
const mongoose=require('mongoose');
mongoose.Promise=require('bluebird');
const db='mongodb://localhost:27017/dog-app';
mongoose.connect(db);

const models_path=path.join(__dirname,'/app/models');
const walk=function (modelPath) {
  fs
    .readdirSync(modelPath)
    .forEach(function (file) {
      let filePath=path.join(modelPath,'/'+file);
      let stat=fs.statSync(filePath);

      if(stat.isFile()){
        if(/(.*)\.(js|ts|coffee)/.test(file)){
          require(filePath);
        }
      }else if (stat.isDirectory()){
        walk(filePath);
      }
    })
};
walk(models_path);

//app
const Koa=require('koa');
const logger=require('koa-logger');
const session=require('koa-session');
const bodyParser=require('koa-bodyparser');

const app=new Koa();

app.key=['imooc'];
app.use(logger());
app.use(session(app));
app.use(bodyParser());

const router=require('./config/routes')();
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
console.log('Listening:3000');