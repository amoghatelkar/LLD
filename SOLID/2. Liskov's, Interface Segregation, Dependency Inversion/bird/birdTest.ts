import { Bird } from "./abstract/bird";
import { FlyableBird } from "./abstract/flyableBird";
import { IFlyable } from "./interfaces/flyable";
import { Parrot } from "./parrot";
import { Penguin } from "./penguin";
import { Sparrow } from "./sparrow";
import { FlappingBehaviour } from "./stratergy/flappingBehaviour";

export class BirdTest {

    public testReleaseBird = () => {
        let birds : Array<IFlyable> = Array.of(new Sparrow(0,'',0,'',new FlappingBehaviour()),new Parrot(0,'',0,''));
        this.releaseAll(birds);
    }

    public releaseAll = (birds: Array<IFlyable>) => {
        birds.forEach(bird => bird.fly());
    } 


}
