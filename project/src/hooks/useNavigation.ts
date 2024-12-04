import { useState, useCallback } from 'react';

export type TabType = 'dashboard' | 'chat' | 'pricing';

export const useNavigation = (initialTab: TabType = 'chat') => {
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);

  const navigate = useCallback((tab: TabType) => {
    setActiveTab(tab);
  }, []);

  return {
    activeTab,
    navigate
  };
};