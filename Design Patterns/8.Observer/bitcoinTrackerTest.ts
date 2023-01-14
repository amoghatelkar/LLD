import { BitcoinTracker } from "./bitcoinTracker";
import { Bitcoin } from "./models/bitcoin";
import { EmailService } from "./models/emailService";
import { PhoneService } from "./models/phoneService";

export class BitcoinTrackerTest {

    private bitcoinTracker:BitcoinTracker;

    constructor(){
        this.bitcoinTracker = new BitcoinTracker(new Bitcoin.Builder().setValue(16000).build());
        this.bitcoinTracker.subscribe(new EmailService());
        this.bitcoinTracker.subscribe(new PhoneService());
    }

    testPriceChange(){
        this.bitcoinTracker.setPrice(17000);
    }
}

const bitcoinTrackerTest = new BitcoinTrackerTest();
bitcoinTrackerTest.testPriceChange();