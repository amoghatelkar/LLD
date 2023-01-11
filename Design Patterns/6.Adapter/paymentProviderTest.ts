import { IPaymentProvider } from "./interfaces/paymentProvider";
import { PaymentRequest } from "./models/paymentRequest";
import { RazorPayProvider } from "./razorPayProvider";
import { StripeProvider } from "./stripeProvider";

export class PaymentProviderTest{

    private provider:IPaymentProvider;

    constructor(type:RazorPayProvider|StripeProvider){
        this.provider = type;
    }

    testPayment(){
        console.assert(this.provider instanceof RazorPayProvider,"If razorpay is used, instance should be of razorpay provider");
        console.assert(this.provider instanceof StripeProvider,"If stripe is used, instance should be of stripe provider");
        const paymentRequest = new PaymentRequest.Builder().setEmail("amogh@mail.com").setPhoneNumber('1234567').setName("Amogh").build();
        this.provider.createPayment(paymentRequest);
    }
}

const paymentProviderTest:PaymentProviderTest = new PaymentProviderTest(new StripeProvider());
paymentProviderTest.testPayment();
