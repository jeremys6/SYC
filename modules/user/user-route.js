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
        router.get('/getByEmail/:email', this._getByEmail.bind(this));
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
        console.log("Get All Users");
        var md = new userMdw();
        md.getAll(function(doc){
            res.json(doc);
        });
    }
    _getById(req,res){
        console.log("Get User by Id:"+req.params.id);
        var md = new userMdw();
        md.getById(req.params.id,function(doc){
            res.json(doc);
        });
    }
    _getByEmail(req,res){
        console.log("Get User by email:"+req.params.email);
        var md = new userMdw();
        md.search({email:req.params.email},function(doc){
            res.json(doc);
        });
    }

}

module.exports = new UserRoutes();