import { Button } from "./button";

//Step 2 Concrete product classes
export class RoundButton extends Button{

    private radius:number;

    constructor(id:string,radius:number){
        super(id);
        this.radius = radius;
    }

    onClick(): void {
        throw new Error("Method not implemented.");
    }
    render(): void {
        throw new Error("Method not implemented.");
    }

}