/**
 * Created by jeremysouffir on 21/10/2016.
 */
var sycMdw = require('../syc/syc-mdw');


class sycRoutes{
    getRouter(router){
        router.post('/set',this._setTransaction.bind(this));
        router.get('/get', this._getAll.bind(this));
        router.get('/get/:id', this._getById.bind(this));
        return router;
    }

    _setTransaction(req,res){

    }
    _getAll(req,res){

    }
    _getById(req,res){

    }

}

module.exports = new sycRoutes();