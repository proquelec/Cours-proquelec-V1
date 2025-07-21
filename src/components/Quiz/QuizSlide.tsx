import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Clock, RotateCcw } from 'lucide-react';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  timeLimit?: number;
}

interface QuizSlideProps {
  questions: QuizQuestion[];
  onComplete: (score: number, answers: number[]) => void;
  isFullscreen?: boolean;
}

const QuizSlide: React.FC<QuizSlideProps> = ({ questions, onComplete, isFullscreen = false }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const question = questions[currentQuestion];

  // Timer pour les questions avec limite de temps
  useEffect(() => {
    if (question?.timeLimit && !showResult && !quizCompleted) {
      setTimeLeft(question.timeLimit);
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev && prev <= 1) {
            handleNextQuestion();
            return null;
          }
          return prev ? prev - 1 : null;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentQuestion, showResult, quizCompleted]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;

    // Enregistrer l'événement de réponse (stockage local)
    console.log('Quiz answer:', {
      questionId: question.id,
      selectedAnswer: answerIndex,
      isCorrect: answerIndex === question.correctAnswer,
      timeSpent: question.timeLimit ? question.timeLimit - (timeLeft || 0) : 0
    });
    
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowResult(true);

    // Auto-avancement après 3 secondes
    setTimeout(() => {
      handleNextQuestion();
    }, 3000);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setShowResult(false);
      setTimeLeft(null);
    } else {
      // Quiz terminé
      const score = calculateScore();
      setQuizCompleted(true);
      onComplete(score, selectedAnswers);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index]?.correctAnswer) {
        correct++;
      }
    });
    const score = Math.round((correct / questions.length) * 100);
    
    // Enregistrer l'événement de completion du quiz (stockage local)
    console.log('Quiz completed:', {
      totalQuestions: questions.length,
      correctAnswers: correct,
      score: score,
      answers: selectedAnswers
    });
    
    return score;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setQuizCompleted(false);
    setTimeLeft(null);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 dark:text-green-400';
    if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  if (quizCompleted) {
    const score = calculateScore();
    return (
      <div className={`${
        isFullscreen 
          ? 'h-screen w-screen p-8 md:p-16 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800' 
          : 'h-full w-full p-6 md:p-8 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800'
      }`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl"
        >
          <div className="mb-8">
            <div className={`text-6xl font-bold mb-4 ${getScoreColor(score)}`}>
              {score}%
            </div>
            <h2 className={`${isFullscreen ? 'text-4xl' : 'text-2xl'} font-bold text-gray-900 dark:text-white mb-4`}>
              Quiz Terminé !
            </h2>
            <p className={`${isFullscreen ? 'text-xl' : 'text-lg'} text-gray-600 dark:text-gray-400 mb-8`}>
              Vous avez obtenu {selectedAnswers.filter((answer, index) => answer === questions[index]?.correctAnswer).length} bonnes réponses sur {questions.length}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {selectedAnswers.filter((answer, index) => answer === questions[index]?.correctAnswer).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Correctes</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                {questions.length - selectedAnswers.filter((answer, index) => answer === questions[index]?.correctAnswer).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Incorrectes</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {questions.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total</div>
            </div>
          </div>

          <button
            onClick={resetQuiz}
            className="flex items-center space-x-2 bg-electric-600 hover:bg-electric-700 text-white px-6 py-3 rounded-lg transition-colors mx-auto"
          >
            <RotateCcw className="h-5 w-5" />
            <span>Recommencer le Quiz</span>
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`${
      isFullscreen 
        ? 'h-screen w-screen p-8 md:p-16 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800' 
        : 'h-full w-full p-6 md:p-8 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800'
    }`}>
      <div className={`${isFullscreen ? 'max-w-4xl' : 'max-w-3xl'} w-full`}>
        {/* Header avec progression */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Question {currentQuestion + 1} sur {questions.length}
            </span>
            {timeLeft && (
              <div className="flex items-center space-x-2 text-orange-600 dark:text-orange-400">
                <Clock className="h-4 w-4" />
                <span className="font-mono font-bold">{timeLeft}s</span>
              </div>
            )}
          </div>
          
          {/* Barre de progression */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-electric-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="mb-8"
        >
          <h2 className={`${isFullscreen ? 'text-3xl' : 'text-2xl'} font-bold text-gray-900 dark:text-white mb-8 leading-tight`}>
            {question.question}
          </h2>

          {/* Options de réponse */}
          <div className="space-y-4">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswers[currentQuestion] === index;
              const isCorrect = index === question.correctAnswer;
              const showCorrection = showResult;

              let buttonClass = 'w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ';
              
              if (showCorrection) {
                if (isCorrect) {
                  buttonClass += 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200';
                } else if (isSelected && !isCorrect) {
                  buttonClass += 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200';
                } else {
                  buttonClass += 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400';
                }
              } else {
                buttonClass += 'border-gray-300 dark:border-gray-600 hover:border-electric-500 hover:bg-electric-50 dark:hover:bg-electric-900/20 text-gray-900 dark:text-white';
              }

              return (
                <motion.button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={buttonClass}
                  whileHover={!showResult ? { scale: 1.02 } : {}}
                  whileTap={!showResult ? { scale: 0.98 } : {}}
                >
                  <div className="flex items-center justify-between">
                    <span className={`${isFullscreen ? 'text-lg' : 'text-base'} font-medium`}>
                      {String.fromCharCode(65 + index)}. {option}
                    </span>
                    {showCorrection && (
                      <div>
                        {isCorrect && <CheckCircle className="h-6 w-6 text-green-600" />}
                        {isSelected && !isCorrect && <XCircle className="h-6 w-6 text-red-600" />}
                      </div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Explication */}
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg"
              >
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Explication :
                </h4>
                <p className="text-blue-700 dark:text-blue-300">
                  {question.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizSlide;