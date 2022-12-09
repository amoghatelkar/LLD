import { Bird } from "./abstract/bird";
import { IFlyable } from "./interfaces/flyable";
import { ISwimable } from "./interfaces/swimable";

export class Swan extends Bird implements ISwimable,IFlyable{
    public makeSound =  (type: any) => {
        console.log("swam makes sound")
    };
    swim(): void {
        console.log("Swan can swim");
    }
    fly(): void {
        console.log("Swan is flying");
    }
}