import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SubscriptionTier } from '../types/subscription';

interface PricingCardProps {
  tier: SubscriptionTier;
  onSelect: (tierId: string) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6 flex flex-col"
    >
      <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
      <div className="mt-4 flex items-baseline">
        <span className="text-3xl font-bold">${tier.price}</span>
        <span className="ml-2 text-gray-600">/{tier.billingPeriod}</span>
      </div>
      <ul className="mt-6 space-y-4 flex-1">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-green-500 mr-2" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => onSelect(tier.id)}
        className="mt-8 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Get Started
      </button>
    </motion.div>
  );
};

export default PricingCard;