import { IncomingMessage, ServerResponse } from "http";
import { request } from "https";
import { OrderService } from "../services/OrderService";
import { promises } from "dns";

import { SqlClient } from "msnodesqlv8";
import { from } from "readable-stream"
import { httpOverHttp } from "tunnel";
import { IModule } from "../interfaces/IModule";
import { User } from "../models/user";
import { Controller } from "./Controller";
import { Verify } from "../verifytoken";
import { json } from "body-parser";
const { parse } = require('querystring');
let orderService = new OrderService;
export class OrderController implements Controller{
    Execute(request: IncomingMessage, response: ServerResponse): void {
        const querystring = require('querystring')
        let ver = new Verify;
        ver.verify(request,response);
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
    //
    //sql select service
    //OrderService.get();
    async get(request:IncomingMessage,response:ServerResponse):Promise<any>{
        try{
            let res:string;
            
            let info = await orderService.get().then(()=>{res = orderService.getRes()});
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
    //orderService.post(obj);
    post(request:IncomingMessage,response:ServerResponse):void{
        try{
                let data = '';
                request.on('data', chunk => {
                    data += chunk.toString();
                });
                request.on('end',()=>{
                    
                    let obj = parse(data);
                    console.log(obj);
                    orderService.post(obj);      
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
    //orderService.put(obj);
    put(request:IncomingMessage,response:ServerResponse):void{
        try{
            let data = '';
                request.on('data', chunk => {
                    data += chunk.toString();
                });
                request.on('end',()=>{
                    let obj = parse(data);
                    console.log(obj);
                    orderService.put(obj);
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
    //orderService.delete(obj);
    delete(request:IncomingMessage,response:ServerResponse):void{
        try{
            let data = '';
            request.on('data', chunk => {
                data += chunk.toString();
            });
            request.on('end',()=>{
                let obj =JSON.parse(data);
                console.log(obj);
                orderService.delete(obj);
                response.end('Ok');
            }
            );
        }catch(err)
        {
            console.log(err);
        }
    }
    
}