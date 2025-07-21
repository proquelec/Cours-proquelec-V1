import React, { useState } from 'react';
import { Search, Filter, Grid, List, Clock, Users, BookOpen, TrendingUp } from 'lucide-react';
import { Module } from '../../types';
import { useLocalModules } from '../../hooks/useLocalModules';
import ModuleCard from './ModuleCard';

interface DashboardProps {
  onStartModule: (moduleId: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onStartModule }) => {
  const { modules, loading, error } = useLocalModules();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { value: 'all', label: 'Tous les modules' },
    { value: 'tronc-commun', label: 'Tronc Commun' },
    { value: 'executant', label: 'Exécutant' },
    { value: 'charge-chantier', label: 'Chargé de Chantier' },
    { value: 'specialise', label: 'Spécialisé' }
  ];

  const filteredModules = modules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || module.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-red-600 dark:text-red-400">Erreur: {error}</p>
        </div>
      </div>
    );
  }

  // Statistiques
  const totalModules = modules.length;
  const totalSlides = modules.reduce((acc, module) => acc + module.slides.length, 0);
  const totalDuration = modules.reduce((acc, module) => acc + module.duration, 0);
  const avgDuration = totalModules > 0 ? Math.round(totalDuration / totalModules) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header avec statistiques */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Modules de Formation
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Plateforme complète de formation habilitation électrique NF C18-510
        </p>

        {/* Statistiques rapides */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-electric-100 dark:bg-electric-900 rounded-lg">
                <BookOpen className="h-5 w-5 text-electric-600 dark:text-electric-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Modules</p>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">{totalModules}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-safety-100 dark:bg-safety-900 rounded-lg">
                <Users className="h-5 w-5 text-safety-600 dark:text-safety-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Diapositives</p>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">{totalSlides}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-warning-100 dark:bg-warning-900 rounded-lg">
                <Clock className="h-5 w-5 text-warning-600 dark:text-warning-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Durée totale</p>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  {Math.floor(totalDuration / 60)}h{totalDuration % 60}min
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <TrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Durée moyenne</p>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  {Math.floor(avgDuration / 60)}h{avgDuration % 60}min
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtres */}
      <div className="mb-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un module..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Category Filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent dark:bg-gray-700 dark:text-white appearance-none bg-white dark:bg-gray-700"
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* View Mode */}
        <div className="flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-3 ${viewMode === 'grid' 
              ? 'bg-electric-600 text-white' 
              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
            } transition-colors`}
          >
            <Grid className="h-5 w-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-3 ${viewMode === 'list' 
              ? 'bg-electric-600 text-white' 
              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
            } transition-colors`}
          >
            <List className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {filteredModules.length} module{filteredModules.length !== 1 ? 's' : ''} trouvé{filteredModules.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Modules Grid */}
      {filteredModules.length > 0 ? (
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredModules.map(module => (
            <ModuleCard
              key={module.id}
              module={module}
              onStart={onStartModule}
              viewMode={viewMode}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 dark:text-gray-500 mb-4">
            <Search className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Aucun module trouvé
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Essayez de modifier vos critères de recherche
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;