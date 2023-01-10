import { IGenericButtonFactory } from "./factoryMethod/buttonFactory";
import { PrimaryButtonFactory } from "./factoryMethod/primaryButtonFactory";
import { RoundButtonFactory } from "./factoryMethod/roundButtonFactory";

export class FactoryFactory {

    public static createFactory = (type:string):IGenericButtonFactory => {

        switch(type){

            case "primary" : {
                return new PrimaryButtonFactory();
            }
            case "round" :{
                return new RoundButtonFactory();
            }
            default:{
                throw new Error("Wrong Input");
            }
        }

    }

}