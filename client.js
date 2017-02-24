'use strict'
var soap = require('soap');
var url = 'http://localhost:8001/login?wsdl';

soap.createClient(url, function(error, client) {
    if (error) {
        throw error;
    }

    var loginDuomenys = {
        username:  "mindaugas@gmail.com",
        passwords:  "ezerskas"
    }

    client.describe().ManoService.uzklausosPort;
    client.zinutes(loginDuomenys,function(err,res){
            if (err) throw err;

            // Response from web service
            console.log (res);
    });
});
