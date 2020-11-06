import { SqlClient } from "msnodesqlv8";
import { from } from "readable-stream";
import { User } from "./models/user";
import {IModule} from "./interfaces/IModule"
import { UserController } from "./modules/UserController";
import * as http from 'http'
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { AuthController } from "./modules/AuthController";
const sql: SqlClient = require("msnodesqlv8");

let modules = new Map<string, IModule>();



http.createServer(async function (request:IncomingMessage, response:ServerResponse) {
    modules.set("/users",new UserController);
    modules.set("/",new UserController);
    modules.set("/login",new AuthController);

    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    modules.get(request.url?.toString()!)?.Execute(request,response);
    
}).listen(3000);
