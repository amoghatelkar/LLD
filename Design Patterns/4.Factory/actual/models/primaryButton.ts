import { Button } from "./button";

export class PrimaryButton extends Button{

    private height:number;
    private length:number
    constructor(id:string,height:number,length:number){
        super(id);
        this.height = height;
        this.length = length;
    }

    onClick(): void {
        throw new Error("Method not implemented.");
    }
    render(): void {
        //throw new Error("Method not implemented.");
        console.log(this.height);
        console.log(this.length);
    }
    
}