import { Button } from "./models/button";
import { Platform } from "./models/platform";
import { PrimaryButton } from "./models/primaryButton";
import { RoundButton } from "./models/roundButton";

//Step 3 Create factory class
export class ButtonFactory{

    //Step 4 Create a static factory method
    //Requirements 
    // - Accept a parameter
    // - Return the product interface

    public static createButton = (platform:Platform, id:string,radius:number,height:number,length:number):Button => {
        switch(platform){
            case Platform.ANDROID:
                return new RoundButton(id,radius);
            case Platform.MacOS:
                return new PrimaryButton(id,height,length);
            case Platform.iOS:
                return new RoundButton(id,radius);
            default:
                throw new Error("Invalid Input");
        }

        // 1. Think of design pattern which deals with lot of arguments
        // 2. Change return type from Button to ...
        // 3. Allow you to add fields in consumer rather than in factory` 

        
    } 
}