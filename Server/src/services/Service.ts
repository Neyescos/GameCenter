export abstract class Service{
    abstract get():string;
    abstract post(data:any):void;
    abstract put(data: any):void;
    abstract delete(data: any):void;
}