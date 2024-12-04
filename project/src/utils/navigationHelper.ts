export const generateNavigationResponse = (userInput: string): string | null => {
  const input = userInput.toLowerCase();
  
  if (input.includes('dashboard')) {
    return "📊 Opening the dashboard to show you the latest metrics and insights.";
  }
  
  if (input.includes('chat')) {
    return "💬 Returning to our conversation.";
  }
  
  if (input.includes('pricing')) {
    return "💰 Showing you our subscription plans.";
  }
  
  return null;
};