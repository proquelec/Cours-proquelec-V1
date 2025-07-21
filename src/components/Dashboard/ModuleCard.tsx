import React from 'react';
import { Clock, Users, BookOpen, Play, Zap, Shield, Wrench, Star } from 'lucide-react';
import { Module } from '../../types';

interface ModuleCardProps {
  module: Module;
  onStart: (moduleId: string) => void;
  viewMode?: 'grid' | 'list';
}

const categoryColors = {
  'tronc-commun': 'bg-electric-100 text-electric-800 dark:bg-electric-900 dark:text-electric-200',
  'executant': 'bg-safety-100 text-safety-800 dark:bg-safety-900 dark:text-safety-200',
  'charge-chantier': 'bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-200',
  'specialise': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
};

const categoryIcons = {
  'tronc-commun': Zap,
  'executant': Users,
  'charge-chantier': Shield,
  'specialise': Star
};

const categoryLabels = {
  'tronc-commun': 'Tronc Commun',
  'executant': 'Exécutant',
  'charge-chantier': 'Chargé de Chantier',
  'specialise': 'Spécialisé'
};

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onStart, viewMode = 'grid' }) => {
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h${mins > 0 ? ` ${mins}min` : ''}`;
    }
    return `${mins}min`;
  };

  const CategoryIcon = categoryIcons[module.category];

  if (viewMode === 'list') {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200 group">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <div className={`p-3 rounded-lg ${categoryColors[module.category]}`}>
                <CategoryIcon className="h-6 w-6" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[module.category]}`}>
                    {categoryLabels[module.category]}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                    {module.level}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {module.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  {module.description}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{formatDuration(module.duration)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="h-4 w-4" />
                <span>{module.slides.length} diapositives</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{module.certification}</span>
              </div>
              
              <button
                onClick={() => onStart(module.id)}
                className="bg-electric-600 hover:bg-electric-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center space-x-2"
              >
                <Play className="h-4 w-4" />
                <span>Commencer</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200 group">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[module.category]}`}>
                {categoryLabels[module.category]}
              </span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                {module.level}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {module.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
              {module.description}
            </p>
          </div>
          <div className={`p-2 rounded-lg ${categoryColors[module.category]} ml-4`}>
            <CategoryIcon className="h-5 w-5" />
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{formatDuration(module.duration)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <BookOpen className="h-4 w-4" />
            <span>{module.slides.length} diapositives</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{module.certification}</span>
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
            Objectifs principaux :
          </h4>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            {module.objectives.slice(0, 3).map((objective, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-electric-500 mt-1">•</span>
                <span>{objective}</span>
              </li>
            ))}
            {module.objectives.length > 3 && (
              <li className="text-electric-600 dark:text-electric-400 font-medium">
                +{module.objectives.length - 3} autres objectifs
              </li>
            )}
          </ul>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onStart(module.id)}
          className="w-full bg-electric-600 hover:bg-electric-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 group-hover:shadow-md"
        >
          <Play className="h-4 w-4" />
          <span>Commencer le module</span>
        </button>
      </div>
    </div>
  );
};

export default ModuleCard;