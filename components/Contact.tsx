// FIX: Create Contact component to resolve import error and display contact information.
import React from 'react';
import { Section } from './Section';

interface ContactProps {
  content: {
    title: string;
    description: string;
    email: string;
    linkedin: string;
    whatsapp: string;
    phone: string;
  };
}

export const Contact: React.FC<ContactProps> = ({ content }) => {
  const contactMethods = [
    {
      name: "Email",
      value: content.email,
      href: `mailto:${content.email}`,
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
    {
      name: "LinkedIn",
      value: content.linkedin,
      href: `https://www.linkedin.com/in/abdalrhman-abdalnabe-6673312ba/`,
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
    },
    {
      name: "WhatsApp",
      value: content.whatsapp,
      href: `https://wa.me/${content.whatsapp.replace(/\+/g, '')}`,
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l-1.317 4.834 4.92-1.305z"/></svg>
    },
    {
      name: "Phone",
      value: content.phone,
      href: `tel:${content.phone}`,
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
    }
  ];

  return (
    <Section id="contact" title={content.title} className="bg-slate-50 dark:bg-slate-900/50">
      <p className="text-center max-w-3xl mx-auto mb-12 text-lg text-slate-600 dark:text-slate-400">{content.description}</p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {contactMethods.map((method) => (
          <a
            key={method.name}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center gap-4 p-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:-translate-y-2"
          >
            <div className="text-blue-500 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110">
              {method.icon}
            </div>
            <div>
              <h3 className="font-bold text-xl text-slate-800 dark:text-slate-200">{method.name}</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">{method.value}</p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};
