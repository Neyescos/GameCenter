
import { IncomingMessage, ServerResponse } from "http";

const jwt = require('jsonwebtoken');

export class Verify{

    public verify(req: IncomingMessage,res: ServerResponse):boolean{
        
        
        //let headers =req.headers["authorization"]; //false
        //console.log(headers +" headers");
        //console.log(token+ '     ----- TOKEN');
        //console.log("verify");
        if(req.headers['authorization']==null ||undefined)
        {
            console.log("No token");
            res.end('Access denied'); 
            return false;
        }else{

            try{
                console.log("has token");
                const token =req.headers.authorization;
                //console.log("verify3");
                const verify = jwt.verify(token,"drcfvtgbyhunjimk,o");
                //console.log("verify4");
                return true;
            }catch(err){
                res.end('Invalid token');
                return false;
            }
        }
    }
}