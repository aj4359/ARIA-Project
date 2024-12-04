const responses = {
  help: `I can help with:
• Metrics - Type 'metrics'
• Roadmaps - Try 'roadmap'
• Features - Use 'features'
• Demo - Type 'demo'`,

  metrics: `📈 Latest Metrics:
• Users: 15k (+12%)
• Retention: 85%
• CSAT: 4.8/5`,

  roadmap: `🎯 Q2 2024 Plan:
• UX Improvement
• Market Expansion
• Platform Stability`,

  features: `✨ Key Features:
• Analytics Dashboard
• A/B Testing
• User Tracking`,

  demo: `Let me show you:
1. Type 'metrics'
2. Try 'roadmap'
3. Use 'features'`,

  default: "Type 'help' to see what I can do!"
};

export const getResponse = (input: string): string => {
  const command = input.toLowerCase();
  return responses[command as keyof typeof responses] || responses.default;
};