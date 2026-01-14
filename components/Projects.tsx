import React, { useState } from 'react';
import { Section } from './Section';

// مصفوفة المشاريع المحدثة بناءً على مستودعاتك الأخيرة
const projectsData = [
  {
    name: "ALAHRAM-EG-APP",
    tech: "Laravel 12 & Sanctum",
    description: "نظام متكامل (API) لإدارة التجارة الإلكترونية، يدعم إدارة المنتجات، الطلبات، بوابات الدفع، وأتمتة رسائل WhatsApp Business.",
    githubUrl: "https://github.com/AbdalrhmanAbdoAlhade/alahram-eg-app",
    isPublic: false
  },
  {
    name: "Mawaed-Al-Sultan",
    tech: "React 19 & Gemini AI",
    description: "تطبيق SPA فاخر للمطاعم يدمج الذكاء الاصطناعي (الشيف عثمان) لاقتراح الأطباق، مع لوحة تحكم تحليلية متكاملة بـ TypeScript.",
    githubUrl: "https://github.com/AbdalrhmanAbdoAlhade/Mawaed-Al-Sultan",
    isPublic: true
  },
  {
    name: "BOT-SHOP",
    tech: "Python & AI Chatbot",
    description: "مساعد ذكي للرد على استفسارات العملاء آلياً، مدمج مع واجهات API الخاصة بالمتجر لتوفير معلومات دقيقة عن المنتجات.",
    githubUrl: "https://github.com/AbdalrhmanAbdoAlhade/BOT-SHOP",
    isPublic: true
  },
  {
    name: "PlayPro System",
    tech: "PHP Laravel",
    description: "منصة لإدارة الأكاديميات الرياضية والملاعب، تتيح حجز الملاعب، إدارة الاشتراكات، وتتبع أداء المدربين واللاعبين.",
    githubUrl: "https://github.com/AbdalrhmanAbdoAlhade/PlayPro-app",
    isPublic: false
  },
  {
    name: "Educational-API",
    tech: "Laravel Backend",
    description: "نظام إدارة تعليمي ضخم (LMS) لإدارة الجامعات والبرامج الأكاديمية والشركاء، مع نظام تصفية وبحث متقدم.",
    githubUrl: "https://github.com/AbdalrhmanAbdoAlhade/Educational-API",
    isPublic: false
  },
  {
    name: "SmartHomeBackend",
    tech: "Node.js & MQTT",
    description: "نظام Backend لإدارة المنازل الذكية، يدعم التحكم في الأجهزة عن بُعد وتبادل البيانات عبر بروتوكول MQTT و WebSockets.",
    githubUrl: "https://github.com/AbdalrhmanAbdoAlhade/SmartHomeBackend",
    isPublic: false
  }
];

interface ProjectsProps {
  content: {
    title: string;
    description: string;
    liveDeployments: {
      title: string;
      description: string;
      sites: string[];
    };
  };
}

export const Projects: React.FC<ProjectsProps> = ({ content }) => {
  const [visibleSites, setVisibleSites] = useState(12);

  const showMoreSites = () => {
    setVisibleSites(prev => prev + 12);
  };

  return (
    <Section id="projects" title={content.title}>
      {/* وصف القسم */}
      <p className="text-center max-w-3xl mx-auto mb-16 text-lg text-slate-600 dark:text-slate-400">
        {content.description}
      </p>
      
      {/* شبكة المشاريع البرمجية (GitHub Repos) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {projectsData.map((project, index) => (
          <div 
            key={index}
            className="group relative p-7 bg-white dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="text-[10px] font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-600">
                {project.tech}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
              {project.name}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                project.isPublic 
                ? "text-blue-600 dark:text-blue-400 hover:text-blue-700" 
                : "text-slate-400 cursor-not-allowed"
              }`}
            >
              {project.isPublic ? "View on GitHub" : "Private Repository"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        ))}
      </div>

      {/* قسم الروابط المباشرة (Live Deployments) */}
      <div className="pt-16 border-t border-slate-200 dark:border-slate-800">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
            {content.liveDeployments.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {content.liveDeployments.description}
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
          {content.liveDeployments.sites.slice(0, visibleSites).map((site, index) => (
            <a 
              key={index} 
              href={`https://${site}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-3 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 py-3 px-6 rounded-xl border border-transparent hover:border-blue-500 hover:bg-white dark:hover:bg-slate-700 shadow-sm transition-all duration-300"
            >
              <span className="font-medium">{site}</span>
              <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>

        {visibleSites < content.liveDeployments.sites.length && (
          <div className="text-center mt-12">
            <button
              onClick={showMoreSites}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
            >
              <span>Explore More Projects</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </Section>
  );
};
