import { promises } from "dns";
import { IncomingMessage, ServerResponse } from "http";
import { from } from "readable-stream";


export interface IModule {
    Execute(req:IncomingMessage,res:ServerResponse):void;
    
}