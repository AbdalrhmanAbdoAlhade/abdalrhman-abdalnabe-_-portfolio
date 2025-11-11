// FIX: Create Hero component to resolve import error and display hero section content.
import React from 'react';
import { Section } from './Section';

interface HeroProps {
  content: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    description: string;
    cvButton: string;
    profileImage: string;
    socials: {
      github: string;
      linkedin: string;
      email: string;
    };
  };
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <Section id="home" className="pt-24 md:pt-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left Side: Text Content */}
          <div className="md:w-3/5 text-center md:text-left">
            <span className="text-blue-500 dark:text-blue-400 font-bold tracking-wider">{content.greeting}</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mt-2 text-slate-900 dark:text-white">{content.name}</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-slate-700 dark:text-slate-300">{content.title}</h2>
            <p className="mt-2 text-lg font-medium text-slate-500 dark:text-slate-400">{content.subtitle}</p>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto md:mx-0">{content.description}</p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a href="/cv.pdf" download className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 w-full sm:w-auto">
                {content.cvButton}
              </a>
              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <a href={content.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href={content.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href={content.socials.email} aria-label="Email" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
                </a>
              </div>
            </div>
          </div>
          {/* Right Side: Image */}
          <div className="md:w-2/5 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src={content.profileImage}
                alt={content.name}
                className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white dark:border-slate-800"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
