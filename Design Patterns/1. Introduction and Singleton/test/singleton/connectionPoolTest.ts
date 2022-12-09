import { ConnectionPool } from "../../singleton/connectionPool"

class ConnectionPoolTest {

    public testSingleton(){
        const connectionPoolInstance1:ConnectionPool = ConnectionPool.getInstance();
        const connectionPoolInstance2:ConnectionPool = ConnectionPool.getInstance();

        if(connectionPoolInstance1 === connectionPoolInstance2){
            console.log('Singleton works, both variables contain the same instance.');
        }else{
            console.log('Singleton failed, variables contain different instances.');
        }

    }

}

const main = () => {
    const c:ConnectionPoolTest =  new ConnectionPoolTest();
    c.testSingleton();
}

export default main();