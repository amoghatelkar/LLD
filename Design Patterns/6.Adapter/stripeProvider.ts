import { StripeApi } from "./external/stripeApi";
import { StripeStatus } from "./external/stripeStatus";
import { IPaymentProvider } from "./interfaces/paymentProvider";
import { PaymentRequest } from "./models/paymentRequest";
import { PaymentStatus } from "./models/paymentStatus";

export class StripeProvider implements IPaymentProvider{

    private api:StripeApi = new StripeApi(); 

    createPayment(request: PaymentRequest): void {
        this.api.pay(request.getEmail());
    }

    verifyStatus(paymentId: string): PaymentStatus {
        const status:StripeStatus = this.api.checkStatus(paymentId);
        return this.toStatus(status);
    }

    toStatus(status:StripeStatus):PaymentStatus{
        if(status === StripeStatus.OK){
            return PaymentStatus.SUCCESS;
        }else {
            return PaymentStatus.ERROR;
        }
    }

}