import { BackgroundObject } from "./BackgroundObject"
import { BackgroundObjectType } from "./BackgroundObjectType"

export class BackgroundRegistry{

    private registry:Map<BackgroundObjectType,BackgroundObject> = new Map();

    store(type:BackgroundObjectType,backgroundObject:BackgroundObject){
        this.registry.set(type,backgroundObject);
    }

    get = (type:BackgroundObjectType) : BackgroundObject | undefined =>{
        return this.registry.get(type);
    }

    delete  = () : void => {
        return this.registry.clear();
    }

}