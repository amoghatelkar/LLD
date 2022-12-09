export class ConnectionPool {

    //Step 3 - Global Instance variable 
    //lazy loading;
    //private static instance:ConnectionPool;

    //Eager creation 
    private static instance:ConnectionPool = new ConnectionPool();

    //Step 1 - Hide the constructor
    private constructor(){}

    //Step 2 - Global Access point
    public static getInstance(){

        // lazy loading
        // if(this.instance === null)
        //     this.instance = new ConnectionPool();
        
        //eager creation
        return this.instance;
        
    }
}