import { INavigationStratergy } from "./interfaces/navigationStratergy";

// Step 3 Create context
// 1. Maintain the reference of stratergy - Composition
// 2. Delegate method call to stratergy
export class Navigator{

    private stratergy:INavigationStratergy;

    constructor(stratergy:INavigationStratergy){
        this.stratergy = stratergy;
    }

    navigate(from:string,to:string):void{
        this.stratergy.navigate(from,to);
    }
}