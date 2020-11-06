"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceController = void 0;
var DeviceService_1 = require("../services/DeviceService");
var parse = require('querystring').parse;
var deviceservice = new DeviceService_1.DeviceService;
var DeviceController = /** @class */ (function () {
    function DeviceController() {
    }
    DeviceController.prototype.Execute = function (request, response) {
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
    //
    //sql select service
    //deviceservice.get();
    DeviceController.prototype.get = function (request, response) {
        response.end(deviceservice.get());
    };
    //
    //sql insert service
    //deviceservice.post(obj);
    DeviceController.prototype.post = function (request, response) {
        try {
            var data_1 = '';
            request.on('data', function (chunk) {
                data_1 += chunk.toString();
            });
            request.on('end', function () {
                var obj = parse(data_1);
                console.log(obj);
                deviceservice.post(obj);
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
    //deviceservice.put(obj);
    DeviceController.prototype.put = function (request, response) {
        try {
            var data_2 = '';
            request.on('data', function (chunk) {
                data_2 += chunk.toString();
            });
            request.on('end', function () {
                var obj = parse(data_2);
                console.log(obj);
                deviceservice.put(obj);
                response.end('Ok');
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    //
    //sql delete service
    //deviceservice.delete(obj);
    DeviceController.prototype.delete = function (request, response) {
        try {
            var data_3 = '';
            request.on('data', function (chunk) {
                data_3 += chunk.toString();
            });
            request.on('end', function () {
                var obj = parse(data_3);
                console.log(obj);
                deviceservice.delete(obj);
                response.end('Ok');
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    return DeviceController;
}());
exports.DeviceController = DeviceController;
