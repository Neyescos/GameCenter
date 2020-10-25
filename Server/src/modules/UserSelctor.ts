import { promises } from "dns";
import { IncomingMessage, ServerResponse } from "http";
import { SqlClient } from "msnodesqlv8";
import { from } from "readable-stream"
import { IModule } from "../interfaces/IModule";

const sql: SqlClient = require("msnodesqlv8");
 
const connectionString = "server=.;Database=GameCenter;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT TOP (5) [UserId],[User_Password],[User_Name]FROM [GameCenter].[dbo].[Users]";
 

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

}