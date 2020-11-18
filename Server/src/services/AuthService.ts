import { exception, info } from "console";
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
     async post(obj: any):Promise<any> {
        return new Promise(async (resolve,reject)=>{
            try{
                object = obj;
              
               await this.dataPuller();
               
                
               setTimeout(()=>{
                    console.log("я вернул значение "+selectedUser);
                    resolve(selectedUser);
                },150);
                
                
            }catch(err)
            {
                console.log(err);
                return "login is broken";
            }

        })
    }
    getUser():any{
        
        return selectedUser;
    }
    
    dataPuller(){
        try{
            return new Promise((resolve, reject) => {
                let result ="";
                let obj:any;
                let jobj:any;
                let selectedUserQuery = `SELECT * FROM [GameCenter].[dbo].[Users] where User_Name='${object.User_Name.toString()}' and User_Password='${object.User_Password.toString()}'`;
                
                    let qr = sql.query(connectionString,selectedUserQuery,(err: any,rows: any )=>{
                        if(rows[0]==undefined||rows==null){
                            console.log(JSON.stringify(rows[0]));
                            throw err;
                        }
                        if(rows!=null&& rows!=undefined){
                            console.log(rows[0]);
                            
                            result +=JSON.stringify(rows[0]);
                            obj=JSON.parse(result);//[ { UserId: 2, User_Password: '12345678', User_Name: 'Юра' } ]
                            
                            //console.log(JSON.stringify(obj));//[{"UserId":2,"User_Password":"12345678","User_Name":"Юра"}]
                            
                            console.log(obj.UserId);
                            console.log(JSON.stringify(obj)+" -- OBJECT");
                            console.log("сначала тут");
                            selectedUser =obj;
    
                        }
                        
                    }
                    );
                    resolve(result);
                
            })
            

        }catch(err){
            console.log(err);
            selectedUser = null;
        }
        
    }
    
}
