"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require('jsonwebtoken');
function verify(req, res, next) {
    var token = res.getHeader('auth-token');
    if (!token)
        return res.end('Access denied');
    try {
        var verify_1 = jwt.verify(token, "sqguhbnjkmpkqmnwfihwbf");
    }
    catch (err) {
        res.end('Invalid token');
    }
}
