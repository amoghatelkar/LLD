// Step 4 - Implement concrete decorators

import { BaseDecorator } from "./interfaces/baseDecorator";
import { IDatabase } from "./interfaces/database";

export class EncryptionDecorator implements IDatabase{

    private database:IDatabase;
    
    constructor(database:IDatabase){
        this.database = database;
    }

    public read(): string {
        const value:string = this.database.read();
        return this.decrypt(value);
    }

    private decrypt(value:string):string{
        return value.split(" - ")[0];
    }

    public write(value: string): void {
        this.database.write(this.encrypt(value));
    }

    private encrypt(value:string):string{
        return `${value} - Encrypted`;
    }

}