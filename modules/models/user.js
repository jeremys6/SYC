/**
 * Created by jeremysouffir on 22/10/2016.
 */
"use strict";
var mongoose        = require('mongoose');
var appConfig       = require('../../config');

let Schema = mongoose.Schema;
let userSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    birthday:String,
    createdDate:Date
});
let User = mongoose.model('User',userSchema);

module.exports = User;
