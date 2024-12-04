import React, { useState } from 'react';
import Chat from './components/Chat';
import Avatar from './components/Avatar';
import Dashboard from './components/Dashboard';
import PricingCard from './components/PricingCard';
import { subscriptionTiers } from './data/subscriptionTiers';
import { MessageSquare, LayoutDashboard, CreditCard } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState<'chat' | 'dashboard' | 'pricing'>('dashboard');

  const handleNavigation = (view: 'dashboard' | 'chat' | 'pricing') => {
    setActiveTab(view);
  };

  const handleSubscription = (tierId: string) => {
    // TODO: Implement payment processing
    console.log('Selected tier:', tierId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-purple-600">ARIA</h1>
              <p className="text-gray-600">Product Management Intelligence Platform</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'dashboard'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('chat')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'chat'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                Chat
              </button>
              <button
                onClick={() => setActiveTab('pricing')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'pricing'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                Pricing
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto">
        {activeTab === 'chat' && <Chat onNavigate={handleNavigation} />}
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'pricing' && (
          <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Plan</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {subscriptionTiers.map((tier) => (
                <PricingCard
                  key={tier.id}
                  tier={tier}
                  onSelect={handleSubscription}
                />
              ))}
            </div>
          </div>
        )}
        <Avatar />
      </main>
    </div>
  );
}

export default App;