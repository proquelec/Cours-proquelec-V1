import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Square, 
  Maximize, 
  Minimize,
  Home,
  Pen,
  Eraser,
  MousePointer,
  Settings
} from 'lucide-react';

interface AdvancedPresentationControlsProps {
  currentSlide: number;
  totalSlides: number;
  isPlaying: boolean;
  isFullscreen: boolean;
  isDrawing: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onPlayPause: () => void;
  onStop: () => void;
  onToggleFullscreen: () => void;
  onToggleDrawing: () => void;
  onClearAnnotations: () => void;
  onGoHome: () => void;
}

const AdvancedPresentationControls: React.FC<AdvancedPresentationControlsProps> = ({
  currentSlide,
  totalSlides,
  isPlaying,
  isFullscreen,
  isDrawing,
  onPrevious,
  onNext,
  onPlayPause,
  onStop,
  onToggleFullscreen,
  onToggleDrawing,
  onClearAnnotations,
  onGoHome
}) => {
  return (
    <div className={`${
      isFullscreen 
        ? 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm rounded-2xl p-4 border border-white/20' 
        : 'bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4'
    } flex items-center justify-between space-x-6`}>
      
      {/* Contrôles de navigation */}
      <div className="flex items-center space-x-2">
        <button
          onClick={onGoHome}
          className={`p-2 rounded-lg transition-colors ${
            isFullscreen
              ? 'text-white hover:bg-white/20'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
          title="Retour à l'accueil (Échap)"
        >
          <Home className="h-5 w-5" />
        </button>
        
        <button
          onClick={onStop}
          className={`p-2 rounded-lg transition-colors ${
            isFullscreen
              ? 'text-white hover:bg-white/20'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
          title="Arrêter la présentation"
        >
          <Square className="h-5 w-5" />
        </button>
      </div>

      {/* Contrôles de lecture */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onPrevious}
          disabled={currentSlide === 0}
          className={`p-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
            isFullscreen
              ? 'text-white hover:bg-white/20 disabled:hover:bg-transparent'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:hover:bg-transparent'
          }`}
          title="Diapositive précédente (←)"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={onPlayPause}
          className={`p-4 rounded-xl transition-colors ${
            isFullscreen
              ? 'bg-white/20 text-white hover:bg-white/30'
              : 'bg-electric-100 dark:bg-electric-900 text-electric-600 dark:text-electric-400 hover:bg-electric-200 dark:hover:bg-electric-800'
          }`}
          title={isPlaying ? 'Pause (F5)' : 'Lecture automatique (F5)'}
        >
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </button>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className={`p-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
            isFullscreen
              ? 'text-white hover:bg-white/20 disabled:hover:bg-transparent'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:hover:bg-transparent'
          }`}
          title="Diapositive suivante (→)"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Outils de présentation */}
      <div className="flex items-center space-x-2">
        <button
          onClick={onToggleDrawing}
          className={`p-2 rounded-lg transition-colors ${
            isDrawing
              ? (isFullscreen ? 'bg-white/30 text-white' : 'bg-electric-100 dark:bg-electric-900 text-electric-600 dark:text-electric-400')
              : (isFullscreen ? 'text-white hover:bg-white/20' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700')
          }`}
          title="Mode annotation (Ctrl+D)"
        >
          <Pen className="h-5 w-5" />
        </button>

        <button
          onClick={onClearAnnotations}
          className={`p-2 rounded-lg transition-colors ${
            isFullscreen
              ? 'text-white hover:bg-white/20'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
          title="Effacer les annotations (Ctrl+C)"
        >
          <Eraser className="h-5 w-5" />
        </button>

        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2" />

        <span className={`text-sm font-medium px-3 py-1 rounded-lg ${
          isFullscreen 
            ? 'text-white bg-white/20' 
            : 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700'
        }`}>
          {currentSlide + 1} / {totalSlides}
        </span>
        
        <button
          onClick={onToggleFullscreen}
          className={`p-2 rounded-lg transition-colors ${
            isFullscreen
              ? 'text-white hover:bg-white/20'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
          title={isFullscreen ? 'Quitter le plein écran (F11)' : 'Plein écran (F11)'}
        >
          {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
        </button>
      </div>
    </div>
  );
};

export default AdvancedPresentationControls;