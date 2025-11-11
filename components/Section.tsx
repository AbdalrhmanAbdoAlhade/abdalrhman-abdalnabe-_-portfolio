import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, className, children }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className || ''}`}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};
