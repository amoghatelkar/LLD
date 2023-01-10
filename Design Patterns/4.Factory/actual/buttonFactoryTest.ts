import { Button } from "./models/button"
import { ButtonFactory } from "./buttonFactory"
import { Platform } from "./models/platform"
import { PrimaryButton } from "./models/primaryButton";
import { RoundButton } from "./models/roundButton"
import { IGenericButtonFactory } from "./factoryMethod/buttonFactory";
import { FactoryFactory } from "./factorOfFactory";

export class ButtonFactoryTest{


    private factory: IGenericButtonFactory;

    constructor(type:string){
        this.factory = FactoryFactory.createFactory(type);
    }

    testButton(){
        const round:Button = ButtonFactory.createButton(Platform.iOS,'#btn',1,0,0);
        console.assert(round instanceof RoundButton, "If platform is ios then the button should be round");
    }

    testFactoryMethod(){
        const primary:Button = this.factory.createButton();
        console.assert(primary instanceof PrimaryButton,"If platform is android then the button should be primary");
        console.assert(primary instanceof RoundButton,"If platform is ios then the button should be round");
    }
}

const buttonFactoryTest = new ButtonFactoryTest("primary");

buttonFactoryTest.testFactoryMethod();
