import React from 'react';
import { Language } from '../types';

interface LanguageSwitcherProps {
  currentLang: Language;
  onChangeLang: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onChangeLang }) => {
  const languages: { key: Language; label: string }[] = [
    { key: 'uz', label: 'O‘zbek' },
    { key: 'ru', label: 'Русский' },
    { key: 'en', label: 'English' },
  ];

  return (
    <div className="absolute top-0 right-0 -mt-14 md:-top-4 md:-right-4 flex gap-1 p-1 bg-slate-800 border border-slate-700 rounded-lg z-10">
      {languages.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onChangeLang(key)}
          className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${
            currentLang === key
              ? 'bg-blue-600 text-white'
              : 'bg-transparent text-slate-400 hover:bg-slate-700'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
