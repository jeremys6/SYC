"use strict";
var mongoose        = require('mongoose');

let Schema = mongoose.Schema;
let transactionSchema = new Schema({
    make:String,
    model:String,
    year:String,
    user:{type:Schema.Types.ObjectId, ref:'User'}
});
let Transaction = mongoose.model('Transaction',transactionSchema);

module.exports = Transaction;
