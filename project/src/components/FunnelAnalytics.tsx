import React from 'react';
import { motion } from 'framer-motion';

interface FunnelStep {
  name: string;
  count: number;
  conversionRate: number;
}

interface FunnelAnalyticsProps {
  steps: FunnelStep[];
}

const FunnelAnalytics: React.FC<FunnelAnalyticsProps> = ({ steps }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Conversion Funnel</h3>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium">{step.name}</span>
              <div className="text-sm">
                <span className="mr-2">{step.count.toLocaleString()} users</span>
                <span className="text-green-600">
                  {(step.conversionRate * 100).toFixed(1)}%
                </span>
              </div>
            </div>
            <div className="bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${step.conversionRate * 100}%` }}
                className="bg-purple-600 h-2 rounded-full"
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FunnelAnalytics;