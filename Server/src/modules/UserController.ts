import { promises } from "dns";
import { IncomingMessage, ServerResponse } from "http";
import { SqlClient } from "msnodesqlv8";
import { from } from "readable-stream"
import { httpOverHttp } from "tunnel";
import { IModule } from "../interfaces/IModule";
import { User } from "../models/user";
import { Controller } from "./Controller";


const sql: SqlClient = require("msnodesqlv8");


const { parse } = require('querystring');
const connectionString = "server=.;Database=GameCenter;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT * FROM [GameCenter].[dbo].[Users]";



export class UserController implements Controller
{
    Execute(request:IncomingMessage,response:ServerResponse):void {
        const querystring = require('querystring')
        var req = request.method;
        switch (req){
            case 'GET':
               this.get(request,response);
            break;
            case 'POST':
                this.post(request,response);
                break;
            case 'PUT':
               this.put(request,response);
                break;
            case 'DELETE':
                this.delete(request,response);
        }
    }
    get(request:IncomingMessage,response:ServerResponse):void{
        try{
            sql.query(connectionString, query, (err, rows) => {
            if(rows!= null)
            {
                response.end(JSON.stringify(rows));
            }
        });
        }catch(err)
        {
            console.log(err);
        }
    }
    post(request:IncomingMessage,response:ServerResponse):void{
        try{
                let data = '';
                request.on('data', chunk => {
                    data += chunk.toString();
                });
                request.on('end',()=>{
                    
                    let obj = parse(data);
                    console.log(obj);
                    let postquery = `insert into users values('${obj.User_Name.toString()}','${obj.User_Password.toString()}')`;
                    console.log(postquery);
                    sql.query(connectionString,postquery);
                    response.end('Ok');
                }
                );
        }catch(err)
        {
            console.log(err);
            console.log("post error")
        }
    }
    put(request:IncomingMessage,response:ServerResponse):void{
        try{
            let data = '';
                request.on('data', chunk => {
                    data += chunk.toString();
                });
                request.on('end',()=>{
                    let obj = parse(data);
                    console.log(obj);
                    let putquery = `update users set User_Name='${obj.User_Name}'where UserId=${obj.UserId}`;
                    console.log(putquery);
                    sql.query(connectionString,putquery);
                    response.end('Ok');
                }
                );
        }catch(err)
        {
            console.log(err);
        }
    }
    delete(request:IncomingMessage,response:ServerResponse):void{
        try{
            let data = '';
                request.on('data', chunk => {
                    data += chunk.toString();
                });
                request.on('end',()=>{
                    let obj = parse(data);
                    console.log(obj);
                    let deletequery = `delete Users where UserId=${obj.UserId}`;
                    console.log(deletequery);
                    sql.query(connectionString,deletequery);
                    response.end('Ok');
                }
                );
        }catch(err)
        {
            console.log(err);
        }
    }
}