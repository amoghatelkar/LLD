import { SimpleDatabase } from "../simpleDatabase";
import { IDatabase } from "./database";

// Step 3 - Create base decorator implementing product interface
export class BaseDecorator implements IDatabase{

    private database:IDatabase;

    constructor(){
        this.database = new SimpleDatabase();
    }
    
    public read(): string{
        return this.database.read()
    }
    public write(value: string): void{
        this.database.write(value);
    }

}