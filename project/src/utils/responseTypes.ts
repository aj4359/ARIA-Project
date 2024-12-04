export type ResponseCategory = 
  | 'product'
  | 'metrics'
  | 'features'
  | 'insights'
  | 'help'
  | 'navigation'
  | 'default';

export interface Response {
  text: string;
  actions?: {
    type: 'navigate' | 'showMetrics' | 'showInsights';
    payload?: string;
  }[];
}