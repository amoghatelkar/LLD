import { CarNavigationStratergy } from "./carNavigationStratergy";
import { Navigator } from "./navigator";

export class NavigatorTest{

    private navigator:Navigator;

    constructor(){
        this.navigator = new Navigator(new CarNavigationStratergy());
    }

    testNavigator(){
        this.navigator.navigate('HSN','BNG');
    }
}

const navigatorTest:NavigatorTest = new NavigatorTest();
navigatorTest.testNavigator();