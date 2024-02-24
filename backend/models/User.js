const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
        username:String,
        email:{type:String,unique: true},
        password:String,
        design:String,
        fullname:String,
        Company:String,
        address:String,
        userprofile:Number,
        Budget:Number,
        reference:String,
        formFile:String,
        timeline:Number
})

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;