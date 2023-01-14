// class with builder pattern
export class Bitcoin{
    
    private value:number;   

    private constructor(value:number){
        this.value = value;
    }

    static Builder = class {

        private value:number;

        constructor(){
            this.value = 0;
        }

        setValue(value:number){
            this.value = value;
            return this;
        }

        build(){
            const bitcoin = new Bitcoin(this.value);
            return bitcoin;
        }
    }

    public getValue(){
        return this.value; 
    }
}