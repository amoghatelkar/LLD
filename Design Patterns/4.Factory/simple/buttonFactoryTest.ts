import { IButton } from "./button"
import { ButtonFactory } from "./buttonFactory"
import { Platform } from "./platform"
import { PrimaryButton } from "./primaryButton";
import { RoundButton } from "./roundButton"


export class ButtonFactoryTest{


    testButton(){
        const round:IButton = ButtonFactory.createButton(Platform.iOS);
        console.assert(round instanceof RoundButton, "If platform is ios then the button should be round");
        console.assert(round instanceof PrimaryButton, "If platform is ios then the button should be round");
    }

}

const buttonFactoryTest = new ButtonFactoryTest();
buttonFactoryTest.testButton();