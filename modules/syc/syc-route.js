/**
 * Created by jeremysouffir on 21/10/2016.
 */
"use strict";
var sycMdw      = require('./syc-mdw');
var express     = require('express');

class SycRoutes{
    getRouter(){
        let router = express.Router();
        router.post('/set',this._setTransaction.bind(this));
        router.get('/get', this._getAll.bind(this));
        router.get('/get/:id', this._getById.bind(this));
        return router;
    }

    _setTransaction(req,res){
        console.log("set Transaction");
        var md = new sycMdw();
        md.addTransaction(req.body,function(){
            res.json("ok");
        });
    }
    _getAll(req,res){
        console.log("Get All Transaction");
        var md = new sycMdw();
        md.getAll(function(doc){
            res.json(doc);
        });
    }
    _getById(req,res){
        console.log("Get Transaction by Id:"+req.params.id);
        var md = new sycMdw();
        md.getById(req.params.id,function(doc){
            res.json(doc);
        });
    }

}

module.exports = new SycRoutes();