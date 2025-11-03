import React, { useState, useEffect, useCallback } from 'react';
import { TEST_DURATION_MINUTES } from './constants';
import { translations } from './translations';
import StartScreen from './components/StartScreen';
import TestView from './components/TestView';
import ResultsScreen from './components/ResultsScreen';
import LanguageSwitcher from './components/LanguageSwitcher';
import { Language } from './types';

type GameState = 'start' | 'testing' | 'finished';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('uz');
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(TEST_DURATION_MINUTES * 60);
  
  const t = translations[language];
  const questions = t.questions;

  const startTest = useCallback(() => {
    setCurrentQuestionIndex(0);
    setUserAnswers(new Array(questions.length).fill(null));
    setTimeLeft(TEST_DURATION_MINUTES * 60);
    setGameState('testing');
  }, [questions.length]);

  const handleAnswer = useCallback((answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setGameState('finished');
    }
  }, [currentQuestionIndex, userAnswers, questions.length]);
  
  const finishTest = useCallback(() => {
    setGameState('finished');
  }, []);

  useEffect(() => {
    if (gameState === 'testing') {
      if (timeLeft <= 0) {
        finishTest();
        return;
      }
      const timerId = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [gameState, timeLeft, finishTest]);

  const renderContent = () => {
    switch (gameState) {
      case 'testing':
        return (
          <TestView
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            timeLeft={timeLeft}
            t={t.testView}
          />
        );
      case 'finished':
        return (
          <ResultsScreen
            userAnswers={userAnswers}
            questions={questions}
            onRestart={startTest}
            t={t.resultsScreen}
          />
        );
      case 'start':
      default:
        return <StartScreen 
                  onStartTest={startTest} 
                  t={t.startScreen}
                  totalQuestions={questions.length}
                />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-2xl relative">
        <LanguageSwitcher currentLang={language} onChangeLang={setLanguage} />
        <div className="mt-12 md:mt-0">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;