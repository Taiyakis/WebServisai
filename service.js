"use strict";

var soap = require('soap');
var http = require('http');
var xml = require('fs').readFileSync('prisijungimas.wsdl', 'utf8');

var atsakymas = "";
var service = {
    ManoService : {
        uzklausosPort : {
            zinutes: function (args) {
				if (args.passwords == null || args.username == null) {
					atsakymas = "Pamirsote ivesti (username) arba (slaptazodi)";
				} else if (args.username == "mindaugas@gmail.com" && args.passwords == "ezerskas") {
					atsakymas = "Sveiki, prisijunge " + args.username;
				} else {
					atsakymas = "Klaidingai suvesti duomenys";
				}
                return { atsakymas }
            }
        }
    }
};


var server = http.createServer(function(request,response) {
    response.end("404: Not Found: " + request.url);
});

server.listen(8001);
soap.listen(server, '/login', service, xml);
