import { BackgroundObject } from "./BackgroundObject"
import { BackgroundObjectType } from "./BackgroundObjectType";
import { BackgroundRegistry } from "./BackgroundRegistry";

export class GraphicalObjectTest{

    private registry:BackgroundRegistry;

    constructor(){
        this.registry = new BackgroundRegistry();
    }

    setUp = () => {


        // Setting up registery with each object type
        const treeProto:BackgroundObject = new BackgroundObject(0,0,0,0,BackgroundObjectType.TREE);
        this.registry.store(BackgroundObjectType.TREE,treeProto);

        const buildingProto:BackgroundObject = new BackgroundObject(0,0,0,0,BackgroundObjectType.BUILDING);
        this.registry.store(BackgroundObjectType.BUILDING,buildingProto);

        const mountainProto:BackgroundObject = new BackgroundObject(0,0,0,0,BackgroundObjectType.MOUNTAIN);
        this.registry.store(BackgroundObjectType.MOUNTAIN,mountainProto);
        
    }

    tearDown = () => {
        this.registry.delete();
    }

    testPrototypeWithRegistry = () => {

        // Create a Prototype
        const prototype:BackgroundObject | undefined = this.registry.get(BackgroundObjectType.TREE);

        const clone:BackgroundObject |undefined = prototype?.clone();

        clone?.setX(9);
        clone?.setY(10);

        //prints prototype(first) object     
        console.log(prototype?.getAll());

        //prinst cloned object
        console.log(clone?.getAll());


    }

}

const graphicalObjectTest : GraphicalObjectTest = new GraphicalObjectTest();
graphicalObjectTest.setUp();
graphicalObjectTest.testPrototypeWithRegistry();
graphicalObjectTest.tearDown();