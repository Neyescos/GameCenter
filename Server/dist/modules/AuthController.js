"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
var AuthService_1 = require("../services/AuthService");
var parse = require('querystring').parse;
var jwt = require('jsonwebtoken');
var authService = new AuthService_1.AuthService;
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.prototype.Execute = function (request, response) {
        var querystring = require('querystring');
        var req = request.method;
        switch (req) {
            case 'GET':
                this.get(request, response);
                break;
            case 'POST':
                this.post(request, response);
                break;
            case 'PUT':
                this.put(request, response);
                break;
            case 'DELETE':
                this.delete(request, response);
        }
    };
    AuthController.prototype.post = function (request, response) {
        try {
            var data_1 = '';
            request.on('data', function (chunk) {
                data_1 += chunk.toString();
            });
            request.on('end', function () {
                var obj = parse(data_1);
                var res;
                console.log(obj);
                setTimeout(function () {
                    res = authService.post(obj);
                }, 4000);
                setTimeout(function () {
                    //Create jwt token
                    console.log(res.UserId);
                    var token = jwt.sign({ _id: res.UserId }, "sqguhbnjkmpkqmnwfihwbf");
                    response.setHeader('auth-token', token);
                    console.log(res + " res");
                    if (res != null)
                        response.end('Ok');
                }, 15000);
            });
        }
        catch (err) {
            console.log(err);
            console.log("post error");
        }
    };
    AuthController.prototype.get = function (req, res) {
        throw new Error("Method not implemented.");
    };
    AuthController.prototype.put = function (req, res) {
        throw new Error("Method not implemented.");
    };
    AuthController.prototype.delete = function (req, res) {
        throw new Error("Method not implemented.");
    };
    return AuthController;
}());
exports.AuthController = AuthController;
