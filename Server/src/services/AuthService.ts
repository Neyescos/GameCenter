import { info } from "console";
import { SqlClient } from "msnodesqlv8";
import { resolve } from "path";
import { Service } from "./Service";
const sql: SqlClient = require("msnodesqlv8");
const connectionString = "server=.;Database=GameCenter;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT * FROM [GameCenter].[dbo].[Users]";
let selectedUser:string;
const { parse } = require('querystring');
let object:any;
export class AuthService {
    post(obj: any):any {
        try{
            object = obj;
          
            this.dataFunc();
            setTimeout(()=>{
                console.log("потом тут");
                console.log(selectedUser+" -User info");
               
                

            },7000)
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
                    result +=JSON.stringify(rows);
                    obj=JSON.parse(result);//[ { UserId: 2, User_Password: '12345678', User_Name: 'Юра' } ]
                    console.log(obj);
                    console.log(JSON.stringify(obj));//[{"UserId":2,"User_Password":"12345678","User_Name":"Юра"}]
                    jobj=JSON.stringify(obj);
                    console.log(jobj["UserId"]);
                    console.log("сначала тут");
                    selectedUser =result;
                    
                }
                );
                resolve(result);
            }, 5000)
        })
        
        
    }
    
}
