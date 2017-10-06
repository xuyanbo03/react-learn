const Router = require('koa-router');
const User=require('../app/controllers/user');
const App=require('../app/controllers/app');

module.exports = function () {
  let router = new Router({
    prefix: '/api/1'
  });

  //user
  router.post('/u/signup', User.signup);
  router.post('/u/verify', User.verify);
  router.post('/u/update', User.update);

  //app
  router.post('/signature', App.signature);

  return router;
};