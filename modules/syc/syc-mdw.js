/**
 * Created by jeremysouffir on 21/10/2016.
 */
"use strict";
var Transaction     = require('../models/transaction');
var db              = require('../dbHelper/dbConnectionHelper');

class SycMdw{
    constructor() {
        this.connection = db.connect();
    }

    addTransaction(data,next){
        let transaction = new Transaction(data);
        let connection = this.connection;
        transaction.save().then(function(doc){
            console.log(doc);
            db.close(connection);
            next();
        });
    }

    getById(id,next){
        let connection = this.connection;
        Transaction.findById(id,function(err,myDoc){
            if(err) throw err;
            console.log(myDoc);
            db.close(connection);
            next(myDoc);
        })
    }

    getAll(next){
        let connection = this.connection;
        Transaction.find({},function(err,myDoc){
            if(err) throw err;
            console.log(myDoc);
            db.close(connection);
            next(myDoc);
        });
    }
    search(query,next){
        let connection = this.connection;
        Transaction.find(query,function(err,myDoc){
            if(err) throw err;
            console.log(myDoc);
            db.close(connection);
            next(myDoc);
        })
    }
}

module.exports =  SycMdw;