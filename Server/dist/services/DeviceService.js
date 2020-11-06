"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceService = void 0;
var sql = require("msnodesqlv8");
var connectionString = "server=.;Database=GameCenter;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
var query = "SELECT * FROM [GameCenter].[dbo].[Devices]";
var res;
var DeviceService = /** @class */ (function () {
    function DeviceService() {
    }
    DeviceService.prototype.get = function () {
        try {
            sql.query(connectionString, query, function (err, rows) {
                if (rows != null) {
                    res = JSON.stringify(rows);
                }
                return res;
            });
        }
        catch (err) {
            console.log(err);
            return "service get is broken ";
        }
    };
    DeviceService.prototype.post = function (obj) {
        try {
            var postquery = "insert into Devices values('" + obj.Device_Name.toString() + "','" + obj.In_Nice_Condition.toString() + "')";
            console.log(postquery);
            sql.query(connectionString, postquery);
        }
        catch (err) {
            console.log(err);
            console.log("service post error");
        }
    };
    DeviceService.prototype.put = function (obj) {
        try {
            var putquery = "update devices set User_Name='" + obj.Device_Name + "'where DeviceId=" + obj.DeviceId;
            console.log(putquery);
            sql.query(connectionString, putquery);
        }
        catch (err) {
            console.log(err);
            console.log("service put error");
        }
    };
    DeviceService.prototype.delete = function (obj) {
        var deletequery = "delete Devices where DeviceId=" + obj.DeviceId;
        console.log(deletequery);
        sql.query(connectionString, deletequery);
    };
    return DeviceService;
}());
exports.DeviceService = DeviceService;
