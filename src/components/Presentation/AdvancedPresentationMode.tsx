import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHotkeys } from 'react-hotkeys-hook';
import { Module } from '../../types';
import SlideViewer from './SlideViewer';
import AdvancedPresentationControls from './AdvancedPresentationControls';
import PresentationToolbar from './PresentationToolbar';
import SlideNotes from './SlideNotes';
import PresentationTimer from './PresentationTimer';
import QuizSlide from '../Quiz/QuizSlide';
import MediaViewer from '../Media/MediaViewer';
import { useLocalQuiz } from '../../hooks/useLocalQuiz';

interface AdvancedPresentationModeProps {
  module: Module;
  onExit: () => void;
}

const AdvancedPresentationMode: React.FC<AdvancedPresentationModeProps> = ({ 
  module, 
  onExit 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(true);
  const [showTimer, setShowTimer] = useState(true);
  const [startTime] = useState<Date>(new Date());
  const [slideStartTime, setSlideStartTime] = useState<Date>(new Date());
  const [annotations, setAnnotations] = useState<{x: number, y: number, text: string}[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [pointerPosition, setPointerPosition] = useState<{x: number, y: number} | null>(null);
  const [autoAdvanceTime, setAutoAdvanceTime] = useState(5000);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<any[]>([]);
  const [presentationStats, setPresentationStats] = useState({
    totalTime: 0,
    slidesTiming: [] as number[]
  });

  const { getQuizQuestions } = useLocalQuiz();
  const presentationRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Charger les questions de quiz
  useEffect(() => {
    const loadQuizQuestions = async () => {
      try {
        const questions = await getQuizQuestions(module.id);
        setQuizQuestions(questions);
      } catch (error) {
        console.error('Erreur lors du chargement des questions:', error);
      }
    };

    loadQuizQuestions();
  }, [module.id]);

  // Gestion des raccourcis clavier étendus
  useHotkeys('right, space, pagedown', () => handleNext(), [currentSlide, module.slides.length]);
  useHotkeys('left, pageup', () => handlePrevious(), [currentSlide]);
  useHotkeys('home', () => setCurrentSlide(0));
  useHotkeys('end', () => setCurrentSlide(module.slides.length - 1));
  useHotkeys('escape', () => isFullscreen ? setIsFullscreen(false) : onExit());
  useHotkeys('f11', () => setIsFullscreen(!isFullscreen));
  useHotkeys('f5', () => setIsPlaying(!isPlaying));
  useHotkeys('ctrl+n', () => setShowNotes(!showNotes));
  useHotkeys('ctrl+t', () => setShowTimer(!showTimer));
  useHotkeys('ctrl+d', () => setIsDrawing(!isDrawing));
  useHotkeys('ctrl+c', () => setAnnotations([]));
  useHotkeys('ctrl+q', () => setShowQuiz(!showQuiz));

  // Gestion des pointeurs/télécommandes
  useEffect(() => {
    const handleGamepadConnected = (e: GamepadEvent) => {
      console.log('Pointeur connecté:', e.gamepad.id);
    };

    const handleGamepadDisconnected = (e: GamepadEvent) => {
      console.log('Pointeur déconnecté:', e.gamepad.id);
    };

    window.addEventListener('gamepadconnected', handleGamepadConnected);
    window.addEventListener('gamepaddisconnected', handleGamepadDisconnected);

    return () => {
      window.removeEventListener('gamepadconnected', handleGamepadConnected);
      window.removeEventListener('gamepaddisconnected', handleGamepadDisconnected);
    };
  }, []);

  // Polling des gamepads pour les pointeurs
  useEffect(() => {
    const pollGamepads = () => {
      const gamepads = navigator.getGamepads();
      for (let i = 0; i < gamepads.length; i++) {
        const gamepad = gamepads[i];
        if (gamepad) {
          // Bouton suivant (généralement bouton 0)
          if (gamepad.buttons[0]?.pressed) {
            handleNext();
          }
          // Bouton précédent (généralement bouton 1)
          if (gamepad.buttons[1]?.pressed) {
            handlePrevious();
          }
          // Bouton plein écran (généralement bouton 2)
          if (gamepad.buttons[2]?.pressed) {
            setIsFullscreen(!isFullscreen);
          }
        }
      }
    };

    const interval = setInterval(pollGamepads, 100);
    return () => clearInterval(interval);
  }, [currentSlide, isFullscreen, module.slides.length]);

  // Gestion du mouvement de la souris pour le pointeur laser
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isFullscreen && presentationRef.current) {
        const rect = presentationRef.current.getBoundingClientRect();
        setPointerPosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    if (isFullscreen) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isFullscreen]);

  // Auto-avancement des diapositives
  useEffect(() => {
    if (isPlaying && autoAdvanceTime > 0 && !showQuiz) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => {
          if (prev < module.slides.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, autoAdvanceTime);

      return () => clearInterval(interval);
    }
  }, [isPlaying, autoAdvanceTime, module.slides.length, showQuiz]);

  // Suivi du temps par diapositive
  useEffect(() => {
    setSlideStartTime(new Date());
  }, [currentSlide]);

  const handlePrevious = useCallback(() => {
    if (showQuiz) {
      setShowQuiz(false);
      return;
    }
    
    if (currentSlide > 0) {
      // Enregistrer le temps passé sur la diapositive
      const timeSpent = new Date().getTime() - slideStartTime.getTime();
      setPresentationStats(prev => ({
        ...prev,
        slidesTiming: [...prev.slidesTiming.slice(0, currentSlide), timeSpent]
      }));
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide, slideStartTime, showQuiz]);

  const handleNext = useCallback(() => {
    if (showQuiz) {
      setShowQuiz(false);
      return;
    }
    
    if (currentSlide < module.slides.length - 1) {
      // Enregistrer le temps passé sur la diapositive
      const timeSpent = new Date().getTime() - slideStartTime.getTime();
      setPresentationStats(prev => ({
        ...prev,
        slidesTiming: [...prev.slidesTiming.slice(0, currentSlide), timeSpent]
      }));
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide, module.slides.length, slideStartTime, showQuiz]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setCurrentSlide(0);
  };

  const handleToggleFullscreen = async () => {
    if (!isFullscreen) {
      try {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } catch (error) {
        console.error('Erreur plein écran:', error);
        setIsFullscreen(true); // Fallback
      }
    } else {
      try {
        await document.exitFullscreen();
        setIsFullscreen(false);
      } catch (error) {
        console.error('Erreur sortie plein écran:', error);
        setIsFullscreen(false); // Fallback
      }
    }
  };

  const handleSlideClick = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const handleAnnotationAdd = (x: number, y: number, text: string) => {
    setAnnotations(prev => [...prev, { x, y, text }]);
  };

  const handleQuizComplete = (score: number, answers: number[]) => {
    
    console.log('Quiz terminé avec un score de', score, '%');
    console.log('Réponses:', answers);
  };
  const currentSlideData = module.slides[currentSlide];

  // Rendu du contenu principal
  const renderMainContent = () => {
    if (showQuiz && quizQuestions && quizQuestions.length > 0) {
      return (
        <QuizSlide
          questions={quizQuestions}
          onComplete={handleQuizComplete}
          isFullscreen={isFullscreen}
        />
      );
    }

    // Vérifier si c'est un slide média
    if (currentSlideData.type === 'image' && currentSlideData.media) {
      return (
        <MediaViewer
          type="image"
          src={currentSlideData.media}
          title={currentSlideData.title}
          isFullscreen={isFullscreen}
        />
      );
    }

    if (currentSlideData.type === 'video' && currentSlideData.media) {
      return (
        <MediaViewer
          type="video"
          src={currentSlideData.media}
          title={currentSlideData.title}
          isFullscreen={isFullscreen}
          autoPlay={isPlaying}
        />
      );
    }

    return (
      <SlideViewer 
        slide={currentSlideData} 
        isFullscreen={isFullscreen}
        annotations={annotations}
        onAnnotationAdd={handleAnnotationAdd}
        isDrawingMode={isDrawing}
      />
    );
  };

  return (
    <div 
      ref={presentationRef}
      className={`${
        isFullscreen 
          ? 'fixed inset-0 z-[9999] bg-white dark:bg-gray-900 cursor-none overflow-hidden' 
          : 'min-h-screen bg-gray-50 dark:bg-gray-900'
      } relative`}
    >
      {/* Barre d'outils de présentation (mode fenêtré uniquement) */}
      {!isFullscreen && (
        <PresentationToolbar
          module={module}
          currentSlide={currentSlide}
          isPlaying={isPlaying}
          showNotes={showNotes}
          showTimer={showTimer}
          isDrawing={isDrawing}
          autoAdvanceTime={autoAdvanceTime}
          onToggleNotes={() => setShowNotes(!showNotes)}
          onToggleTimer={() => setShowTimer(!showTimer)}
          onToggleDrawing={() => setIsDrawing(!isDrawing)}
          onAutoAdvanceChange={setAutoAdvanceTime}
          onSlideClick={handleSlideClick}
          onExit={onExit}
        />
      )}

      {/* Contenu principal */}
      <div className={`${
        isFullscreen 
          ? 'h-screen w-screen flex flex-col overflow-hidden' 
          : 'flex-1 min-h-0 flex flex-col'
      }`}>
        
        {/* Zone de présentation */}
        <div className={`${
          isFullscreen 
            ? 'flex-1 relative w-full h-full overflow-hidden' 
            : 'flex-1 min-h-0 relative'
        }`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={showQuiz ? 'quiz' : currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className={`${isFullscreen ? 'h-full w-full overflow-hidden' : 'h-full'}`}
            >
              {renderMainContent()}
            </motion.div>
          </AnimatePresence>

          {/* Pointeur laser virtuel */}
          {isFullscreen && pointerPosition && !showQuiz && (
            <div
              className="absolute w-4 h-4 bg-red-500 rounded-full pointer-events-none z-50 animate-pulse"
              style={{
                left: `${pointerPosition.x}%`,
                top: `${pointerPosition.y}%`,
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 20px rgba(239, 68, 68, 0.8)'
              }}
            />
          )}

          {/* Canvas pour les annotations */}
          {isDrawing && !showQuiz && (
            <canvas
              ref={canvasRef}
              className="absolute inset-0 z-40 cursor-crosshair"
              width={presentationRef.current?.clientWidth || 1920}
              height={presentationRef.current?.clientHeight || 1080}
            />
          )}
        </div>

        {/* Contrôles de présentation */}
        {!isFullscreen && (
          <AdvancedPresentationControls
            currentSlide={currentSlide}
            totalSlides={module.slides.length}
            isPlaying={isPlaying}
            isFullscreen={isFullscreen}
            isDrawing={isDrawing}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onPlayPause={handlePlayPause}
            onStop={handleStop}
            onToggleFullscreen={handleToggleFullscreen}
            onToggleDrawing={() => setIsDrawing(!isDrawing)}
            onClearAnnotations={() => setAnnotations([])}
            onGoHome={onExit}
          />
        )}
        
        {/* Contrôles minimaux en mode plein écran (apparaissent au survol) */}
        {isFullscreen && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-2xl p-3 opacity-0 hover:opacity-100 transition-opacity duration-300 z-50">
            <div className="flex items-center space-x-4">
              <button
                onClick={handlePrevious}
                disabled={currentSlide === 0}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50"
                title="Précédent (←)"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <span className="text-white text-sm font-medium px-3 py-1 bg-white/20 rounded-lg">
                {currentSlide + 1} / {module.slides.length}
              </span>
              
              <button
                onClick={handleNext}
                disabled={currentSlide === module.slides.length - 1}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50"
                title="Suivant (→)"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              
              <div className="w-px h-6 bg-white/30 mx-2" />
              
              <button
                onClick={handleToggleFullscreen}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                title="Quitter le plein écran (Échap)"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Panneau latéral (mode fenêtré uniquement) */}
      {!isFullscreen && (
        <div className="w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 flex flex-col">
          {/* Timer de présentation */}
          {showTimer && (
            <PresentationTimer
              startTime={startTime}
              slideStartTime={slideStartTime}
              currentSlide={currentSlide}
              totalSlides={module.slides.length}
              estimatedDuration={module.duration}
            />
          )}

          {/* Score du quiz */}
          {quizScore !== null && (
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Score du Quiz
                </span>
              </div>
              <div className={`text-2xl font-bold ${
                quizScore >= 80 ? 'text-green-600' : 
                quizScore >= 60 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {quizScore}%
              </div>
            </div>
          )}

          {/* Bouton Quiz */}
          {quizQuestions && quizQuestions.length > 0 && (
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setShowQuiz(!showQuiz)}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                  showQuiz
                    ? 'bg-electric-600 text-white'
                    : 'bg-electric-100 dark:bg-electric-900 text-electric-600 dark:text-electric-400 hover:bg-electric-200 dark:hover:bg-electric-800'
                }`}
              >
                {showQuiz ? 'Retour au cours' : 'Quiz d\'évaluation'}
              </button>
            </div>
          )}

          {/* Notes de la diapositive */}
          {showNotes && currentSlideData.notes && !showQuiz && (
            <SlideNotes
              notes={currentSlideData.notes}
              slideTitle={currentSlideData.title}
            />
          )}

          {/* Miniatures des diapositives */}
          <div className="flex-1 p-4 overflow-y-auto">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
              Diapositives ({module.slides.length})
            </h3>
            <div className="space-y-2">
              {module.slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => handleSlideClick(index)}
                  className={`w-full p-3 text-left rounded-lg border transition-all ${
                    index === currentSlide && !showQuiz
                      ? 'border-electric-500 bg-electric-50 dark:bg-electric-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      index === currentSlide && !showQuiz
                        ? 'bg-electric-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}>
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {slide.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {slide.type} • {slide.duration ? `${Math.floor(slide.duration / 60)}:${(slide.duration % 60).toString().padStart(2, '0')}` : '5:00'}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPresentationMode;