class Account{
    
    id:number;
    name:string;
    balance:number;

    constructor(name:string,balance:number,id:number){
        this.name  = name;
        this.balance = balance;
        this.id = id;
    }

    debit(amount:number){
        this.balance += amount;
    }

    credit(amount:number){
        this.balance -= amount;
    }
    
    transfer(destination:Account, amount:number ){
        this.debit(amount);
        destination.credit(amount);
    }

}

const main = () => {

    const alice = new Account("Alice",1000,1);
    const bob = new Account("Bob",2000,2);

    alice.transfer(bob,500);

    console.log(alice,bob);
} 

export default main();