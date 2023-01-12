import { IDatabase } from "./interfaces/database";

export class CompressionDecorator implements IDatabase{

    private database:IDatabase;

    constructor(database:IDatabase){
        this.database = database;
    }

    public read(): string {
        return this.decompressed(this.database.read());
    }

    private compressed(value:string){
        return `${value} - Compressed`;
    }

    private decompressed(value:string){
        return value.split(' - ')[0];
    }

    public write(value: string): void {
        this.database.write(this.compressed(value));
    }
    
}