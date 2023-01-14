import { INavigationStratergy } from "./interfaces/navigationStratergy";

export class CarNavigationStratergy implements INavigationStratergy{

    navigate(from: string, to: string): void {
        console.log(`Driving by car from : ${from} to: ${to}`);
    }
    
}