import { IFlyingBehaviour } from "./flyingBehaviour";

export class FlappingBehaviour implements IFlyingBehaviour{
    fly(): void {
        console.log("Bird is Flapping");
    }
    
}