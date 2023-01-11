import { IButton } from "../interfaces/button";
import { ICheckbox } from "../interfaces/checkbox";
import { IFormFactory } from "../interfaces/formFactory";
import { DarkButton } from "./darkButton";
import { DarkCheckbox } from "./darkCheckbox";

export class DarkFormFactory implements IFormFactory{
    createButton(): IButton {
        return new DarkButton();
    }
    createCheckbox(): ICheckbox {
        return new DarkCheckbox();
    }

}