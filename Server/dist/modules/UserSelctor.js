"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSelector = void 0;
var sql = require("msnodesqlv8");
var connectionString = "server=.;Database=GameCenter;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
var query = "SELECT TOP (5) [UserId],[User_Password],[User_Name]FROM [GameCenter].[dbo].[Users]";
var UserSelector = /** @class */ (function () {
    function UserSelector() {
    }
    UserSelector.prototype.Execute = function (request, response) {
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
    return UserSelector;
}());
exports.UserSelector = UserSelector;
