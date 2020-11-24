import { SqlClient } from "msnodesqlv8";
import { from } from "readable-stream";
import { User } from "./models/user";
import {IModule} from "./interfaces/IModule"
import { UserController } from "./modules/UserController";
import * as http from 'http';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { AuthController } from "./modules/AuthController";
import { DeviceController } from "./modules/DeviceController";
const sql: SqlClient = require("msnodesqlv8");
import cors from "cors";
let modules = new Map<string, IModule>();
import express from "express";
import path from "path";
import { CustomerController } from "./modules/CustomerController";
import { PlayingSpaceController } from "./modules/PlayingSpaceController";
const corscon = cors();
const app = express();
const port = 3000; // default port to listen
modules.set("/users",new UserController);
modules.set("/",new AuthController);
modules.set("/login",new AuthController);
modules.set("/devices",new DeviceController);

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 ,// For legacy browser support
    methods: "GET, PUT, POST, DELETE"
}
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    res.header('Content-Type','application/json');
    next(); 
  });

app.use(cors(corsOptions));
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

http.createServer(async function (request:IncomingMessage, response:ServerResponse) {
    modules.set("/users",new UserController);
    modules.set("/",new UserController);
    modules.set("/login",new AuthController);
    modules.set("/devices",new DeviceController);
    modules.set("/customers",new CustomerController);
    modules.set("/playingspaces",new PlayingSpaceController);
    // modules.set("/Orders",new OrderController);
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    
      
    modules.get(request.url?.toString()!)?.Execute(request,response);
    
}).listen(3000);
