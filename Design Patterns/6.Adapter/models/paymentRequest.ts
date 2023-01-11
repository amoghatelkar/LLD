// Builder approach is used tp create the payment request
export class PaymentRequest {

    private phoneNumber:string;
    private email:string;
    private name:string;


    constructor(name:string,email:string,phoneNumber:string){
        this.email = email;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    static Builder = class {
        
        private phoneNumber:string;
        private email:string;
        private name:string;

        constructor(){
            this.phoneNumber = '';
            this.email = '';
            this.name = '';
        }

        setPhoneNumber(phoneNumber:string){
            this.phoneNumber = phoneNumber;
            return this;
        }
    
        setEmail(email:string){
            this.email = email;
            return this;
        }
    
        setName(name:string){
            this.name = name;
            return this;
        }

        build(){
            const paymentRequest = new PaymentRequest(this.name,this.email,this.phoneNumber);
            return paymentRequest;
        }

    }    

    getEmail(){
        return this.email;
    }

    getPhoneNumber(){
        return this.phoneNumber;
    }

    getName(){
        return this.name;
    }


}