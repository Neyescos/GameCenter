import { SqlClient } from "msnodesqlv8";
import { stringify } from "querystring";
import { Service } from "./Service";
const sql: SqlClient = require("msnodesqlv8");
const connectionString = "server=.;Database=GameCenter;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT * FROM [GameCenter].[dbo].[Users]";
let res:string;
export class UserService implements Service{
    async get():Promise<any> {
        return new Promise(async (resolve,reject)=>{
            try{
                sql.query(connectionString, query, (err, rows) => {
                    if(rows!= null){
                        //console.log(JSON.stringify(rows));
                        res =JSON.stringify(rows);
                    } 
                });
                setTimeout(()=>{
                    resolve(res);
                },100);
            }catch(err)
            {
                console.log(err);
                return "service get is broken ";
            }
        })
    }
    getRes():string{
        return res;
    }
    post(obj:any):void{
        try{
        
            let postquery = `insert into users values('${obj.User_Name.toString()}','${obj.User_Password.toString()}')`;
            console.log(postquery);
            sql.query(connectionString,postquery);
                
        }
        catch(err)
        {
            console.log(err);
            console.log("service post error")
        }
    }
    put(obj:any):void{
        try{
            let putquery = `update users set User_Name='${obj.User_Name}'where UserId=${obj.UserId}`;
            console.log(putquery);
            sql.query(connectionString,putquery);
        }catch(err)
        {
            console.log(err);
            console.log("service put error")
        }
    }
    delete(obj: any): void {
        let deletequery = `delete Users where UserId=${obj.UserId}`;
        console.log(deletequery);
        sql.query(connectionString,deletequery);
    }
}