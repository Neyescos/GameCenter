"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verify = void 0;
var jwt = require('jsonwebtoken');
var Verify = /** @class */ (function () {
    function Verify() {
    }
    Verify.prototype.verify = function (req, res) {
        var token = req.headers['authorization'];
        //let headers =req.headers["authorization"]; //false
        //console.log(headers +" headers");
        //console.log(token+ '     ----- TOKEN');
        if (!token)
            return res.end('Access denied');
        try {
            var verify = jwt.verify(token, "drcfvtgbyhunjimk,o");
        }
        catch (err) {
            res.end('Invalid token');
        }
    };
    return Verify;
}());
exports.Verify = Verify;
