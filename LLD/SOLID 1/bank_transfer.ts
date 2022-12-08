
interface IAccount{
    id:number;
    name:string;
    balance:number;
}

let accounts:Array<IAccount> = [];


const transfer = (source:number,destination:number,amount:number) => {
    //Step 1 - Get source account
    let source_account = get_account(source);
    
    //Step 2 - Update source account
    update_account(source_account,-amount);

    //Step 3 - Get destination account
    let dest_account = get_account(destination);

    //Step 4 - Update source account
    update_account(dest_account,amount);

}

const get_account = (id:number) => {
    return accounts.filter(account => account.id === id)[0];
}

const update_account = (account:IAccount,delta:number) => {
    account['balance'] += delta;
}

const main = () => {

    accounts.push({id:1,name:"Alice",balance:1000});
    accounts.push({id:2,name:"Bob",balance:500});

    transfer(1,2,1000);

    console.log(accounts);
}
export default main();