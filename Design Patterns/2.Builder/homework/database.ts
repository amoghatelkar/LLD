import { DatabaseType } from "./databaseType";

export class Database {

    private host: string;
    private port: number;
    private username: string;
    private password: string;
    private id: number;
    private type: DatabaseType;


    static Builder = class {

        private database : Database;

        constructor(){
           this.database = new Database('',0,'','',0,DatabaseType.NONE);
        }

        setHost(host:string){
            this.database.host = host;
            return this;
            //return this allows chaining of methods
        }

        setPort(port:number){
            this.database.port = port;
            return this; 
        }

        setUsername(username:string){
            this.database.username = username;
            return this;
        }

        setPassword(password:string){
            this.database.password = password;
            return this;
        }

        setId (id:number){
            this.database.id = id;
            return this;
        } 

        setType(type:DatabaseType){
            this.database.type = type;
            return this;
        }

        build(){
            const db = new Database(this.database.host,this.database.port,this.database.username,this.database.password,this.database.id,this.database.type);
            return db;
        }

    }


    constructor(host: string, port: number, username: string, password: string, id: number, type: DatabaseType) {
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
        this.id = id;
        this.type = type;
    }

    toString(){
        return `host: ${this.host}
        port: ${this.port}
        username: ${this.username}
        password: ${this.password}
        id: ${this.id}
        type: ${this.type}`;
    }

}
