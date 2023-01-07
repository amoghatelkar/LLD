import { DatabaseType } from "./databaseType";

export class Database {

    private host: string;
    private port: number;
    private username: string;
    private password: string;
    private id: number;
    private type: DatabaseType;

    static Builder = class {

        private host: string;
        private port: number;
        private username: string;
        private password: string;
        private id: number;
        private type: DatabaseType;

        constructor(){
            this.host = '';
            this.port = 0;
            this.username = '';
            this.password = '';
            this.id = 0;
            this.type = DatabaseType.NONE;

        }

        setHost(host:string){
            this.host = host;
            return this;
            //return this allows chaining of methods
        }

        setPort(port:number){
            this.port = port;
            return this; 
        }

        setUsername(username:string){
            this.username = username;
            return this;
        }

        setPassword(password:string){
            this.password = password;
            return this;
        }

        setId (id:number){
            this.id = id;
            return this;
        } 

        setType(type:DatabaseType){
            this.type = type;
            return this;
        }

        build(){
            const db = new Database(this.host,this.port,this.username,this.password,this.id,this.type);
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
