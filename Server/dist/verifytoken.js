"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verify = void 0;
var jwt = require('jsonwebtoken');
var Verify = /** @class */ (function () {
    function Verify() {
    }
    Verify.prototype.verify = function (req, res) {
        //let headers =req.headers["authorization"]; //false
        //console.log(headers +" headers");
        //console.log(token+ '     ----- TOKEN');
        //console.log("verify");
        if (req.headers['authorization'] == null || undefined) {
            console.log("No token");
            res.end('Access denied');
            return false;
        }
        else {
            try {
                console.log("has token");
                var token = req.headers.authorization;
                //console.log("verify3");
                var verify = jwt.verify(token, "drcfvtgbyhunjimk,o");
                //console.log("verify4");
                return true;
            }
            catch (err) {
                res.end('Invalid token');
                return false;
            }
        }
    };
    return Verify;
}());
exports.Verify = Verify;
