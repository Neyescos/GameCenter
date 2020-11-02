import { SqlClient } from "msnodesqlv8";
import { Service } from "./Service";
const sql: SqlClient = require("msnodesqlv8");
const connectionString = "server=.;Database=GameCenter;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT * FROM [GameCenter].[dbo].[Users]";
export class UserService implements Service{
    get():string{
        try{
            sql.query(connectionString, query, (err, rows) => {
            if(rows!= null)
            {
                
                return JSON.stringify(rows);
            }
        });
        }catch(err)
        {
            console.log(err);
        }
        return "service get is broken ";
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