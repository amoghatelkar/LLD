import { Bird } from "./bird";

export abstract class FlyableBird extends Bird {

    constructor(weight,colour,size,beakType){
        super(weight,colour,size,beakType);
    }

    public abstract fly : () => void;
}