import React from 'react';
import { Message } from '../types/chat';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto space-y-4 mb-4">
      {messages.map((message) => (
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[80%] p-4 rounded-lg ${
              message.role === 'user'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            <ReactMarkdown className="prose prose-sm">
              {message.content}
            </ReactMarkdown>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MessageList;