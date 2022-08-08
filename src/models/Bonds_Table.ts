export interface Bonds {
    securityId: number;
    securityName: string;
    securityDescription: string;
    couponRate: number;
    isCallable: boolean;
    maturityDate: string;
    penultimateCouponDate: string;
    pfCreditRating: string;
    askPrice: number;
    bidPrice: number;
    isActive: boolean;
    Action: string;
  }