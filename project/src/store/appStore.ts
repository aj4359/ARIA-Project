import { create } from 'zustand';

type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
};

interface AppState {
  activeTab: 'dashboard' | 'chat' | 'pricing';
  messages: Message[];
  setActiveTab: (tab: 'dashboard' | 'chat' | 'pricing') => void;
  addMessage: (content: string, role: 'user' | 'assistant') => void;
}

export const useAppStore = create<AppState>((set) => ({
  activeTab: 'chat',
  messages: [{
    id: '1',
    content: "👋 I'm ARIA. Type 'help' to start!",
    role: 'assistant'
  }],
  setActiveTab: (tab) => set({ activeTab: tab }),
  addMessage: (content, role) => set((state) => ({
    messages: [...state.messages, { id: Date.now().toString(), content, role }]
  }))
}));