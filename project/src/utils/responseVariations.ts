const responses = {
  help: [
    `I can assist you with:
📊 Product Analytics
- View metrics and KPIs
- Track performance
- Monitor user satisfaction

💡 Navigation
- "show dashboard" - View analytics
- "show pricing" - View plans
- "metrics" - Performance data

How can I help you today?`,
    `Here's what I can do for you:
🎯 Product Strategy
- Market analysis
- Competitor insights
- Feature recommendations

📈 Performance Tracking
- Sprint metrics
- User engagement
- Growth trends

What would you like to explore?`
  ],
  
  metrics: [
    "Looking at our latest metrics, I see strong performance in user engagement and feature adoption. Would you like to explore specific KPIs?",
    "Our dashboard shows interesting trends in sprint velocity and user satisfaction. Shall I show you the detailed breakdown?",
    "I notice some promising metrics in our latest analysis. Would you like to focus on user engagement, feature adoption, or sprint performance?"
  ],

  insights: [
    "Based on recent data:\n\n1. User engagement increased 25%\n2. Mobile usage is trending up\n3. New market opportunities in APAC\n\nWould you like to dive deeper into any of these areas?",
    "Here are our key insights:\n\n1. Feature adoption exceeds targets\n2. Customer satisfaction up 15%\n3. Emerging opportunity in enterprise segment\n\nWhich area interests you most?"
  ],

  greeting: [
    "Hello! I'm ARIA, your Product Intelligence Assistant. How can I help optimize your product strategy today?",
    "Hi there! I'm ARIA, ready to help with product analytics and insights. What would you like to explore?",
    "Welcome! I'm ARIA, your AI product management partner. How can I assist you today?"
  ],

  features: [
    "Our feature analysis shows strong adoption rates for recent launches. Would you like to see the metrics or explore upcoming features?",
    "I can help you evaluate feature performance and prioritize your roadmap. What specific aspect interests you?"
  ],

  market: [
    "Recent market analysis shows several opportunities for growth. Would you like to explore competitive positioning or market trends?",
    "I'm tracking interesting market movements in your sector. Shall we look at competitor analysis or growth opportunities?"
  ],

  default: [
    "I'm here to help with product strategy and analytics. Try asking about metrics, insights, or use 'help' to see all commands.",
    "Let me assist you with product management. You can ask about analytics, market insights, or type 'help' for more options."
  ]
};

export const getRandomResponse = (category: keyof typeof responses): string => {
  const categoryResponses = responses[category];
  const randomIndex = Math.floor(Math.random() * categoryResponses.length);
  return categoryResponses[randomIndex];
};