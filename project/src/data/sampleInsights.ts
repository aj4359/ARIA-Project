import { ProductInsight } from '../types/productManager';

export const sampleInsights: ProductInsight[] = [
  {
    type: 'opportunity',
    title: 'Market Expansion Potential',
    description: 'Analysis indicates a 40% growth opportunity in the APAC region for Q3 2024.',
    impact: 'high',
    confidence: 0.87
  },
  {
    type: 'risk',
    title: 'Technical Debt Alert',
    description: 'Current sprint velocity suggests increasing technical debt in the backend services.',
    impact: 'medium',
    confidence: 0.92
  },
  {
    type: 'trend',
    title: 'User Behavior Shift',
    description: 'Mobile usage has increased by 65% in the last quarter.',
    impact: 'high',
    confidence: 0.95
  },
  {
    type: 'recommendation',
    title: 'Feature Prioritization',
    description: 'Based on user feedback and market analysis, implementing SSO should be prioritized for Q2.',
    impact: 'high',
    confidence: 0.89
  }
];