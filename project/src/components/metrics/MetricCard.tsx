import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string;
  trend: string;
  icon: LucideIcon;
  index: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, trend, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-4 rounded-lg shadow-md"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-xl font-bold">{value}</p>
        </div>
        <Icon className="w-8 h-8 text-purple-600" />
      </div>
      <p className="text-sm text-green-600 mt-2">
        {trend} vs last sprint
      </p>
    </motion.div>
  );
};

export default MetricCard;