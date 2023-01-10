export abstract class Button{

    private id:string;
    abstract onClick():void;
    abstract render():void;

    constructor(id:string){
        this.id = id;
    }

}