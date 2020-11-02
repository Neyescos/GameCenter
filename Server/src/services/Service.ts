export abstract class Service{
    abstract get():string;
    abstract post(obj:any):void;
    abstract put(obj: any):void;
    abstract delete(obj: any):void;
}