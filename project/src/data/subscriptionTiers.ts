import { SubscriptionTier } from '../types/subscription';

export const subscriptionTiers: SubscriptionTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 49,
    billingPeriod: 'monthly',
    features: [
      'Basic Product Analytics',
      'Market Trend Analysis',
      'Chat Support with ARIA',
      'Basic Reporting'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 99,
    billingPeriod: 'monthly',
    features: [
      'Advanced Analytics',
      'Custom Dashboards',
      'Priority ARIA Support',
      'Team Collaboration',
      'API Access',
      'Advanced Reporting'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 299,
    billingPeriod: 'monthly',
    features: [
      'Custom AI Training',
      'Dedicated Support',
      'White-label Options',
      'Advanced Security',
      'Custom Integrations',
      'Unlimited Team Members'
    ]
  }
];