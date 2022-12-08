import { BirdType } from "./birdType";
export abstract class Bird{

    private weight : number;
    private colour:string;
    private size:string;
    private beakType:string;
    private birdType:BirdType;

    constructor(weight,colour,size,beakType){
        this.beakType = beakType;
        this.weight = weight;
        this.colour = colour;
        this.size = size;
    }

    public abstract fly : (type) => void;
    public abstract makeSound : (type) => void;

}