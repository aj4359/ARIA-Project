import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { Message } from '../types/chat';
import MessageList from './MessageList';
import { generateNavigationResponse } from '../utils/navigationHelper';
import { generateResponse } from '../utils/chatResponses';

const INITIAL_MESSAGES: Message[] = [{
  id: '1',
  content: "Hello! I'm ARIA, your Product Management Intelligence Assistant. I can help you navigate the platform and provide insights. Try asking me to 'show dashboard' or say 'help' for guidance!",
  role: 'assistant',
  timestamp: new Date()
}];

interface ChatProps {
  onNavigate?: (view: 'dashboard' | 'chat') => void;
}

const Chat: React.FC<ChatProps> = ({ onNavigate }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const simulateResponse = (userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const navigationResponse = generateNavigationResponse(userMessage);
      const chatResponse = generateResponse(userMessage);
      let response = navigationResponse || chatResponse;

      if (!response) {
        response = "I understand you're interested in product management insights. Could you specify which area you'd like to focus on? Try asking about:\n\n" +
          "- Product Metrics\n" +
          "- Market Insights\n" +
          "- Risk Analysis\n" +
          "- Feature Recommendations";
      }

      if (navigationResponse && onNavigate) {
        if (userMessage.toLowerCase().includes('dashboard')) {
          onNavigate('dashboard');
        } else if (userMessage.toLowerCase().includes('chat')) {
          onNavigate('chat');
        }
      }

      const newMessage: Message = {
        id: Date.now().toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
    simulateResponse(input);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] max-w-4xl mx-auto p-4">
      <MessageList messages={messages} />
      {isTyping && (
        <div className="text-sm text-gray-500 ml-4 mb-2">
          ARIA is thinking...
        </div>
      )}
      <div ref={bottomRef} />
      <form onSubmit={handleSubmit} className="mt-auto">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask ARIA about product management..."
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;