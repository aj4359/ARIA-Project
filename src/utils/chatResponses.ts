interface ResponseTemplate {
  keywords: string[];
  response: string;
}

const responseTemplates: ResponseTemplate[] = [
  {
    keywords: ['metrics', 'performance', 'numbers'],
    response: "I notice you're interested in performance metrics. Let me highlight our key indicators:\n\n" +
      "🚀 Sprint Velocity: 24 points (↑12%)\n" +
      "😊 User Satisfaction: 4.8/5.0 (↑0.3)\n" +
      "📈 Feature Adoption: 78% (↑5%)\n\n" +
      "Would you like me to analyze any specific metric in detail?"
  },
  {
    keywords: ['insights', 'recommendations', 'suggest'],
    response: "Based on current data, here are key insights:\n\n" +
      "1. Market Opportunity: APAC region shows 40% growth potential\n" +
      "2. Technical Alert: Backend services need attention\n" +
      "3. User Trends: Mobile usage up by 65%\n\n" +
      "Which area would you like to explore further?"
  },
  {
    keywords: ['risk', 'risks', 'problems', 'issues'],
    response: "I've identified these key risk areas:\n\n" +
      "🔴 Technical Debt in Backend Services\n" +
      "🟡 API Response Times\n" +
      "🟡 Resource Utilization\n\n" +
      "Would you like a detailed analysis of any of these risks?"
  },
  {
    keywords: ['pricing', 'subscription', 'plan', 'cost'],
    response: "Let me explain our subscription plans:\n\n" +
      "🚀 Starter ($49/month)\n" +
      "- Basic Product Analytics\n" +
      "- Market Trend Analysis\n" +
      "- Chat Support\n\n" +
      "💼 Professional ($99/month)\n" +
      "- Advanced Analytics\n" +
      "- Custom Dashboards\n" +
      "- Priority Support\n\n" +
      "🏢 Enterprise ($299/month)\n" +
      "- Custom AI Training\n" +
      "- Dedicated Support\n" +
      "- Advanced Security\n\n" +
      "Would you like to learn more about any specific plan?"
  },
  {
    keywords: ['help', 'guide', 'tutorial'],
    response: "I'm here to help! Here's what I can do:\n\n" +
      "📊 Show product metrics and analytics\n" +
      "🎯 Provide market insights and recommendations\n" +
      "⚠️ Identify potential risks and issues\n" +
      "💡 Generate custom reports\n" +
      "💰 Explain pricing and subscription options\n\n" +
      "What would you like to explore first?"
  }
];

export const generateResponse = (userInput: string): string => {
  const input = userInput.toLowerCase();
  
  for (const template of responseTemplates) {
    if (template.keywords.some(keyword => input.includes(keyword))) {
      return template.response;
    }
  }
  
  return "I understand you're interested in product management. I can help with:\n\n" +
    "- Product metrics and performance\n" +
    "- Market insights and trends\n" +
    "- Risk analysis\n" +
    "- Pricing information\n\n" +
    "What specific area would you like to explore?";
};