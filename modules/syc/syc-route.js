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
        res.json("ok");
    }
    _getById(req,res){
        res.json("ok");
    }

}

module.exports = new SycRoutes();