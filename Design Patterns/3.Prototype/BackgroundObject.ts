import { BackgroundObjectType } from "./BackgroundObjectType";
import { IGraphicalObject } from "./ObjectClonable";

//Step 2 create a concrete class

export class BackgroundObject implements IGraphicalObject {

    private x:number;
    private y:number;
    private width:number;
    private height:number;
    private type:BackgroundObjectType;

    constructor(x:number,y:number,width:number,height:number,type:BackgroundObjectType){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.type = type;
    }

    //Step 2.5 Implement the clone method 
    clone = () => {
        return new BackgroundObject(this.x,this.y,this.width,this.height,this.type);
    }

    setX = (x:number) => this.x = x;
    setY = (y:number) => this.y = y;
    setWidth = (width:number) => this.width = width;
    setHeight = (height:number) => this.height = height;
    setType = (type:BackgroundObjectType) => this.type = type; 

    getAll = () => { return `x:${this.x}
    y:${this.y}
    width:${this.width}
    height:${this.height}
    type:${this.type}
    `}

    

}