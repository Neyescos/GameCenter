"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var sql = require("msnodesqlv8");
var connectionString = "server=.;Database=GameCenter;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
var query = "SELECT * FROM [GameCenter].[dbo].[Users]";
var res;
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.get = function () {
        try {
            sql.query(connectionString, query, function (err, rows) {
                if (rows != null) {
                    //console.log(JSON.stringify(rows));
                    res = JSON.stringify(rows);
                }
            });
            return res;
        }
        catch (err) {
            console.log(err);
            return "service get is broken ";
        }
    };
    UserService.prototype.post = function (obj) {
        try {
            var postquery = "insert into users values('" + obj.User_Name.toString() + "','" + obj.User_Password.toString() + "')";
            console.log(postquery);
            sql.query(connectionString, postquery);
        }
        catch (err) {
            console.log(err);
            console.log("service post error");
        }
    };
    UserService.prototype.put = function (obj) {
        try {
            var putquery = "update users set User_Name='" + obj.User_Name + "'where UserId=" + obj.UserId;
            console.log(putquery);
            sql.query(connectionString, putquery);
        }
        catch (err) {
            console.log(err);
            console.log("service put error");
        }
    };
    UserService.prototype.delete = function (obj) {
        var deletequery = "delete Users where UserId=" + obj.UserId;
        console.log(deletequery);
        sql.query(connectionString, deletequery);
    };
    return UserService;
}());
exports.UserService = UserService;
