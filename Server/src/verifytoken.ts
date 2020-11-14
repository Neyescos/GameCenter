
import { IncomingMessage, ServerResponse } from "http";

const jwt = require('jsonwebtoken');
export class Verify{

    public verify(req: IncomingMessage,res: ServerResponse){
        
        const token = res.getHeader('auth-token');
        let headers =res.hasHeader('auth-token'); //false
        console.log(headers +"headers");
        console.log(token+ '     ----- TOKEN');
        if(!token)return res.end('Access denied'); 
        try{
            const verify = jwt.verify(token,"drcfvtgbyhunjimk,o");
            
        }catch(err){
            res.end('Invalid token');
        }
    }
}