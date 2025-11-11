import React from 'react';
import { Section } from './Section';

interface GitHubStatsProps {
  content: {
    title: string;
    description: string;
    statsAlt: string;
    topLangsAlt: string;
  };
  theme: 'light' | 'dark';
}

export const GitHubStats: React.FC<GitHubStatsProps> = ({ content, theme }) => {
  const statTheme = 'transparent'; // Force transparent theme for consistency
  const bgColor = '0A192F'; // Match app background
  const textColor = '94a3b8'; // slate-400
  const titleColor = '60a5fa'; // blue-400
  const iconColor = '60a5fa'; // blue-400
  
  return (
    <Section id="github-stats" title={content.title}>
      <p className="text-center max-w-3xl mx-auto mb-12 text-lg text-slate-400">{content.description}</p>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="rounded-xl shadow-lg bg-black/20 backdrop-blur-lg border border-white/10 p-4">
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=AbdalrhmanAbdoAlhade&show_icons=true&theme=${statTheme}&hide_border=true&bg_color=${bgColor}&text_color=${textColor}&title_color=${titleColor}&icon_color=${iconColor}`}
              alt={content.statsAlt}
            />
        </div>
        <div className="rounded-xl shadow-lg bg-black/20 backdrop-blur-lg border border-white/10 p-4">
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=AbdalrhmanAbdoAlhade&layout=compact&theme=${statTheme}&hide_border=true&bg_color=${bgColor}&text_color=${textColor}&title_color=${titleColor}`}
              alt={content.topLangsAlt}
            />
        </div>
      </div>
    </Section>
  );
};