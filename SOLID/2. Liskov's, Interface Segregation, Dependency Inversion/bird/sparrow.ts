import { Bird } from "./abstract/bird";
import { IFlyable } from "./interfaces/flyable";
import { IFlyingBehaviour } from "./stratergy/flyingBehaviour";
import { GlydingBehaviour } from "./stratergy/glydingBehaviour";

export class Sparrow extends Bird implements IFlyable{

    private flyingBehaviour : IFlyingBehaviour;
    constructor(weight:number,color:string,size:number,beakType:string,flyingBehaviour:IFlyingBehaviour){
        super(weight,color,size,beakType);
        this.flyingBehaviour = flyingBehaviour;
    }

    public makeSound =  (type: any) => {
        console.log("Sparrow is making a sound");
    };
    
    public fly = () => {
       this.flyingBehaviour.fly();
    };
}