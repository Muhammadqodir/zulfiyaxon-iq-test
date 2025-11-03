import React from 'react';
import { Question } from '../types';

interface ResultsScreenProps {
  userAnswers: (number | null)[];
  questions: Question[];
  onRestart: () => void;
  t: {
    title: string;
    feedback: {
      amazing: string;
      good: string;
      niceTry: string;
    };
    scoreLabel: string;
    iqLabel: string;
    iqDisclaimer: string;
    reviewLabels: {
      yourAnswer: string;
      noAnswer: string;
      correctAnswer: string;
    };
    restartButton: string;
    creator: string;
  };
}

const CheckIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"></polyline></svg>
);

const XIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const ResultsScreen: React.FC<ResultsScreenProps> = ({
  userAnswers,
  questions,
  onRestart,
  t,
}) => {
  const correctAnswersCount = userAnswers.reduce((count, answer, index) => {
    return answer === questions[index].correctAnswer ? count + 1 : count;
  }, 0);

  const scorePercentage = (correctAnswersCount / questions.length) * 100;
  
  const estimatedIQ = Math.round(80 + (scorePercentage / 100) * 60);

  let feedback = { text: t.feedback.niceTry, color: "text-yellow-400" };
  if (scorePercentage >= 80) {
    feedback = { text: t.feedback.amazing, color: "text-green-400" };
  } else if (scorePercentage >= 50) {
    feedback = { text: t.feedback.good, color: "text-blue-400" };
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl shadow-2xl p-8 w-full text-center">
      <h2 className="text-3xl font-bold text-slate-100 mb-2">{t.title}</h2>
      <p className={`text-xl font-semibold mb-6 ${feedback.color}`}>{feedback.text}</p>

      <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 mb-6">
        <p className="text-slate-400 text-lg">{t.scoreLabel}</p>
        <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 my-2">
          {correctAnswersCount} / {questions.length}
        </p>
        <p className="text-slate-300">{t.iqLabel} <span className="font-bold">{estimatedIQ}</span></p>
        <p className="text-xs text-slate-500 mt-2">{t.iqDisclaimer}</p>
      </div>

      <div className="text-left max-h-60 overflow-y-auto space-y-2 p-4 bg-slate-900 rounded-lg border border-slate-700 mb-6">
        {questions.map((question, index) => {
          const userAnswer = userAnswers[index];
          const isCorrect = userAnswer === question.correctAnswer;
          return (
            <div key={index} className={`p-2 rounded-md flex items-start text-sm ${isCorrect ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
              {isCorrect ? <CheckIcon className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" /> : <XIcon className="w-5 h-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />}
              <div>
                <p className="font-medium text-slate-300">{index + 1}. {question.question}</p>
                <p className={`${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                  {t.reviewLabels.yourAnswer} {userAnswer !== null ? question.options[userAnswer] : t.reviewLabels.noAnswer}
                </p>
                {!isCorrect && (
                  <p className="text-slate-400">{t.reviewLabels.correctAnswer} {question.options[question.correctAnswer]}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={onRestart}
        className="w-full md:w-auto bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-12 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
      >
        {t.restartButton}
      </button>
      <p className="text-slate-500 mt-8 text-sm">
        {t.creator}
      </p>
    </div>
  );
};

export default ResultsScreen;