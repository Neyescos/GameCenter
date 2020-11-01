export class User { 
    UserId!: number;
    User_Password!: string;
    User_Name!: string;
    constructor(User_Password:string,User_Name:string){
        this.User_Name=User_Name;
        this.User_Password=User_Password;
    }
}
