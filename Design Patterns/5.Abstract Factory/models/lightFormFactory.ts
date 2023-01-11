import { IButton } from "../interfaces/button";
import { ICheckbox } from "../interfaces/checkbox";
import { IFormFactory } from "../interfaces/formFactory";
import { LightButton } from "./lightButton";
import { LightCheckbox } from "./lightCheckbox";

export class LightFormFactory implements IFormFactory{
    createButton(): IButton {
        return new LightButton();
    }
    createCheckbox(): ICheckbox {
        return new LightCheckbox();
    }

}