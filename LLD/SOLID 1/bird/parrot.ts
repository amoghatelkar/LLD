import { Bird } from "./bird";

export class Parrot extends Bird{

    constructor(weight:number,color:string,size:number,beakType:string){
        super(weight,color,size,beakType);
    }

    public makeSound =  (type: any) => {
        console.log("Parrot is making a sound");
    };
    
    
    public fly = (type: any) => {
        console.log("Parrot is flying");
    };
}