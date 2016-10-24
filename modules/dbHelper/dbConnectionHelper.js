"use strict";

var mongoose        = require('mongoose');
var appConfig       = require('../../config');

class DbConnectionHelper{
    connect(){
        return mongoose.connect(appConfig.database);
    }
    close(connection){
        connection.disconnect(function () {
            console.log('Mongoose connection disconnected');
        });
    }
}

module.exports = new DbConnectionHelper();