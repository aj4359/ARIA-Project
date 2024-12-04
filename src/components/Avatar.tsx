import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const Avatar: React.FC = () => {
  return (
    <motion.div
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-purple-600 rounded-full p-4 shadow-lg"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Brain className="w-8 h-8 text-white" />
    </motion.div>
  );
};

export default Avatar;