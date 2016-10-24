/**
 * Created by jeremysouffir on 24/10/2016.
 */

"use strict";
var pictureMdw      = require('./picture-mdw');
var express     = require('express');

class PictureRoute{
    getRouter(){
        let router = express.Router();
        router.post('/upload',this._uploadPicture.bind(this));
        return router;
    }

    _uploadPicture(req,res){
        console.log("Upload Picture");
        var md = new pictureMdw();
        md.uploadBase64Pic(req.body.base64Data,function(doc){
            res.json(doc);
        });
    }
}

module.exports = new PictureRoute();