import { IDatabase } from "./interfaces/database";

export class SimpleDatabase implements IDatabase {

    private value:string;

    constructor(){
        this.value = "";
    }
    read(): string {
        return this.value;
    }
    write(value:string): void {
        this.value = value;
    }

}