"use strict";
var mongoose        = require('mongoose');

let Schema = mongoose.Schema;
let transactionSchema = new Schema({
    make:String,
    model:String,
    year:String,
    pictures:[stri]
    user:{type:Schema.Types.ObjectId, ref:'User'},
    isTransactionActive:Boolean
});
let Transaction = mongoose.model('Transaction',transactionSchema);

module.exports = Transaction;
