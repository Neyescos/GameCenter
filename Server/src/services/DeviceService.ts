import { SqlClient } from "msnodesqlv8";
import { Service } from "./Service";
const sql: SqlClient = require("msnodesqlv8");
const connectionString = "server=.;Database=GameCenter;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT * FROM [GameCenter].[dbo].[Devices]";
let res:string;
export class DeviceService implements Service{
    get(): any {
        try{
            sql.query(connectionString, query, (err, rows) => {
            if(rows!= null)
            {
                
                res =  JSON.stringify(rows);
            }
            return res;
        });
        }catch(err)
        {
            console.log(err);
            return "service get is broken ";
        }
    }
    post(obj: any): void {
        try{
        
            let postquery = `insert into Devices values('${obj.Device_Name.toString()}','${obj.In_Nice_Condition.toString()}')`;
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
            let putquery = `update devices set User_Name='${obj.Device_Name}'where DeviceId=${obj.DeviceId}`;
            console.log(putquery);
            sql.query(connectionString,putquery);
        }catch(err)
        {
            console.log(err);
            console.log("service put error")
        }
    }
    delete(obj: any): void {
        let deletequery = `delete Devices where DeviceId=${obj.DeviceId}`;
        console.log(deletequery);
        sql.query(connectionString,deletequery);
    }

}