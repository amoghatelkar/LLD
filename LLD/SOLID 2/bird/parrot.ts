import { Bird } from "./abstract/bird";
import { FlyableBird } from "./abstract/flyableBird";
import { IFlyable } from "./interfaces/flyable";


export class Parrot extends Bird implements IFlyable{

    constructor(weight:number,color:string,size:number,beakType:string){
        super(weight,color,size,beakType);
    }

    public makeSound =  (type: any) => {
        console.log("Parrot is making a sound");
    };
    
    
    public fly = () => {
        console.log("Parrot is flying");
    };

}