import { StripeStatus } from "./stripeStatus";

export class StripeApi{

    public pay(email:string){
        console.log("Making payment via stripe");
    }

    public checkStatus(paymentId:string):StripeStatus{
        return StripeStatus.OK;
    }
}