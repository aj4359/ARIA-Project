import React from 'react';
import { useFunnelAnalysis } from '../hooks/useFunnelAnalysis';
import { motion } from 'framer-motion';

interface FunnelStep {
  name: string;
  count: number;
  conversionRate: number;
}

interface FunnelAnalyticsProps {
  steps: FunnelStep[];
}

export const FunnelAnalytics: React.FC<FunnelAnalyticsProps> = ({ steps }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Conversion Funnel</h3>
      <div className="space-y-2">
        {steps.map((step, index) => (
          <motion.div
            key={step.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-4 rounded-lg shadow"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{step.name}</span>
              <div className="text-sm text-gray-600">
                <span className="mr-4">{step.count} users</span>
                <span className="text-green-600">{(step.conversionRate * 100).toFixed(1)}%</span>
              </div>
            </div>
            <div className="mt-2 bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${step.conversionRate * 100}%` }}
                className="bg-purple-600 h-2 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};