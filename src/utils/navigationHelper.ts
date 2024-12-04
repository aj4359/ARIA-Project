import { Message } from '../types/chat';

export const generateNavigationResponse = (userInput: string): string => {
  const input = userInput.toLowerCase();
  
  if (input.includes('show') || input.includes('view') || input.includes('go to')) {
    if (input.includes('dashboard')) {
      return "I'll switch to the dashboard view for you. You can see your product metrics and insights there.";
    }
    if (input.includes('chat')) {
      return "I'll open the chat interface where we can discuss your product management needs in detail.";
    }
  }
  
  if (input.includes('help') || input.includes('guide')) {
    return `I can help you navigate the platform:
- Say "show dashboard" to view product metrics and insights
- Say "show chat" to have a conversation with me
- Ask about "metrics" to see performance data
- Ask about "insights" to view current recommendations
- Need specific analysis? Just ask about market trends, risks, or opportunities`;
  }

  return null;
};