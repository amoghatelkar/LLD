import { Button } from "../models/button";
import { RoundButton } from "../models/roundButton";
import { IGenericButtonFactory } from "./buttonFactory";

// Step 4 Create concrete factory classes
export class RoundButtonFactory implements IGenericButtonFactory{
    createButton(): Button {
        return new RoundButton("#btn-round",1);
    }
}