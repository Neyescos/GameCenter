"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
var AuthService_1 = require("../services/AuthService");
var parse = require('querystring').parse;
var jwt = require('jsonwebtoken');
var authService = new AuthService_1.AuthService;
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.prototype.Execute = function (request, response) {
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
    AuthController.prototype.post = function (request, response) {
        var _this = this;
        try {
            var data_1 = '';
            request.on('data', function (chunk) {
                data_1 += chunk.toString();
            });
            request.on('end', function () { return __awaiter(_this, void 0, void 0, function () {
                var obj, result_1, res, signature, token, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            obj = parse(data_1);
                            console.log(obj);
                            return [4 /*yield*/, authService.post(obj).then(function () { console.log(authService.getUser()); result_1 = authService.getUser(); })];
                        case 1:
                            res = _a.sent();
                            if (result_1 == undefined || result_1 == null) {
                                response.end('Invalid values');
                                throw "invalid values inserted";
                            }
                            console.log(result_1 + ' ---- RESULT');
                            signature = 'drcfvtgbyhunjimk,o';
                            token = jwt.sign({ foo: result_1.UserId }, signature, { expiresIn: '5h' });
                            //const token = jwt.sign({_id: res.UserId},"sqguhbnjkmpkqmnwfihwbf");
                            //response.setHeader('auth-token',token);
                            console.log(JSON.stringify(result_1) + " --- User found");
                            console.log(token);
                            if (result_1 != null)
                                response.end('Ok');
                            else
                                response.statusCode;
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.log(err_1);
                            response.end('something is gone wrong');
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        }
        catch (err) {
            console.log(err);
            console.log("post error");
        }
    };
    AuthController.prototype.get = function (req, res) {
        res.end('введите свои данные');
    };
    AuthController.prototype.put = function (req, res) {
        throw new Error("Method not implemented.");
    };
    AuthController.prototype.delete = function (req, res) {
        throw new Error("Method not implemented.");
    };
    return AuthController;
}());
exports.AuthController = AuthController;
