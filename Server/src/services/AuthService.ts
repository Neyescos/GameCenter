import { info } from "console";
import { SqlClient } from "msnodesqlv8";
import { resolve } from "path";
import { Service } from "./Service";
const sql: SqlClient = require("msnodesqlv8");
const connectionString = "server=.;Database=GameCenter;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT * FROM [GameCenter].[dbo].[Users]";
let selectedUser:any;
const { parse } = require('querystring');
let object:any;
export class AuthService {
    post(obj: any):any {
        try{
            object = obj;
          
            this.dataFunc();
            setTimeout(()=>{
                console.log(selectedUser+"потом тут");
                console.log(JSON.stringify(selectedUser)+" -User info");
               
                

            },2500)
            return selectedUser;
            
        }catch(err)
        {
            console.log(err);
            return "login is broken";
        }
    }
    
    async dataFunc() {
        console.log('before promise call');
        //3. Await for the first function to complete
        let result = await this.dataPuller();
        
    }
    dataPuller(){
        return new Promise((resolve, reject) => {
            let result ="";
            let obj:any;
            let jobj:any;
            let selectedUserQuery = `SELECT * FROM [GameCenter].[dbo].[Users] where User_Name='${object.User_Name.toString()}' and User_Password='${object.User_Password.toString()}'`;
            setTimeout(() => {
                let qr = sql.query(connectionString,selectedUserQuery,(err: any,rows: any )=>{
                    if(rows!=null)
                    //console.log(JSON.stringify(rows));
                    //console.log(+" before");
                    result +=JSON.stringify(rows[0]);
                    obj=JSON.parse(result);//[ { UserId: 2, User_Password: '12345678', User_Name: 'Юра' } ]
                    
                    //console.log(JSON.stringify(obj));//[{"UserId":2,"User_Password":"12345678","User_Name":"Юра"}]
                    
                    console.log(obj.UserId);
                    console.log(JSON.stringify(obj)+" -- OBJECT");
                    console.log("сначала тут");
                    selectedUser =obj;
                    
                }
                );
                resolve(result);
            }, 2000)
        })
        
        
    }
    
}
