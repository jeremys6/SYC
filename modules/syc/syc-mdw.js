/**
 * Created by jeremysouffir on 21/10/2016.
 */
"use strict";
var Transaction     = require('../models/transaction');
var Option          = require('../models/transaction').option;
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

    updateTransaction(data,next){
        let connection = this.connection;
        Transaction.findById(data._id,function(err,myDoc){
            if(err) throw err;
            console.log(myDoc);
            mydoc.isTransactionActive = data.isTransactionActive;
            myDoc.lastUpdateDate = new Date();
            db.close(connection);
            next(myDoc);
        })
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
    getAllOptions(next){
        let connection = this.connection;
        Option.find({},function(err,myDoc){
            if(err) throw err;
            console.log(myDoc);
            db.close(connection);
            next(myDoc);
        });
    }
    addOption(data,next){
        let connection = this.connection;
        Option.find({name:data.name},function(err,myDoc){
            if(err) throw err;
            console.log(myDoc);
            if(myDoc && myDoc.length > 0){
                db.close(connection);
                next(myDoc);
            }
            else {
                let option = new Option(data);

                option.save().then(function (doc) {
                    console.log(doc);
                    db.close(connection);
                    next(doc);
                });
            }
        })
    }
    searchOptions(query,next){
        let connection = this.connection;
        Option.find(query,function(err,myDoc){
            if(err) throw err;
            console.log(myDoc);
            db.close(connection);
            next(myDoc);
        })
    }
}

module.exports =  SycMdw;