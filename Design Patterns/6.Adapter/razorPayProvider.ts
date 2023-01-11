import { RazorPayApi } from "./external/razorPayApi";
import { IPaymentProvider } from "./interfaces/paymentProvider";
import { PaymentStatus } from "./models/paymentStatus";
import { PaymentRequest } from "./models/paymentRequest";
import { RazorPayStatus } from "./external/razorPayStatus";

export class RazorPayProvider implements IPaymentProvider{

    private api:RazorPayApi = new RazorPayApi(); 
    createPayment(request: PaymentRequest): void {
        this.api.makePayment(request.getEmail(),request.getPhoneNumber());
    }

    verifyStatus(paymentId: string): PaymentStatus {
        const status:RazorPayStatus = this.api.checkStatus(paymentId);
        return this.toStatus(status);
    }

    toStatus(status:RazorPayStatus):PaymentStatus{
        if(status === RazorPayStatus.SUCCESS){
            return PaymentStatus.SUCCESS;
        }else {
            return PaymentStatus.ERROR;
        }
    }
}