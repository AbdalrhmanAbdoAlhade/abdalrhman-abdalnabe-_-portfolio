

import React from 'react';
import { Section } from './Section';

interface AboutProps {
  content: {
    title: string;
    p1: string;
    p2: string;
  };
}

export const About: React.FC<AboutProps> = ({ content }) => {
  return (
    // FIX: Added the required 'id' prop to the Section component.
    <Section id="about" title={content.title}>
      <div className="max-w-3xl mx-auto text-center space-y-4 text-lg leading-relaxed">
        <p>{content.p1}</p>
        <p className="font-semibold text-slate-700 dark:text-slate-200">{content.p2}</p>
      </div>
    </Section>
  );
};
