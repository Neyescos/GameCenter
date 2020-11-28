import { promises } from "dns";
import { IncomingMessage, ServerResponse } from "http";
import { SqlClient } from "msnodesqlv8";
import { from } from "readable-stream"
import { httpOverHttp } from "tunnel";
import { IModule } from "../interfaces/IModule";
import { User } from "../models/user";
import { Controller } from "./Controller";
import {UserService} from "../services/UserService"
import{Verify} from "..//verifytoken"
import { verify } from "crypto";
const { parse } = require('querystring');

let userservice = new UserService;

export class UserController implements Controller
{
    Execute(request:IncomingMessage,response:ServerResponse):void {
            const querystring = require('querystring');

            let ver = new Verify;
            if(ver.verify(request,response)!=false)
            {
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
    }
    //
    //sql select service
    //userservice.get();
    async get(request:IncomingMessage,response:ServerResponse):Promise<any>{
        try{
            let res:string;
            
            let info = await userservice.get().then(()=>{res = userservice.getRes()});
            //console.log(res +'---- INFO');
            setTimeout(() => {
                
                response.end(res);
            }, 10);

            
        }catch(err){
            console.log('something is gone wrong');
            
        }       
    }
    //
    //sql insert service
    //userservice.post(obj);
    post(request:IncomingMessage,response:ServerResponse):void{
        try{
                let data = '';
                request.on('data', chunk => {
                    data += chunk.toString();
                });
                request.on('end',()=>{
                    
                    let obj = parse(data);
                    console.log(obj);
                    userservice.post(obj);      
                    response.end('Ok');
                }
                );
        }catch(err)
        {
            console.log(err);
            console.log("post error")
        }
    }
     //
    //sql put service
    //userservice.put(obj);
    put(request:IncomingMessage,response:ServerResponse):void{
        try{
            let data = '';
                request.on('data', chunk => {
                    data += chunk.toString();
                });
                request.on('end',()=>{
                    let obj = parse(data);
                    console.log(obj);
                    userservice.put(obj);
                    response.end('Ok');
                }
                );
        }catch(err)
        {
            console.log(err);
        }
    }
    //
    //sql delete service
    //userservice.delete(obj);
    delete(request:IncomingMessage,response:ServerResponse):void{
        try{
            let data = '';
                request.on('data', chunk => {
                    data += chunk.toString();
                });
                request.on('end',()=>{
                    let obj = parse(data);
                    console.log(obj);
                    userservice.delete(obj);
                    response.end('Ok');
                }
                );
        }catch(err)
        {
            console.log(err);
        }
    }
}