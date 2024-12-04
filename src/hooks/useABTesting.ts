import { useState, useCallback } from 'react';
import { ABTest } from '../types/analytics';
import { useAnalyticsContext } from '../context/AnalyticsContext';

export const useABTesting = (testId: string) => {
  const { trackEvent } = useAnalyticsContext();
  const [activeVariant, setActiveVariant] = useState<string>(() => {
    // Simple random variant assignment
    return Math.random() > 0.5 ? 'A' : 'B';
  });

  const trackConversion = useCallback(() => {
    trackEvent('conversion', `ab_test_${testId}`, {
      variant: activeVariant,
      testId
    });
  }, [activeVariant, testId, trackEvent]);

  return {
    variant: activeVariant,
    trackConversion
  };
};