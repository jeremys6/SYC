/**
 * Created by jeremysouffir on 21/10/2016.
 */
"use strict";

var express         = require('express');
var bodyParser      = require('body-parser');

var sycRoute        = require('./modules/syc/syc-route');
var userRoute       = require('./modules/user/user-route');

class server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000; // used to create, sign, and verify tokens

        // use body parser so we can get info from POST and/or URL parameters
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }

    start(){
        this.setupRoutes();
        this.app.listen(this.port);
        console.log('Magic happen here - The server is up on:' + this.port);
    }

    setupRoutes(){
        let router = express.Router();
        this.app.use(express.static('./public/'));
        this.app.get('/', function(req, res) {
            res.render('index.html');

        });
        this.app.use('/api/user', userRoute.getRouter());
        this.app.use('/api/syc', sycRoute.getRouter());
    }

}
new server().start();


