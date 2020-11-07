
import { IncomingMessage, ServerResponse } from "http";

const jwt = require('jsonwebtoken');

function verify(req: IncomingMessage,res: ServerResponse,next: any){
    const token = res.getHeader('auth-token');
    if(!token)return res.end('Access denied');  
}