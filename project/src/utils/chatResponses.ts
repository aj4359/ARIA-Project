import { featureTeamTemplate, productTeamTemplate, RoadmapItem } from './roadmapTemplates';

const formatRoadmap = (items: RoadmapItem[]): string => {
  return items.map(item => `
🗓 ${item.quarter}
📌 Objectives:
${item.objectives.map(obj => `  • ${obj}`).join('\n')}
🎯 Outcomes:
${item.outcomes.map(out => `  • ${out}`).join('\n')}
📊 Key Metrics:
${item.metrics.map(metric => `  • ${metric}`).join('\n')}`).join('\n\n');
};

const responses = {
  help: `I can help with:
• Product Metrics - Type 'metrics'
• Feature Roadmap - Type 'feature roadmap'
• Product Roadmap - Type 'product roadmap'
• Demo - Type 'start tour'
• Navigation - Try 'show dashboard'`,

  metrics: `📈 Current Performance:
• Active Users: 15k (+12%)
• Retention: 85%
• CSAT: 4.8/5
• Revenue: +25% MoM`,

  features: `✨ Platform Capabilities:
• Real-time Analytics
• A/B Testing Engine
• User Behavior Tracking
• Automated Insights
• Custom Dashboards`,

  demo: `🎯 Quick Demo:
1. View metrics - Type 'metrics'
2. See roadmaps - Try 'feature roadmap'
3. Check features - Use 'features'`,

  default: "👋 I'm here to help! Type 'help' to see what I can do."
};

export const generateResponse = (input: string): string => {
  const command = input.toLowerCase();

  if (command.includes('feature roadmap')) {
    return `Feature Team Roadmap:\n${formatRoadmap(featureTeamTemplate)}`;
  }

  if (command.includes('product roadmap')) {
    return `Product Team Roadmap:\n${formatRoadmap(productTeamTemplate)}`;
  }

  if (command.includes('start tour')) {
    return responses.demo;
  }

  return responses[command as keyof typeof responses] || responses.default;
};