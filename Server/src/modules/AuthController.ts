import { IncomingMessage, ServerResponse } from "http";
import { Controller } from "./Controller"
import {AuthService} from "../services/AuthService"
const { parse } = require('querystring');
const jwt = require('jsonwebtoken');

let authService = new AuthService;
export class AuthController implements Controller{
    
   
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
    post(request: IncomingMessage, response: ServerResponse): void {
        try{
            let data = '';
            request.on('data', chunk => {
                data += chunk.toString();
            });
            request.on('end',()=>{
                
                let obj = parse(data);
                let res:any;
                console.log(obj);
                setTimeout(()=>{
                    res = authService.post(obj);
                    
                    
                },15000);
                setTimeout(()=>{
                    console.log(res+' ---- RESULT');
                    const result = JSON.stringify(res);
                    console.log(result);

                    
                    
                    //Create jwt token
                    
                    const signature = 'drcfvtgbyhunjimk,o';
                    const expiration = '6h';
                    
                    const token =  jwt.sign({ obj }, signature, { expiresIn: expiration });
                    //const token = jwt.sign({_id: res.UserId},"sqguhbnjkmpkqmnwfihwbf");
                    response.setHeader('auth-token',token);
                    

                    console.log(res.UserId);
                         
                    if(obj!=null)response.end('Ok');

                },20000)
            }
            );
    }catch(err)
    {
        console.log(err);
        console.log("post error")
    }
    
    }
    get(req: IncomingMessage, res: ServerResponse): void {
        throw new Error("Method not implemented.");
    }
    put(req: IncomingMessage, res: ServerResponse): void {
        throw new Error("Method not implemented.");
    }
    delete(req: IncomingMessage, res: ServerResponse): void {
        throw new Error("Method not implemented.");
    }
}