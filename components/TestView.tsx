import React from 'react';
import { Question } from '../types';

interface TestViewProps {
  question: Question;
  onAnswer: (answerIndex: number) => void;
  questionNumber: number;
  totalQuestions: number;
  timeLeft: number;
  t: {
    questionLabel: string;
  };
}

const ClockIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

const ProgressBar: React.FC<{current: number; total: number}> = ({ current, total }) => {
  const percentage = (current / total) * 100;
  return (
    <div className="w-full bg-slate-700 rounded-full h-2.5 mb-4">
      <div
        className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

const TestView: React.FC<TestViewProps> = ({
  question,
  onAnswer,
  questionNumber,
  totalQuestions,
  timeLeft,
  t,
}) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8 w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-medium text-slate-400">
          {questionNumber}-{t.questionLabel} / {totalQuestions}
        </div>
        <div className={`flex items-center gap-2 font-mono px-3 py-1.5 rounded-full text-sm ${timeLeft < 30 ? 'bg-red-500/20 text-red-300' : 'bg-blue-500/20 text-blue-300'}`}>
          <ClockIcon className="w-4 h-4" />
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
      </div>

      <ProgressBar current={questionNumber} total={totalQuestions} />

      <div className="mt-8">
        <p className="text-xs font-semibold text-purple-400 tracking-wider uppercase mb-2">{question.category}</p>
        <h2 className="text-xl md:text-2xl font-semibold text-slate-100 mb-6 min-h-[6rem] flex items-center">
          {question.question}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(index)}
              className="text-left p-4 bg-slate-700/50 border border-slate-600 rounded-lg hover:bg-slate-700 hover:border-blue-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className="text-slate-300">{option}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestView;