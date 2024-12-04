import React from 'react';
import Chat from './components/Chat';
import Avatar from './components/Avatar';
import Dashboard from './components/Dashboard';
import PricingCard from './components/PricingCard';
import { subscriptionTiers } from './data/subscriptionTiers';
import { MessageSquare, LayoutDashboard, CreditCard } from 'lucide-react';
import { useAppStore } from './store/appStore';

function App() {
  const { activeTab, setActiveTab } = useAppStore();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-purple-600">ARIA</h1>
              <p className="text-gray-600">Product Intelligence Platform</p>
            </div>
            <nav className="flex gap-2">
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
            </nav>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto py-6">
        {activeTab === 'chat' && <Chat />}
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'pricing' && (
          <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Plan</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {subscriptionTiers.map((tier) => (
                <PricingCard
                  key={tier.id}
                  tier={tier}
                  onSelect={() => console.log('Selected tier:', tier.id)}
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