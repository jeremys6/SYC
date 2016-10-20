/**
 * Created by jeremysouffir on 21/10/2016.
 */
var express      =require('express');
var bodyParser   =require('body-parser');


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
        console.log('Magic happen here:' + this.port);
    }

    setupRoutes(){
        this.app.use(express.static('./public/'));
        this.app.get('/', function(req, res) {
            res.render('index.html');
        });
        this.app.use('/api/syc', sycRoute.getRouter(router));
    }
}
new server().start();


