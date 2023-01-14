import { IObserver } from "../interfaces/observer";

export class EmailService implements IObserver{

    consume(): void {
        console.log(`Sending Email`);
    } 
}