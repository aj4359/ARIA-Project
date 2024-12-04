import React, { createContext, useContext } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';
import { UserEvent } from '../types/analytics';

interface AnalyticsContextType {
  trackEvent: (type: UserEvent['type'], name: string, properties?: Record<string, any>) => void;
  events: UserEvent[];
  isTracking: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const analytics = useAnalytics();

  return (
    <AnalyticsContext.Provider value={analytics}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalyticsContext = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider');
  }
  return context;
};