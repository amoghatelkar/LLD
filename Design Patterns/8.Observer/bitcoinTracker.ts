import { IObserver } from "./interfaces/observer";
import { Publisher } from "./interfaces/publisher";
import { Bitcoin } from "./models/bitcoin";

// Step 3 - Add Concrete publishers
export class BitcoinTracker extends Publisher { 

    private bitcoin:Bitcoin;

    constructor(_bitcoin:Bitcoin){
        super();
        this.bitcoin = _bitcoin;
    }
    

    setPrice(value:number):void{

        const _bitcoin = new Bitcoin.Builder().setValue(value).build();  
        this.bitcoin = _bitcoin;
        this.publish();
    }

}