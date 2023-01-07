import expect from "expect";
import { Database } from "./database";
import { DatabaseType } from "../databaseType";

export class DatabaseTest {

    public testConstructor() : void {
        const db : Database = new Database('localhost',4533,'username','password',1,DatabaseType.MY_SQL);
        
            expect(db).not.toBeNull();
        
    }
}