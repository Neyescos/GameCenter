import { IncomingMessage, ServerResponse } from "http";
import { Controller } from "./Controller"
import {AuthService} from "../services/AuthService"
import { error, exception } from "console";
import { json } from "body-parser";
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
            request.on('end',async ()=>{
                try{
                    let obj = parse(data);
                    let result:any;
                    console.log(obj);
                
                    let res =await authService.post(obj).then(()=>{console.log(authService.getUser()); result =authService.getUser();});
                        
                    if(result ==undefined|| result==null||result=='Invalid values'){
                        response.end(JSON.stringify({token:'Invalid values'}));
                        
                    }
                    else{

                        console.log(result+' ---- RESULT');
                            
                        //Create jwt token
                            
                        const signature = 'drcfvtgbyhunjimk,o';
                        
                            
                        const token =  jwt.sign( {UserId: result.UserId} , signature, { expiresIn: '5h' });
                        
                            
                        
                        console.log(JSON.stringify(result)+" --- User found");
                        
                        console.log(token);
                        //console.log(JSON.stringify({token:`${token}`,name:'Authorization',user:result}));
                        if(result!=null)response.end(JSON.stringify({token:`${token}`,name:'Authorization',user:result.Id}));
                        else response.statusCode;
                    }  

                }catch(err){
                    console.log(err);
                    
                }

                
                
            }
            );
    }catch(err)
    {
        console.log(err);
        console.log("post error")
    }
    
    }
    get(req: IncomingMessage, res: ServerResponse): void {
        res.end('lol');
    }
    put(req: IncomingMessage, res: ServerResponse): void {
        throw new Error("Method not implemented.");
    }
    delete(req: IncomingMessage, res: ServerResponse): void {
        throw new Error("Method not implemented.");
    }
}