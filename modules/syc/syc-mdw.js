/**
 * Created by jeremysouffir on 21/10/2016.
 */
"use strict";

var Transaction     = require('../models/transaction');

class SycMdw{
    constructor() {

    }
    addTransaction(data,next){

        let transaction = new Transaction(data);
        transaction.save().then(function(doc){
            console.log(doc);
            next();
        });
    }
}

module.exports =  SycMdw;