import React, { useState, useEffect } from 'react';
import { sampleInsights } from '../data/sampleInsights';
import InsightCard from './InsightCard';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Target, Users } from 'lucide-react';
import { useAnalyticsContext } from '../context/AnalyticsContext';
import { FunnelAnalytics } from './FunnelAnalytics';
import { ABTestingExample } from './ABTestingExample';
type Insight = {
  id: string;
  title: string;
  value: number;
  trend: string;
};

const Dashboard: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { trackEvent } = useAnalyticsContext();
  const [filteredInsights, setFilteredInsights] = useState<Insight[]>(sampleInsights);

  const metrics = [
    { label: 'Sprint Velocity', value: '24 points', trend: '+12%', icon: TrendingUp },
    { label: 'User Satisfaction', value: '4.8/5.0', trend: '+0.3', icon: Users },
    { label: 'Feature Adoption', value: '78%', trend: '+5%', icon: Target },
  ];

  const funnelSteps = [
    { name: 'Visit', count: 1000, conversionRate: 1 },
    { name: 'Sign Up', count: 750, conversionRate: 0.75 },
    { name: 'Product View', count: 500, conversionRate: 0.5 },
    { name: 'Trial', count: 250, conversionRate: 0.25 },
    { name: 'Purchase', count: 100, conversionRate: 0.1 },
  ];

  useEffect(() => {
    trackEvent('page_view', 'dashboard_viewed');
  }, [trackEvent]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    const newFilteredInsights = sampleInsights.filter((insight) => {
      if (filter === 'all') return true;
      return insight.type === filter;
    });
    setFilteredInsights(newFilteredInsights);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Brain className="w-6 h-6 text-purple-600" />
            Product Intelligence Dashboard
          </h1>
          <p className="text-gray-600">Real-time insights and recommendations</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{metric.label}</p>
                <p className="text-xl font-bold">{metric.value}</p>
              </div>
              <metric.icon className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-sm text-green-600 mt-2">
              {metric.trend} vs last sprint
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <FunnelAnalytics steps={funnelSteps} />
        
        <ABTestingExample
          testId="cta_test"
          variantA={
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Variant A</h3>
              <button className="bg-purple-600 text-white px-4 py-2 rounded">
                Start Free Trial
              </button>
            </div>
          }
          variantB={
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Variant B</h3>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Try Now - Free
              </button>
            </div>
          }
        />
      </div>

      <div className="flex gap-2 mb-4">
        {['all', 'opportunity', 'risk', 'trend', 'recommendation'].map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterChange(filter)}
            className={`px-3 py-1 rounded-full text-sm ${
              activeFilter === filter
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredInsights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <InsightCard insight={insight} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;