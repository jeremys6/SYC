"use strict";
var mongoose        = require('mongoose');
var appConfig       = require('../../config');

mongoose.connect(appConfig.database);
let Schema = mongoose.Schema;
let transactionSchema = new Schema({
    make:String,
    model:String,
    year:String
});
let Transaction = mongoose.model('Transaction',transactionSchema);

module.exports = Transaction;
