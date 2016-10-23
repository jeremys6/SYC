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
    getById(id,next){
        Transaction.findById(id,function(err,myDoc){
            if(err) throw err;
            console.log(myDoc);
            next(myDoc);
        })
    }
    getAll(next){
        Transaction.find({},function(err,myDoc){
            if(err) throw err;
            console.log(myDoc);
            next(myDoc);
        });
    }
}

module.exports =  SycMdw;