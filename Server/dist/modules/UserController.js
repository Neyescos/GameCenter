"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var UserService_1 = require("../services/UserService");
var verifytoken_1 = require("..//verifytoken");
var parse = require('querystring').parse;
var userservice = new UserService_1.UserService;
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.Execute = function (request, response) {
        var querystring = require('querystring');
        var ver = new verifytoken_1.Verify;
        ver.verify(request, response);
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
    //
    //sql select service
    //userservice.get();
    UserController.prototype.get = function (request, response) {
        try {
            var users = userservice.get();
            console.log(users);
            response.end(users);
        }
        catch (err) {
            console.log('something is gone wrong');
        }
    };
    //
    //sql insert service
    //userservice.post(obj);
    UserController.prototype.post = function (request, response) {
        try {
            var data_1 = '';
            request.on('data', function (chunk) {
                data_1 += chunk.toString();
            });
            request.on('end', function () {
                var obj = parse(data_1);
                console.log(obj);
                userservice.post(obj);
                response.end('Ok');
            });
        }
        catch (err) {
            console.log(err);
            console.log("post error");
        }
    };
    //
    //sql put service
    //userservice.put(obj);
    UserController.prototype.put = function (request, response) {
        try {
            var data_2 = '';
            request.on('data', function (chunk) {
                data_2 += chunk.toString();
            });
            request.on('end', function () {
                var obj = parse(data_2);
                console.log(obj);
                userservice.put(obj);
                response.end('Ok');
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    //
    //sql delete service
    //userservice.delete(obj);
    UserController.prototype.delete = function (request, response) {
        try {
            var data_3 = '';
            request.on('data', function (chunk) {
                data_3 += chunk.toString();
            });
            request.on('end', function () {
                var obj = parse(data_3);
                console.log(obj);
                userservice.delete(obj);
                response.end('Ok');
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    return UserController;
}());
exports.UserController = UserController;
