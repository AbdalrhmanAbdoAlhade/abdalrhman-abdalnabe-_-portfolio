import React from 'react';
import { Section } from './Section';

interface AchievementsProps {
  content: {
    title: string;
    items: string[];
  };
}

export const Achievements: React.FC<AchievementsProps> = ({ content }) => {
  return (
    <Section id="achievements" title={content.title} className="bg-slate-50 dark:bg-slate-900/50">
      <ul className="max-w-4xl mx-auto space-y-4">
        {content.items.map((item, index) => (
          <li key={index} className="flex items-start p-4 bg-white dark:bg-slate-800 rounded-lg shadow">
            <svg className="w-6 h-6 text-green-500 dark:text-green-400 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p className="text-slate-700 dark:text-slate-300">{item}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};
