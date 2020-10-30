import { promises } from "dns";
import { IncomingMessage, ServerResponse } from "http";
import { SqlClient } from "msnodesqlv8";
import { from } from "readable-stream"
import { IModule } from "../interfaces/IModule";
import { User } from "../models/user";

const sql: SqlClient = require("msnodesqlv8");
 
const connectionString = "server=.;Database=GameCenter;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT TOP (5) [UserId],[User_Password],[User_Name]FROM [GameCenter].[dbo].[Users]";
const postquery = "insert into users values(";
const putquery = "update users set User_Name=";
const deletequery ="delete Users where UserId=";
export class UserSelector implements IModule
{
    
    Execute(request:IncomingMessage,response:ServerResponse):void {
      
        
        try{
             sql.query(connectionString, query, (err, rows) => {
                if(rows!= null)
                {
                    response.end(JSON.stringify(rows));
                }
            });
        }catch(err)
        {
            console.log(err);
        }
        
    }
    post(userdata:User):void{
        try{
            sql.query(connectionString,postquery+userdata.User_Name+','+userdata.User_Password);
        }catch(err)
        {
            console.log(err);
        }
    }
    put(userdata:User):void{
        try{
            sql.query(connectionString,putquery+userdata.User_Name+','+"User_Password="+userdata.User_Password+"where UserId="+userdata.UserId);
        }catch(err)
        {
            console.log(err);
        }
    }
    delete(id:number):void{
        try{
            sql.query(connectionString,deletequery+id.toString());
        }catch(err)
        {
            console.log(err);
        }
    }

}