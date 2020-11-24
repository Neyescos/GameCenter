import { Service } from "./Service";
import { SqlClient } from "msnodesqlv8";
import { resolve } from "path";
const sql: SqlClient = require("msnodesqlv8");
const connectionString = "server=.;Database=GameCenter;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT * FROM [GameCenter].[dbo].[Customers]";
let res:string;

export class CustomerService implements Service{
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
        
            let postquery = `insert into Customers values('${obj.Customer_Name.toString()}','${obj.Customer_Phone.toString()}')`;
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
            let putquery = `update Customers set Customer_Name='${obj.Customer_Name}'where CustomerId=${obj.CustomerId}`;
            console.log(putquery);
            sql.query(connectionString,putquery);
        }catch(err)
        {
            console.log(err);
            console.log("service put error")
        }
    }
    delete(obj: any): void {
        let deletequery = `delete Customers where CustomerId=${obj.CustomerId}`;
        console.log(deletequery);
        sql.query(connectionString,deletequery);
    }
    
}