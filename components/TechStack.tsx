import React from 'react';
import { Section } from './Section';

interface TechStackProps {
  content: {
    title: string;
    categories: Array<{
      title: string;
      items: string;
    }>;
  };
}

export const TechStack: React.FC<TechStackProps> = ({ content }) => {
  return (
    <Section id="tech-stack" title={content.title}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.categories.map((category, index) => (
          <div key={index} className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">{category.title}</h3>
            <p className="text-slate-600 dark:text-slate-400">{category.items}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
