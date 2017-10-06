const mongoose=require('mongoose');
const xss=require('xss');
const User = mongoose.model('User');

exports.signup=function *(next) {
  let phoneNumber=this.request.body.phoneNumber;

  let user=yield User.findOne({
    phoneNumber:phoneNumber
  }).exec();

  if(!user){
    user=new User({
      phoneNumber:xss(phoneNumber)
    })
  }else {
    user.verifyCode= '1212'
  }

  try {
    user=yield user.save();
  }catch (e){
    this.body={
      success:false
    };
    return;
  }

  this.body={
    success:true
  }
};
exports.verify=function *(next) {
  this.body={
    success:true
  }
};
exports.update=function *(next) {
  this.body={
    success:true
  }
};