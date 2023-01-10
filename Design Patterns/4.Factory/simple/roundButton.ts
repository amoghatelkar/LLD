import { IButton } from "./button";

//Step 2 Concrete product classes
export class RoundButton implements IButton{
    onClick(): void {
        throw new Error("Method not implemented.");
    }
    render(): void {
        throw new Error("Method not implemented.");
    }

}