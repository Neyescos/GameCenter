import { IncomingMessage, ServerResponse } from "http";
import { request } from "https";
import { PlayingSpacesService } from "../services/PlayingSpacesService";
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
let PlayingSpaceservice = new PlayingSpacesService;
export class PlayingSpaceController implements Controller{
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
    //PlayingSpaceservice.get();
    async get(request:IncomingMessage,response:ServerResponse):Promise<any>{
        try{
            let res:string;
            
            let info = await PlayingSpaceservice.get().then(()=>{res = PlayingSpaceservice.getRes()});
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
    //PlayingSpaceservice.post(obj);
    post(request:IncomingMessage,response:ServerResponse):void{
        try{
                let data = '';
                request.on('data', chunk => {
                    data += chunk.toString();
                });
                request.on('end',()=>{
                    
                    let obj = parse(data);
                    console.log(obj);
                    PlayingSpaceservice.post(obj);      
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
    //PlayingSpaceservice.put(obj);
    put(request:IncomingMessage,response:ServerResponse):void{
        try{
            let data = '';
                request.on('data', chunk => {
                    data += chunk.toString();
                });
                request.on('end',()=>{
                    let obj = parse(data);
                    console.log(obj);
                    PlayingSpaceservice.put(obj);
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
    //PlayingSpaceservice.delete(obj);
    delete(request:IncomingMessage,response:ServerResponse):void{
        try{
            let data = '';
            request.on('data', chunk => {
                data += chunk.toString();
            });
            request.on('end',()=>{
                let obj =JSON.parse(data);
                console.log(obj);
                PlayingSpaceservice.delete(obj);
                response.end('Ok');
            }
            );
        }catch(err)
        {
            console.log(err);
        }
    }
    
}