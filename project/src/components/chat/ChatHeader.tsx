import React from 'react';
import { Trash2 } from 'lucide-react';

interface ChatHeaderProps {
  onClear: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClear }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-gray-900">Chat with ARIA</h2>
      <button
        onClick={onClear}
        className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:text-red-600 transition-colors"
      >
        <Trash2 className="w-4 h-4" />
        Clear Chat
      </button>
    </div>
  );
};

export default ChatHeader;