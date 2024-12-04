import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, Lightbulb, BarChart } from 'lucide-react';
import { ProductInsight } from '../types/productManager';

const iconMap = {
  opportunity: Lightbulb,
  risk: AlertTriangle,
  trend: TrendingUp,
  recommendation: BarChart,
};

interface InsightCardProps {
  insight: ProductInsight;
}

const InsightCard: React.FC<InsightCardProps> = ({ insight }) => {
  const Icon = iconMap[insight.type];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-4 border-l-4 hover:shadow-lg transition-shadow"
      style={{
        borderLeftColor: insight.type === 'risk' ? '#ef4444' : 
          insight.type === 'opportunity' ? '#10b981' : 
          insight.type === 'trend' ? '#6366f1' : '#8b5cf6'
      }}
    >
      <div className="flex items-start gap-3">
        <div className="rounded-full p-2 bg-gray-100">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{insight.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className={`text-xs px-2 py-1 rounded-full ${
              insight.impact === 'high' ? 'bg-red-100 text-red-800' :
              insight.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              {insight.impact.toUpperCase()} IMPACT
            </span>
            <span className="text-xs text-gray-500">
              {(insight.confidence * 100).toFixed(0)}% confidence
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;