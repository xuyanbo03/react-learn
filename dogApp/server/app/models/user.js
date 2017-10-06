const mongoose=require('mongoose');

let UserSchema=new mongoose.Schema({
  phoneNumber:{
    unique:true,
    type:String
  },
  areaCode:String,
  verifyCode:String,
  accessToken:String,
  nickname:String,
  gender:String,
  breed:String,
  age:String,
  avatar:String,
  meta:{
    createAt:{
      type:Date,
      default:Date.now()
    },
    updateAt:{
      type:Date,
      default:Date.now()
    }
  }
});

UserSchema.pre('save',function (next) {
  if(this.isNew){
    this.meta.createAt=this.meta.updateAt=Date.now();
  }else {
    this.meta.updateAt=Date.now();
  }

  next();
});

let UserModel=mongoose.model('User',UserSchema);

module.exports=UserModel;