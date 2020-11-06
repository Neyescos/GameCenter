"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var sql = require("msnodesqlv8");
var connectionString = "server=.;Database=GameCenter;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
var query = "SELECT * FROM [GameCenter].[dbo].[Users]";
var selectedUser;
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.post = function (obj) {
        var selectedUserQuery = "SELECT * FROM [GameCenter].[dbo].[Users] where User_Name='" + obj.User_Name.toString() + "' and User_Password='" + obj.User_Password.toString() + "'";
        sql.query(connectionString, selectedUserQuery, function (err, rows) {
            if (rows != null)
                console.log(JSON.stringify(rows));
            selectedUser += JSON.stringify(rows);
        });
        if (selectedUser == null)
            return "bad request";
        console.log("User" + selectedUser);
        return selectedUser;
    };
    return AuthService;
}());
exports.AuthService = AuthService;
