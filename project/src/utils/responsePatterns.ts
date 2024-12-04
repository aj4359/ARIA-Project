export const matchPattern = (input: string): string[] => {
  const patterns = {
    product: ['roadmap', 'strategy', 'plan', 'vision'],
    metrics: ['metrics', 'analytics', 'performance', 'numbers', 'stats'],
    features: ['feature', 'functionality', 'capability'],
    insights: ['insight', 'analysis', 'trend', 'recommendation'],
    navigation: ['show', 'go to', 'open', 'navigate'],
    help: ['help', 'guide', 'assist', 'support']
  };

  return Object.entries(patterns)
    .filter(([_, keywords]) => 
      keywords.some(keyword => input.toLowerCase().includes(keyword)))
    .map(([category]) => category);
};