import { Bird } from "./bird";

export class Sparrow extends Bird{

    constructor(weight:number,color:string,size:number,beakType:string){
        super(weight,color,size,beakType);
    }

    public makeSound =  (type: any) => {
        console.log("Sparrow is making a sound");
    };
    
    public fly = (type: any) => {
        console.log("Sparrow is flying");
    };
}