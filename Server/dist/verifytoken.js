"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require('jsonwebtoken');
function verify(req, res, next) {
    var token = res.getHeader('auth-token');
    if (!token)
        return res.end('Access denied');
}
