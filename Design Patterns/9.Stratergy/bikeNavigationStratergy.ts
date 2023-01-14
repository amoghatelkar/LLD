import { INavigationStratergy } from "./interfaces/navigationStratergy";

// Step 2 Concrete Stratergies
export class BikeNavigationStratergy implements INavigationStratergy{

    navigate(from: string, to: string): void {
        console.log(`Driving by bike from : ${from} to : ${to}`);
    }
    
}