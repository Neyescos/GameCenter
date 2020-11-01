import { IncomingMessage, ServerResponse } from "http";
import { IModule } from "../interfaces/IModule";

export abstract class Controller implements IModule
{
    Execute(req: IncomingMessage, res: ServerResponse): void {
        let request = req.method;
        switch (request){
            case 'GET':
                this.get(req,res);
                break;
            case 'POST':
                this.post(req,res);
                break;
            case 'PUT':
                this.put(req,res);
            case 'DELETE':
                this.delete(req,res);
        }
    }
    abstract get(req: IncomingMessage, res: ServerResponse):void;
    abstract post(req: IncomingMessage, res: ServerResponse):void;
    abstract put(req: IncomingMessage, res: ServerResponse):void;
    abstract delete(req: IncomingMessage, res: ServerResponse):void;
    
}