import { Bird } from "./abstract/bird";
import { NonFlyableBird } from "./abstract/nonFlyableBird";
import { ISwimable } from "./interfaces/swimable";

export class Penguin extends Bird implements ISwimable{

    constructor(weight:number,color:string,size:number,beakType:string){
        super(weight,color,size,beakType);
    }

    public swim(): void {
        console.log("Penguin can swim");
    }

    
    public makeSound =  (type: any) => {
        console.log("Penguin is making a sound");
    };
    
}