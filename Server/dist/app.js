"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserController_1 = require("./modules/UserController");
var http = __importStar(require("http"));
var AuthController_1 = require("./modules/AuthController");
var DeviceController_1 = require("./modules/DeviceController");
var sql = require("msnodesqlv8");
var cors_1 = __importDefault(require("cors"));
var modules = new Map();
var express_1 = __importDefault(require("express"));
var CustomerController_1 = require("./modules/CustomerController");
var PlayingSpaceController_1 = require("./modules/PlayingSpaceController");
var OrderController_1 = require("./modules/OrderController");
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
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization"); //if problem with headers and cors
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
    res.header('Content-Type', 'application/json');
    next();
});
app.use(cors_1.default(corsOptions));
// define a route handler for the default home page
/*
app.get( "/", ( req, res ) => {
    
    
    modules.get(req.url?.toString()!)?.Execute(req,res);
   
} );
app.post( "/login", ( req, res ) => {
    
    
    modules.get(req.url?.toString()!)?.Execute(req,res);
   
} );
app.get( "/login", ( req, res ) => {
    
    
    modules.get(req.url?.toString()!)?.Execute(req,res);
   
} );
app.get( "/users", ( req, res ) => {
    
    
    modules.get(req.url?.toString()!)?.Execute(req,res);
   
} );
app.get( "/devices", ( req, res ) => {
    
    
    modules.get(req.url?.toString()!)?.Execute(req,res);
   
} );
// start the express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

*/
http.createServer(function (request, response) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_c) {
            modules.set("/users", new UserController_1.UserController);
            modules.set("/", new UserController_1.UserController);
            modules.set("/login", new AuthController_1.AuthController);
            modules.set("/devices", new DeviceController_1.DeviceController);
            modules.set("/customers", new CustomerController_1.CustomerController);
            modules.set("/playingspaces", new PlayingSpaceController_1.PlayingSpaceController);
            modules.set("/orders", new OrderController_1.OrderController);
            response.setHeader("Access-Control-Allow-Origin", "*");
            response.setHeader("Access-Control-Allow-Methods", "*");
            response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept,authorization');
            (_b = modules.get((_a = request.url) === null || _a === void 0 ? void 0 : _a.toString())) === null || _b === void 0 ? void 0 : _b.Execute(request, response);
            return [2 /*return*/];
        });
    });
}).listen(3000);
