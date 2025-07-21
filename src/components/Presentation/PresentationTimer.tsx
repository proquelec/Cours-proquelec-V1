import React, { useState, useEffect } from 'react';
import { Clock, Timer, TrendingUp } from 'lucide-react';

interface PresentationTimerProps {
  startTime: Date;
  slideStartTime: Date;
  currentSlide: number;
  totalSlides: number;
  estimatedDuration: number; // en minutes
}

const PresentationTimer: React.FC<PresentationTimerProps> = ({
  startTime,
  slideStartTime,
  currentSlide,
  totalSlides,
  estimatedDuration
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const totalElapsed = Math.floor((currentTime.getTime() - startTime.getTime()) / 1000);
  const slideElapsed = Math.floor((currentTime.getTime() - slideStartTime.getTime()) / 1000);
  const estimatedTotal = estimatedDuration * 60;
  const progress = (totalElapsed / estimatedTotal) * 100;

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressColor = () => {
    if (progress < 50) return 'bg-green-500';
    if (progress < 80) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-2 mb-3">
        <Clock className="h-4 w-4 text-electric-600 dark:text-electric-400" />
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
          Chronométrage
        </h3>
      </div>

      <div className="space-y-4">
        {/* Temps total */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Temps total
          </span>
          <span className="text-lg font-mono font-semibold text-gray-900 dark:text-white">
            {formatTime(totalElapsed)}
          </span>
        </div>

        {/* Temps de la diapositive */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Diapositive actuelle
          </span>
          <span className="text-sm font-mono text-gray-700 dark:text-gray-300">
            {formatTime(slideElapsed)}
          </span>
        </div>

        {/* Progression */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Progression
            </span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${getProgressColor()}`}
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        {/* Temps estimé restant */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            Temps estimé restant
          </span>
          <span className="font-medium text-gray-900 dark:text-white">
            {formatTime(Math.max(0, estimatedTotal - totalElapsed))}
          </span>
        </div>

        {/* Statistiques */}
        <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="h-3 w-3 text-gray-500" />
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Statistiques
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-gray-500 dark:text-gray-400">Diapos/min:</span>
              <span className="ml-1 font-medium text-gray-900 dark:text-white">
                {totalElapsed > 0 ? ((currentSlide + 1) / (totalElapsed / 60)).toFixed(1) : '0.0'}
              </span>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400">Restantes:</span>
              <span className="ml-1 font-medium text-gray-900 dark:text-white">
                {totalSlides - currentSlide - 1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationTimer;