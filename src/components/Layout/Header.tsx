import React, { useState } from 'react';
import { Zap, User, LogOut, Settings, Moon, Sun, Shield, BarChart3 } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface HeaderProps {
  onViewChange?: (view: 'dashboard' | 'admin') => void;
  currentView?: 'dashboard' | 'admin';
}

const Header: React.FC<HeaderProps> = ({ onViewChange, currentView = 'dashboard' }) => {
  const { isDark, toggleTheme } = useTheme();
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-electric-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Formation Électrique Pro
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Habilitation Électrique NF C18-510
              </p>
            </div>
          </div>

          {/* Navigation */}
          {onViewChange && (
            <nav className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => onViewChange('dashboard')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentView === 'dashboard'
                    ? 'bg-electric-100 dark:bg-electric-900 text-electric-600 dark:text-electric-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <BarChart3 className="h-4 w-4 inline mr-2" />
                Tableau de bord
              </button>
              <button
                onClick={() => onViewChange('admin')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentView === 'admin'
                    ? 'bg-electric-100 dark:bg-electric-900 text-electric-600 dark:text-electric-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Shield className="h-4 w-4 inline mr-2" />
                Administration
              </button>
            </nav>
          )}

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              title={isDark ? 'Mode clair' : 'Mode sombre'}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Accès libre - Pas d'authentification */}
            <div className="flex items-center space-x-3 p-2 rounded-lg bg-green-50 dark:bg-green-900/20">
              <div className="h-8 w-8 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Accès Libre
                </p>
                <p className="text-xs text-green-600 dark:text-green-400">
                  Formation ouverte à tous
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;