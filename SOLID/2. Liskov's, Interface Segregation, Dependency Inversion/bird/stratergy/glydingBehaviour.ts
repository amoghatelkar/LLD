import { IFlyingBehaviour } from "./flyingBehaviour";

export class GlydingBehaviour implements IFlyingBehaviour{
    fly(): void {
        console.log("Bird is gliding");
    }
    
}