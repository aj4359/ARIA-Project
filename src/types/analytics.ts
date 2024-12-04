export interface UserEvent {
  id: string;
  type: 'page_view' | 'feature_usage' | 'conversion' | 'error' | 'custom';
  name: string;
  timestamp: Date;
  properties: Record<string, any>;
  userId?: string;
  sessionId: string;
}

export interface AnalyticsState {
  events: UserEvent[];
  isTracking: boolean;
  sessionId: string;
}

export interface FunnelStep {
  name: string;
  count: number;
  conversionRate: number;
}

export interface ABTest {
  id: string;
  name: string;
  variants: {
    id: string;
    name: string;
    traffic: number;
    conversions: number;
  }[];
  startDate: Date;
  endDate?: Date;
  status: 'running' | 'completed' | 'stopped';
}