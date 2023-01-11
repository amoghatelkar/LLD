import { RazorPayStatus } from "./razorPayStatus";

// Step 1 Incompatible interfaces
export class RazorPayApi{

    public makePayment(email:string,phone:string){
        console.log("Making payment via razorpay");
    }

    public checkStatus(paymentId:string):RazorPayStatus{
        return RazorPayStatus.SUCCESS;
    }
}