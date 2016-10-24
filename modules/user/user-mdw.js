/**
 * Created by jeremysouffir on 22/10/2016.
 */
"use strict";

var User            = require('../models/user');
var db              =require('../dbHelper/dbConnectionHelper');

class UserMdw{
    constructor() {
        this.connection = db.connect();
    }
    addUser(data,next){
        let user = new User(data);
        let connection =this.connection;
        user.save().then(function(doc){
            console.log(doc);
            db.close(connection);
            next();
        });
    }
    getById(id,next){
        let connection =this.connection;
        User.findById(id,function(err,myDoc){
            if(err) throw err;
            console.log(myDoc);
            db.close(connection);
            next(myDoc);
        })
    }
    getAll(next){
        let connection =this.connection;
        User.find({},function(err,myDoc){
            if(err) throw err;
            console.log(myDoc);
            db.close(connection);
            next(myDoc);
        });
    }
    search(query,next){
        let connection =this.connection;
        User.find(query,function(err,myDoc){
            if(err) throw err;
            console.log(myDoc);
            db.close(connection);
            next(myDoc);
        })
    }
}

module.exports =  UserMdw;