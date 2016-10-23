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
}

module.exports =  UserMdw;