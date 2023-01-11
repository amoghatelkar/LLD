import { IButton } from "./interfaces/button";
import { ICheckbox } from "./interfaces/checkbox";
import { IFormFactory } from "./interfaces/formFactory";
import { DarkButton } from "./models/darkButton";
import { DarkCheckbox } from "./models/darkCheckbox";
import { DarkFormFactory } from "./models/darkFormFactory";
import { LightButton } from "./models/lightButton";
import { LightCheckbox } from "./models/lightCheckbox";
import { LightFormFactory } from "./models/lightFormFactory";

export class FormFactoryTest {

    private factory:IFormFactory;

    constructor(type:string){
        switch(type){
            case "dark" :{
                this.factory = new DarkFormFactory();
                break;
            }
            case "light" :{
                this.factory = new LightFormFactory();
                break;
            }
            default:
                throw new Error("Wrong Input");
        }
        
    }

    testFormFactory(){

        const button:IButton = this.factory.createButton();
        const checkBox:ICheckbox = this.factory.createCheckbox();

        console.assert(button instanceof DarkButton, "If button factory is called, button should be dark");
        console.assert(button instanceof LightButton, "If button factory is called, button should be light");

        console.assert(checkBox instanceof DarkCheckbox, "If checkbox factory is called, checkbox should be dark");
        console.assert(checkBox instanceof LightCheckbox, "If checkbox factory is called, checkbox should be light");

    }
}

const formFactoryTest = new FormFactoryTest("light");
formFactoryTest.testFormFactory();