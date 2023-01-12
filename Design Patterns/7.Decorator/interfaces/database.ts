export interface IDatabase{
    read():string;
    write(value:string):void;
}