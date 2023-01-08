import { BackgroundObject } from "./BackgroundObject"
import { BackgroundObjectType } from "./BackgroundObjectType";

export class GraphicalObjectTest{

    testCloneableObject = () => {

        // Step 3 Create  prototype
        const prototype : BackgroundObject = new BackgroundObject(0,0,0,0,BackgroundObjectType.TREE);

        //Step 4 Clone the prototype to create a forest
        const clone : BackgroundObject = prototype.clone();
        clone.setX(2);
        clone.setY(3);
        clone.setHeight(250);
        clone.setType(BackgroundObjectType.MOUNTAIN);

        //prints prototype(first) object     
        console.log(prototype.getAll());

        //prinst cloned object
        console.log(clone.getAll());

        //Creating a forest
        const forest:Array<BackgroundObject> = new Array();

        for(let i=0;i<10;i++){
            const treeClone: BackgroundObject = prototype.clone();
            treeClone.setX(Math.random());
            treeClone.setY(Math.random());
            forest.push(treeClone);
        }
        console.log("Printing the trees in the forest");
        for(let i=0;i<forest.length;i++){
            console.log(`Tree Number : ${i}`);
            console.log(forest[i].getAll());
        }

    }

}

const graphicalObjectTest : GraphicalObjectTest = new GraphicalObjectTest();
graphicalObjectTest.testCloneableObject();