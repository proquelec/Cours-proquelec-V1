export interface Slide {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'image' | 'video' | 'quiz';
  media?: string;
  notes?: string;
  duration?: number;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  category: 'tronc-commun' | 'executant' | 'charge-chantier' | 'specialise';
  duration: number;
  level: string;
  slides: Slide[];
  objectives: string[];
  prerequisites: string[];
  certification: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'formateur' | 'stagiaire';
  avatar?: string;
}

export interface Session {
  id: string;
  moduleId: string;
  startTime: Date;
  currentSlide: number;
  duration: number;
  completed: boolean;
}

export interface PresentationStats {
  totalTime: number;
  slidesTiming: number[];
  averageSlideTime: number;
  completionRate: number;
}

export interface Annotation {
  id: string;
  x: number;
  y: number;
  text: string;
  timestamp: Date;
  slideId: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  timeLimit?: number;
}

export interface QuizResult {
  questionId: string;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpent: number;
}

export interface TrainingSession {
  id: string;
  moduleId: string;
  userId: string;
  startTime: Date;
  endTime?: Date;
  slideTimes: number[];
  quizResults?: QuizResult[];
  completed: boolean;
  score?: number;
}