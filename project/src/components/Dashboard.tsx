import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target } from 'lucide-react';

const metrics = [
  {
    label: 'Sprint Velocity',
    value: '24 points',
    trend: '+12%',
    icon: TrendingUp,
    color: 'text-green-600'
  },
  {
    label: 'User Satisfaction',
    value: '4.8/5.0',
    trend: '+0.3',
    icon: Users,
    color: 'text-blue-600'
  },
  {
    label: 'Feature Adoption',
    value: '78%',
    trend: '+5%',
    icon: Target,
    color: 'text-purple-600'
  }
];

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-8 h-8 ${metric.color}`} />
                <span className="text-green-600 text-sm">{metric.trend}</span>
              </div>
              <h3 className="text-gray-600 text-sm">{metric.label}</h3>
              <p className="text-2xl font-bold mt-1">{metric.value}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;