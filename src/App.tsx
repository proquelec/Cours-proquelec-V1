import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import AdvancedPresentationMode from './components/Presentation/AdvancedPresentationMode';
import AdminPanel from './components/Admin/AdminPanel';
import { useLocalModules } from './hooks/useLocalModules';

const AppContent: React.FC = () => {
  const { modules } = useLocalModules();
  const [currentModule, setCurrentModule] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<'dashboard' | 'admin'>('dashboard');

  const handleStartModule = (moduleId: string) => {
    setCurrentModule(moduleId);
  };

  const handleExitPresentation = () => {
    setCurrentModule(null);
  };

  const handleViewChange = (view: 'dashboard' | 'admin') => {
    setCurrentView(view);
    setCurrentModule(null);
  };

  const module = currentModule ? modules.find(m => m.id === currentModule) : null;

  if (module) {
    return (
      <AdvancedPresentationMode 
        module={module} 
        onExit={handleExitPresentation}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onViewChange={handleViewChange} currentView={currentView} />
      {currentView === 'dashboard' ? (
        <Dashboard onStartModule={handleStartModule} />
      ) : (
        <AdminPanel />
      )}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;