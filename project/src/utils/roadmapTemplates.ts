export interface RoadmapItem {
  quarter: string;
  objectives: string[];
  outcomes: string[];
  metrics: string[];
}

export const featureTeamTemplate: RoadmapItem[] = [
  {
    quarter: 'Q2 2024',
    objectives: [
      'Enhance Platform Performance',
      'Improve User Experience',
      'Strengthen Analytics Engine'
    ],
    outcomes: [
      '50% faster data processing',
      '30% reduction in user errors',
      'Real-time insight generation'
    ],
    metrics: [
      'Processing time < 100ms',
      'Error rate < 0.1%',
      'Analytics delay < 5s'
    ]
  },
  {
    quarter: 'Q3 2024',
    objectives: [
      'Scale Infrastructure',
      'Automate Insights',
      'Expand Integration Options'
    ],
    outcomes: [
      '99.99% platform uptime',
      'AI-driven recommendations',
      'Support for 10+ new tools'
    ],
    metrics: [
      'System availability',
      'Recommendation accuracy',
      'Integration success rate'
    ]
  }
];

export const productTeamTemplate: RoadmapItem[] = [
  {
    quarter: 'Q2 2024',
    objectives: [
      'Market Expansion',
      'Customer Success',
      'Revenue Growth'
    ],
    outcomes: [
      'Enter 3 new markets',
      'Achieve 95% satisfaction',
      'Increase MRR by 40%'
    ],
    metrics: [
      'Market penetration rate',
      'NPS score > 60',
      'Monthly revenue growth'
    ]
  },
  {
    quarter: 'Q3 2024',
    objectives: [
      'Enterprise Adoption',
      'Platform Innovation',
      'Community Growth'
    ],
    outcomes: [
      '50 enterprise clients',
      '5 innovative features',
      '10k community members'
    ],
    metrics: [
      'Enterprise conversion rate',
      'Feature adoption rate',
      'Community engagement'
    ]
  }
];