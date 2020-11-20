"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserController_1 = require("./modules/UserController");
var AuthController_1 = require("./modules/AuthController");
var DeviceController_1 = require("./modules/DeviceController");
var sql = require("msnodesqlv8");
var cors_1 = __importDefault(require("cors"));
var modules = new Map();
var express_1 = __importDefault(require("express"));
var corscon = cors_1.default();
var app = express_1.default();
var port = 3000; // default port to listen
modules.set("/users", new UserController_1.UserController);
modules.set("/", new AuthController_1.AuthController);
modules.set("/login", new AuthController_1.AuthController);
modules.set("/devices", new DeviceController_1.DeviceController);
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
    methods: "GET, PUT, POST, DELETE"
};
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    res.header('Content-Type', 'application/json');
    next();
});
app.use(cors_1.default(corsOptions));
// define a route handler for the default home page
app.get("/", function (req, res) {
    var _a, _b;
    (_b = modules.get((_a = req.url) === null || _a === void 0 ? void 0 : _a.toString())) === null || _b === void 0 ? void 0 : _b.Execute(req, res);
});
app.post("/login", function (req, res) {
    var _a, _b;
    (_b = modules.get((_a = req.url) === null || _a === void 0 ? void 0 : _a.toString())) === null || _b === void 0 ? void 0 : _b.Execute(req, res);
});
app.get("/login", function (req, res) {
    var _a, _b;
    (_b = modules.get((_a = req.url) === null || _a === void 0 ? void 0 : _a.toString())) === null || _b === void 0 ? void 0 : _b.Execute(req, res);
});
app.get("/users", function (req, res) {
    var _a, _b;
    (_b = modules.get((_a = req.url) === null || _a === void 0 ? void 0 : _a.toString())) === null || _b === void 0 ? void 0 : _b.Execute(req, res);
});
app.get("/devices", function (req, res) {
    var _a, _b;
    (_b = modules.get((_a = req.url) === null || _a === void 0 ? void 0 : _a.toString())) === null || _b === void 0 ? void 0 : _b.Execute(req, res);
});
// start the express server
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
/*http.createServer(async function (request:IncomingMessage, response:ServerResponse) {
    modules.set("/users",new UserController);
modules.set("/",new UserController);
modules.set("/login",new AuthController);
modules.set("/devices",new DeviceController);
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    
      
    modules.get(request.url?.toString()!)?.Execute(request,response);
    
}).listen(3000);
*/ 
