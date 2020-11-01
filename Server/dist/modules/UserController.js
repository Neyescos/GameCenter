"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var sql = require("msnodesqlv8");
var parse = require('querystring').parse;
var connectionString = "server=.;Database=GameCenter;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
var query = "SELECT * FROM [GameCenter].[dbo].[Users]";
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.Execute = function (request, response) {
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
    UserController.prototype.get = function (request, response) {
        try {
            sql.query(connectionString, query, function (err, rows) {
                if (rows != null) {
                    response.end(JSON.stringify(rows));
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    UserController.prototype.post = function (request, response) {
        try {
            var data_1 = '';
            request.on('data', function (chunk) {
                data_1 += chunk.toString();
            });
            request.on('end', function () {
                var obj = parse(data_1);
                console.log(obj);
                var postquery = "insert into users values('" + obj.User_Name.toString() + "','" + obj.User_Password.toString() + "')";
                console.log(postquery);
                sql.query(connectionString, postquery);
                response.end('Ok');
            });
        }
        catch (err) {
            console.log(err);
            console.log("post error");
        }
    };
    UserController.prototype.put = function (request, response) {
        try {
            var data_2 = '';
            request.on('data', function (chunk) {
                data_2 += chunk.toString();
            });
            request.on('end', function () {
                var obj = parse(data_2);
                console.log(obj);
                var putquery = "update users set User_Name='" + obj.User_Name + "'where UserId=" + obj.UserId;
                console.log(putquery);
                sql.query(connectionString, putquery);
                response.end('Ok');
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    UserController.prototype.delete = function (request, response) {
        try {
            var data_3 = '';
            request.on('data', function (chunk) {
                data_3 += chunk.toString();
            });
            request.on('end', function () {
                var obj = parse(data_3);
                console.log(obj);
                var deletequery = "delete Users where UserId=" + obj.UserId;
                console.log(deletequery);
                sql.query(connectionString, deletequery);
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
