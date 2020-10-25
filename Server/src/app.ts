import { SqlClient } from "msnodesqlv8";
import { from } from "readable-stream";
import { User } from "./models/user";
import {IModule} from "./interfaces/IModule"
import { UserSelector } from "./modules/UserSelctor";
import * as http from 'http'
import { createServer, IncomingMessage, ServerResponse } from 'http';
const sql: SqlClient = require("msnodesqlv8");
 
let modules = new Map<string, IModule>();
http.createServer(async function (request:IncomingMessage, response:ServerResponse) {
    modules.set("/users",new UserSelector);
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    modules.get(request.url?.toString()!)?.Execute(request,response);
}).listen(3000);
