"use strict";
var mongoose        = require('mongoose');

let Schema = mongoose.Schema;
let optionSchema = new Schema({
    name:String
});

let Option = mongoose.model('Option',optionSchema);

let transactionSchema = new Schema({
    make:String,
    model:String,
    year:String,
    hand:Number,
    aestheticCondition:Number,
    mechanicalCondition:Number,
    odometer:Number,
    options:[optionSchema],
    pictures:[{picUrl:String,picId:Number}],
    damagesPictures:[{picUrl:String,picId:Number}],
    user:{type:Schema.Types.ObjectId, ref:'User'},
    comment:String,
    isTransactionActive:Boolean,
    transactionDate:{ type: Date, default: Date.now },
    lastUpdateDate:{ type: Date, default: Date.now }
});

let Transaction = mongoose.model('Transaction',transactionSchema);

module.exports = Transaction;
module.exports.option = Option;
