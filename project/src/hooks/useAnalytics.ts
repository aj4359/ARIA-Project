import { useState, useCallback, useEffect } from 'react';
import { UserEvent, AnalyticsState } from '../types/analytics';

const generateSessionId = () => Math.random().toString(36).substring(2);

export const useAnalytics = () => {
  const [state, setState] = useState<AnalyticsState>({
    events: [],
    isTracking: true,
    sessionId: generateSessionId(),
  });

  const trackEvent = useCallback((
    type: UserEvent['type'],
    name: string,
    properties: Record<string, any> = {}
  ) => {
    const event: UserEvent = {
      id: Math.random().toString(36).substring(2),
      type,
      name,
      timestamp: new Date(),
      properties,
      sessionId: state.sessionId,
    };

    setState(prev => ({
      ...prev,
      events: [...prev.events, event],
    }));

    // In a real app, we would send this to a backend
    console.log('Tracked event:', event);
  }, [state.sessionId]);

  useEffect(() => {
    trackEvent('page_view', 'app_loaded');
  }, [trackEvent]);

  return {
    trackEvent,
    events: state.events,
    isTracking: state.isTracking,
  };
};