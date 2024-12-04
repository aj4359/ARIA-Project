import { useCallback } from 'react';
import { useAnalyticsContext } from '../context/AnalyticsContext';
import { FunnelStep } from '../types/analytics';

export const useFunnelAnalysis = (funnelId: string) => {
  const { trackEvent } = useAnalyticsContext();

  const trackFunnelStep = useCallback((
    stepName: string,
    properties: Record<string, any> = {}
  ) => {
    trackEvent('custom', `funnel_step_${funnelId}`, {
      stepName,
      funnelId,
      ...properties
    });
  }, [funnelId, trackEvent]);

  return {
    trackFunnelStep
  };
};