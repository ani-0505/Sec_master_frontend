export interface Equities {
    securityId: number;
    securityName: string;
    securityDescription: string;
    totalSharesOutstanding: number;
    priceCurrency: string;
    openPrice: number;
    ClosePrice: number;
    declaredDate: string;
    pfCreditRating: string;
    isActive: boolean;
    Action: string;
  }