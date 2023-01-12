import { BaseDecorator } from "./interfaces/baseDecorator";
import { CompressionDecorator } from "./compressionDecorator";
import { EncryptionDecorator } from "./encryptionDecorator";
import { IDatabase } from "./interfaces/database";
import { SimpleDatabase } from "./simpleDatabase";

export class DatabaseTest{

    private database:IDatabase;


    constructor(){
        this.database = new SimpleDatabase();
    }

    testBase(){
        const value = new BaseDecorator();
        value.write("Base Decorator");
        console.log("If base datasource is used , it should return base : ",value);
    }

    testCompression(){
        this.database.write("Compression Decorator");
        const value = new CompressionDecorator(this.database);
        console.log("If compression datasource is used , it should return compression : ",value);
    }

    testEncryption(){
        this.database.write("Encryption Decorator");
        const value = new EncryptionDecorator(this.database);
        console.log("If encrption datasource is used , it should return encryption : ",value);
    }

}

const databaseTest = new DatabaseTest();

databaseTest.testBase();
databaseTest.testCompression();
databaseTest.testEncryption();