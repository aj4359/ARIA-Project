export interface SubscriptionTier {
  id: string;
  name: string;
  price: number;
  features: string[];
  billingPeriod: 'monthly' | 'annual';
}

export interface PaymentState {
  isProcessing: boolean;
  error: string | null;
  success: boolean;
}