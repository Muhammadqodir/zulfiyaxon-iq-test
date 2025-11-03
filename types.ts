export type Language = 'uz' | 'ru' | 'en';

export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
}