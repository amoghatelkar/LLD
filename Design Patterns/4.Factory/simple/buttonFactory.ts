import { IButton } from "./button";
import { Platform } from "./platform";
import { PrimaryButton } from "./primaryButton";
import { RoundButton } from "./roundButton";

//Step 3 Create factory class
export class ButtonFactory{

    //Step 4 Create a static factory method
    //Requirements 
    // - Accept a parameter
    // - Return the product interface

    public static createButton = (platform:Platform):IButton => {
        switch(platform){
            case Platform.ANDROID:
                return new RoundButton();
            case Platform.MacOS:
                return new PrimaryButton();
            case Platform.iOS:
                return new RoundButton();
            default:
                throw new Error("Invalid Input");
        }

        
    } 
}