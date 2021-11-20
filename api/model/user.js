const mongoose = require('mongoose')

const { Schema } = mongoose;
const UserSchema = new Schema({
    name : String,
    username : String,
    birtdate : String,
    address : String,
    addressNumber : String,
    primayPhone : String,
    description : String,
    createdAt : String
})
module.exports = UserSchema