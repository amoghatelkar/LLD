import { DatabaseType } from "./databaseType";

export class Database{

    private host:string;
    private port:number;
    private username:string;
    private password:string;
    private id:number;
    private type:DatabaseType;

    constructor(host:string,port:number,username:string,password:string,id:number,type:DatabaseType){
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
        this.id = id;
        this.type = type;
    }

}