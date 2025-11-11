import React, { useState } from 'react';
import { Section } from './Section';

interface ProjectsProps {
  content: {
    title: string;
    description: string;
    repos: Array<{
      name: string;
      tech: string;
      value: string;
    }>;
    liveDeployments: {
      title: string;
      description: string;
      sites: string[];
    };
  };
}

export const Projects: React.FC<ProjectsProps> = ({ content }) => {
  const [visibleSites, setVisibleSites] = useState(15);

  const showMoreSites = () => {
    setVisibleSites(prev => prev + 15);
  };

  return (
    <Section id="projects" title={content.title}>
      <p className="text-center max-w-3xl mx-auto mb-12 text-lg text-slate-600 dark:text-slate-400">{content.description}</p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {content.repos.map((repo, index) => (
          <a key={index} href={`https://github.com/${repo.name}`} target="_blank" rel="noopener noreferrer" className="block p-6 bg-slate-100 dark:bg-slate-800/50 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:scale-105 transition-all">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{repo.name}</h3>
              <span className="text-xs font-semibold bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 py-1 px-3 rounded-full">{repo.tech}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">{repo.value}</p>
          </a>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-4 text-slate-900 dark:text-slate-100">{content.liveDeployments.title}</h3>
        <p className="text-center max-w-3xl mx-auto mb-8 text-slate-600 dark:text-slate-400">{content.liveDeployments.description}</p>
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
          {content.liveDeployments.sites.slice(0, visibleSites).map((site, index) => (
            <a 
              key={index} 
              href={`https://${site}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="live-deployment-link group flex items-center gap-2 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm py-2 px-4 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white shadow"
            >
              <span>{site}</span>
              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          ))}
        </div>
        {visibleSites < content.liveDeployments.sites.length && (
          <div className="text-center mt-8">
            <button
              onClick={showMoreSites}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
            >
              Show More Projects
            </button>
          </div>
        )}
      </div>
    </Section>
  );
};
