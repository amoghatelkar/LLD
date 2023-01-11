import { PaymentRequest } from "../models/paymentRequest";
import { PaymentStatus } from "../models/paymentStatus";

export interface  IPaymentProvider{

    createPayment(request:PaymentRequest):void;

    verifyStatus(paymentId:string): PaymentStatus;
}