"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.Execute = function (req, res) {
        var request = req.method;
        switch (request) {
            case 'GET':
                this.get(req, res);
                break;
            case 'POST':
                this.post(req, res);
                break;
            case 'PUT':
                this.put(req, res);
            case 'DELETE':
                this.delete(req, res);
        }
    };
    return Controller;
}());
exports.Controller = Controller;
