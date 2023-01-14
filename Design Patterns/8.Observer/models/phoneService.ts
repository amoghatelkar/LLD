import { IObserver } from "../interfaces/observer";

export class PhoneService implements IObserver{

    consume(): void {
        console.log(`Sending Text`);
    } 
}