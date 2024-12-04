export interface ProductInsight {
  type: 'risk' | 'opportunity' | 'trend' | 'recommendation';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  confidence: number;
}

export interface QuickAction {
  id: string;
  label: string;
  description: string;
  icon: string;
}