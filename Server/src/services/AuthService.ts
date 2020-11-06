import { SqlClient } from "msnodesqlv8";
import { Service } from "./Service";
const sql: SqlClient = require("msnodesqlv8");
const connectionString = "server=.;Database=GameCenter;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT * FROM [GameCenter].[dbo].[Users]";

let selectedUser:string;
export class AuthService {
    post(obj: any): string {
        let selectedUserQuery = `SELECT * FROM [GameCenter].[dbo].[Users] where User_Name='${obj.User_Name.toString()}' and User_Password='${obj.User_Password.toString()}'`;
        sql.query(connectionString,selectedUserQuery,(err: any,rows: any )=>{
            if(rows!=null)
            console.log(JSON.stringify(rows));
            selectedUser +=JSON.stringify(rows);
        }
        );
        if(selectedUser==null)return "bad request";
        console.log("User"+ selectedUser);
        return selectedUser;
    }
    
    
}
