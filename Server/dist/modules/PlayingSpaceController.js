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
exports.PlayingSpaceController = void 0;
var PlayingSpacesService_1 = require("../services/PlayingSpacesService");
var verifytoken_1 = require("../verifytoken");
var parse = require('querystring').parse;
var PlayingSpaceservice = new PlayingSpacesService_1.PlayingSpacesService;
var PlayingSpaceController = /** @class */ (function () {
    function PlayingSpaceController() {
    }
    PlayingSpaceController.prototype.Execute = function (request, response) {
        var querystring = require('querystring');
        var ver = new verifytoken_1.Verify;
        ver.verify(request, response);
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
    //
    //sql select service
    //PlayingSpaceservice.get();
    PlayingSpaceController.prototype.get = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var res_1, info, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, PlayingSpaceservice.get().then(function () { res_1 = PlayingSpaceservice.getRes(); })];
                    case 1:
                        info = _a.sent();
                        //console.log(res +'---- INFO');
                        setTimeout(function () {
                            response.end(res_1);
                        }, 10);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log('something is gone wrong');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //
    //sql insert service
    //PlayingSpaceservice.post(obj);
    PlayingSpaceController.prototype.post = function (request, response) {
        try {
            var data_1 = '';
            request.on('data', function (chunk) {
                data_1 += chunk.toString();
            });
            request.on('end', function () {
                var obj = parse(data_1);
                console.log(obj);
                PlayingSpaceservice.post(obj);
                response.end('Ok');
            });
        }
        catch (err) {
            console.log(err);
            console.log("post error");
        }
    };
    //
    //sql put service
    //PlayingSpaceservice.put(obj);
    PlayingSpaceController.prototype.put = function (request, response) {
        try {
            var data_2 = '';
            request.on('data', function (chunk) {
                data_2 += chunk.toString();
            });
            request.on('end', function () {
                var obj = parse(data_2);
                console.log(obj);
                PlayingSpaceservice.put(obj);
                response.end('Ok');
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    //
    //sql delete service
    //PlayingSpaceservice.delete(obj);
    PlayingSpaceController.prototype.delete = function (request, response) {
        try {
            var data_3 = '';
            request.on('data', function (chunk) {
                data_3 += chunk.toString();
            });
            request.on('end', function () {
                var obj = parse(data_3);
                console.log(obj);
                PlayingSpaceservice.delete(obj);
                response.end('Ok');
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    return PlayingSpaceController;
}());
exports.PlayingSpaceController = PlayingSpaceController;
