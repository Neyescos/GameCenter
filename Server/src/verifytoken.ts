
import { IncomingMessage, ServerResponse } from "http";

const jwt = require('jsonwebtoken');
export class Verify{

    public verify(req: IncomingMessage,res: ServerResponse){
        
        const token = req.headers['authorization'];
        //let headers =req.headers["authorization"]; //false
        //console.log(headers +" headers");
        //console.log(token+ '     ----- TOKEN');
        if(!token)return res.end('Access denied'); 
        try{
            const verify = jwt.verify(token,"drcfvtgbyhunjimk,o");
            
        }catch(err){
            res.end('Invalid token');
        }
    }
}