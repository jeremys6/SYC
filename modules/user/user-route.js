/**
 * Created by jeremysouffir on 22/10/2016.
 */
"use strict";
var userMdw      = require('./user-mdw');
var express     = require('express');

class UserRoutes{
    getRouter(){
        let router = express.Router();
        router.post('/set',this._setUser.bind(this));
        router.get('/get', this._getAll.bind(this));
        router.get('/get/:id', this._getById.bind(this));
        return router;
    }

    _setUser(req,res){
        console.log("set User");
        var md = new userMdw();
        md.addUser(req.body,function(){
            res.json("ok");
        });

    }
    _getAll(req,res){
        res.json("ok");
    }
    _getById(req,res){
        res.json("ok");
    }

}

module.exports = new UserRoutes();