import { Bird } from "./bird";

export abstract class NonFlyableBird extends Bird {

    constructor(weight,colour,size,beakType){
        super(weight,colour,size,beakType);
    }
}