/**
 * Created by jeremysouffir on 22/10/2016.
 */
"use strict";

var User     = require('../models/user');

class UserMdw{
    constructor() {

    }
    addUser(data,next){
        data.createdDate = new Date();
        let user = new User(data);
        user.save().then(function(doc){
            console.log(doc);
            next();
        });
    }
    getById(id,next){
        User.findById(id,function(err,myDoc){
            if(err) throw err;
            console.log(myDoc);
            next(myDoc);
        })
    }
    getAll(next){
        User.find({},function(err,myDoc){
            if(err) throw err;
            console.log(myDoc);
            next(myDoc);
        });
    }
}

module.exports =  UserMdw;