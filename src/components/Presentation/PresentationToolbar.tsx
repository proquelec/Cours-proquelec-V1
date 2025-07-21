import React, { useState } from 'react';
import { 
  Settings, 
  Clock, 
  FileText, 
  Pen, 
  Grid3X3, 
  Timer,
  Download,
  Share2,
  X,
  Gamepad2,
  Wifi,
  WifiOff
} from 'lucide-react';
import { Module } from '../../types';

interface PresentationToolbarProps {
  module: Module;
  currentSlide: number;
  isPlaying: boolean;
  showNotes: boolean;
  showTimer: boolean;
  isDrawing: boolean;
  autoAdvanceTime: number;
  onToggleNotes: () => void;
  onToggleTimer: () => void;
  onToggleDrawing: () => void;
  onAutoAdvanceChange: (time: number) => void;
  onSlideClick: (index: number) => void;
  onExit: () => void;
}

const PresentationToolbar: React.FC<PresentationToolbarProps> = ({
  module,
  currentSlide,
  isPlaying,
  showNotes,
  showTimer,
  isDrawing,
  autoAdvanceTime,
  onToggleNotes,
  onToggleTimer,
  onToggleDrawing,
  onAutoAdvanceChange,
  onSlideClick,
  onExit
}) => {
  const [showSettings, setShowSettings] = useState(false);
  const [pointerConnected, setPointerConnected] = useState(false);
  const [remoteConnected, setRemoteConnected] = useState(false);

  // Détection des pointeurs/télécommandes
  React.useEffect(() => {
    const checkGamepads = () => {
      const gamepads = navigator.getGamepads();
      const hasGamepad = Array.from(gamepads).some(gamepad => gamepad !== null);
      setPointerConnected(hasGamepad);
    };

    const interval = setInterval(checkGamepads, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleExportPDF = async () => {
    // Logique d'export PDF (à implémenter avec jsPDF)
    console.log('Export PDF du module:', module.title);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: module.title,
          text: module.description,
          url: window.location.href
        });
      } catch (error) {
        console.log('Partage annulé');
      }
    } else {
      // Fallback: copier l'URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const connectRemote = () => {
    // Simulation de connexion télécommande
    setRemoteConnected(!remoteConnected);
  };

  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Informations du module */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onExit}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="Fermer la présentation"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
              {module.title}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Diapositive {currentSlide + 1} sur {module.slides.length} • {module.certification}
            </p>
          </div>
        </div>

        {/* Statut des périphériques */}
        <div className="flex items-center space-x-2">
          {/* Pointeur/Télécommande */}
          <div className="flex items-center space-x-1">
            <Gamepad2 className={`h-4 w-4 ${pointerConnected ? 'text-green-600' : 'text-gray-400'}`} />
            <span className={`text-xs ${pointerConnected ? 'text-green-600' : 'text-gray-400'}`}>
              {pointerConnected ? 'Pointeur' : 'Aucun pointeur'}
            </span>
          </div>

          {/* Connexion réseau */}
          <button
            onClick={connectRemote}
            className="flex items-center space-x-1 p-1 rounded"
            title="Connexion télécommande réseau"
          >
            {remoteConnected ? (
              <Wifi className="h-4 w-4 text-green-600" />
            ) : (
              <WifiOff className="h-4 w-4 text-gray-400" />
            )}
            <span className={`text-xs ${remoteConnected ? 'text-green-600' : 'text-gray-400'}`}>
              {remoteConnected ? 'Connecté' : 'Hors ligne'}
            </span>
          </button>
        </div>

        {/* Outils de présentation */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onToggleTimer}
            className={`p-2 rounded-lg transition-colors ${
              showTimer
                ? 'bg-electric-100 dark:bg-electric-900 text-electric-600 dark:text-electric-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            title="Afficher/masquer le timer (Ctrl+T)"
          >
            <Clock className="h-5 w-5" />
          </button>

          <button
            onClick={onToggleNotes}
            className={`p-2 rounded-lg transition-colors ${
              showNotes
                ? 'bg-electric-100 dark:bg-electric-900 text-electric-600 dark:text-electric-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            title="Afficher/masquer les notes (Ctrl+N)"
          >
            <FileText className="h-5 w-5" />
          </button>

          <button
            onClick={onToggleDrawing}
            className={`p-2 rounded-lg transition-colors ${
              isDrawing
                ? 'bg-electric-100 dark:bg-electric-900 text-electric-600 dark:text-electric-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            title="Mode annotation (Ctrl+D)"
          >
            <Pen className="h-5 w-5" />
          </button>

          <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2" />

          <button
            onClick={handleExportPDF}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="Exporter en PDF"
          >
            <Download className="h-5 w-5" />
          </button>

          <button
            onClick={handleShare}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="Partager"
          >
            <Share2 className="h-5 w-5" />
          </button>

          <div className="relative">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className={`p-2 rounded-lg transition-colors ${
                showSettings
                  ? 'bg-electric-100 dark:bg-electric-900 text-electric-600 dark:text-electric-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              title="Paramètres de présentation"
            >
              <Settings className="h-5 w-5" />
            </button>

            {/* Menu des paramètres */}
            {showSettings && (
              <div className="absolute right-0 top-full mt-2 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                  Paramètres de présentation
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Avancement automatique (secondes)
                    </label>
                    <select
                      value={autoAdvanceTime / 1000}
                      onChange={(e) => onAutoAdvanceChange(parseInt(e.target.value) * 1000)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value={3}>3 secondes</option>
                      <option value={5}>5 secondes</option>
                      <option value={10}>10 secondes</option>
                      <option value={15}>15 secondes</option>
                      <option value={30}>30 secondes</option>
                      <option value={60}>1 minute</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Affichage des notes
                    </span>
                    <button
                      onClick={onToggleNotes}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        showNotes ? 'bg-electric-600' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          showNotes ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Timer de présentation
                    </span>
                    <button
                      onClick={onToggleTimer}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        showTimer ? 'bg-electric-600' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          showTimer ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Raccourcis clavier */}
                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Raccourcis clavier
                    </h4>
                    <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                      <div className="flex justify-between">
                        <span>Diapositive suivante:</span>
                        <span className="font-mono">→ / Espace</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Diapositive précédente:</span>
                        <span className="font-mono">←</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Plein écran:</span>
                        <span className="font-mono">F11</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Lecture auto:</span>
                        <span className="font-mono">F5</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Mode annotation:</span>
                        <span className="font-mono">Ctrl+D</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Quiz:</span>
                        <span className="font-mono">Ctrl+Q</span>
                      </div>
                    </div>
                  </div>

                  {/* Support pointeur */}
                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Support pointeur
                    </h4>
                    <div className="space-y-2">
                      <div className={`flex items-center space-x-2 text-sm ${
                        pointerConnected ? 'text-green-600' : 'text-gray-500'
                      }`}>
                        <Gamepad2 className="h-4 w-4" />
                        <span>
                          {pointerConnected ? 'Pointeur détecté' : 'Aucun pointeur connecté'}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Connectez un pointeur USB ou Bluetooth pour contrôler la présentation à distance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationToolbar;