import { useState } from 'react';
import { QuizQuestion } from '../types';
import { getQuizForModule } from '../data/quiz';

export const useLocalQuiz = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getQuizQuestions = async (moduleId: string): Promise<QuizQuestion[]> => {
    setLoading(true);
    setError(null);
    
    try {
      // Simuler un petit délai de chargement
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const questions = getQuizForModule(moduleId);
      return questions;
    } catch (err) {
      setError('Erreur lors du chargement des questions');
      return [];
    } finally {
      setLoading(false);
    }
  };

  return {
    getQuizQuestions,
    loading,
    error
  };
};