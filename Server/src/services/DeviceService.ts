import { SqlClient } from "msnodesqlv8";
import { resolve } from "path";
import { Service } from "./Service";
const sql: SqlClient = require("msnodesqlv8");
const connectionString = "server=.;Database=GameCenter;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT * FROM [GameCenter].[dbo].[Devices]";
let res:string;
export class DeviceService implements Service{
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
    post(obj: any): void {
        try{
        
            let postquery = `insert into Devices values('${obj.name.toString()}','${obj.In_Nice_Condition.toString()}')`;
            console.log(postquery);
            sql.query(connectionString,postquery);
                
        }
        catch(err)
        {
            console.log(err);
            console.log("service post error")
        }
    }
    put(obj: any): void {
        try{
            let putquery = `update devices set name='${obj.name}'where Id=${obj.Id}`;
            console.log(putquery);
            sql.query(connectionString,putquery);
        }catch(err)
        {
            console.log(err);
            console.log("service put error")
        }
    }
    delete(obj: any): void {
        let deletequery = `delete Devices where Id=${obj.Id}`;
        console.log(deletequery);
        sql.query(connectionString,deletequery);
    }

}