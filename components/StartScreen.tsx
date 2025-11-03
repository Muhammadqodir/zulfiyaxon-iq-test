import React from 'react';
import { TEST_DURATION_MINUTES } from '../constants';

interface StartScreenProps {
  onStartTest: () => void;
  t: {
    title: string;
    description: string;
    questionsLabel: string;
    timeLabel: string;
    instructions: string;
    startButton: string;
    creator: string;
  };
  totalQuestions: number;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStartTest, t, totalQuestions }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl shadow-2xl p-8 text-center animate-fade-in-down">
      <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
        {t.title}
      </h1>
      <p className="text-slate-300 mb-6 text-lg">
        {t.description}
      </p>
      <div className="bg-slate-900/50 p-6 rounded-lg text-left space-y-4 mb-8 border border-slate-700">
        <p><strong className="text-blue-400">{t.questionsLabel}</strong> {totalQuestions}</p>
        <p><strong className="text-blue-400">{t.timeLabel}</strong> {TEST_DURATION_MINUTES} daqiqa</p>
        <p className="text-slate-400 text-sm">{t.instructions}</p>
      </div>
      <button
        onClick={onStartTest}
        className="w-full md:w-auto bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-12 rounded-lg text-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
      >
        {t.startButton}
      </button>
      <p className="text-slate-500 mt-12 text-sm">
        {t.creator}
      </p>
    </div>
  );
};

export default StartScreen;