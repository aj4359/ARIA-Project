import { useState, useCallback } from 'react';
import { Message } from '../types/chat';
import { generateNavigationResponse } from '../utils/navigationHelper';
import { generateResponse } from '../utils/chatResponses';
import { TabType } from './useNavigation';

export const useChatState = (initialMessages: Message[], onNavigate?: (view: TabType) => void) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);

  const handleNavigation = useCallback((input: string) => {
    if (input.includes('dashboard')) {
      onNavigate?.('dashboard');
    } else if (input.includes('pricing')) {
      onNavigate?.('pricing');
    }
  }, [onNavigate]);

  const simulateResponse = useCallback((userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      handleNavigation(userMessage.toLowerCase());
      
      const response = generateNavigationResponse(userMessage) || 
                      generateResponse(userMessage);

      const newMessage: Message = {
        id: Date.now().toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 800);
  }, [handleNavigation]);

  const handleSendMessage = useCallback((content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    simulateResponse(content);
  }, [simulateResponse]);

  const clearChat = useCallback(() => {
    setMessages(initialMessages);
  }, [initialMessages]);

  return {
    messages,
    isTyping,
    handleSendMessage,
    clearChat
  };
};