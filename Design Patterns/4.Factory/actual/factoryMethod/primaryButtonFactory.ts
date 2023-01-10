import { Button } from "../models/button";
import { PrimaryButton } from "../models/primaryButton";
import { IGenericButtonFactory } from "./buttonFactory";

export class PrimaryButtonFactory implements IGenericButtonFactory{
    createButton(): Button {
        return new PrimaryButton("#btn-primary",1,1);
    }

}