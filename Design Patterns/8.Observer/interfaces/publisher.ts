import { IObserver } from "./observer";

// Step 1 Create interface of object of interest
export abstract class Publisher{    

    private observers:Array<IObserver> = new Array<IObserver>();

    publish(): void {
        this.observers.map(observer => observer.consume());
    }

    subscribe(observer: IObserver): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: IObserver): void {
        let tempObservers = this.observers.filter((_observer) => _observer !== observer);
        this.observers = tempObservers;
    }

}