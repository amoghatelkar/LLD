import { Database } from "./database";
import { DatabaseType } from "./databaseType";

export class DatabaseTest {

    public testConstructor() : void {

        //this type of method chaining is called builder pattern 
        const db = new Database.Builder().setHost("https://localhost").setPort(8080).setUsername("username").setPassword("password").setId(1).setType(DatabaseType.MONGO).build();
        console.log(db.toString());
    }
}

const dbTest = new DatabaseTest();
dbTest.testConstructor();