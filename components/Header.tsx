import React, { useState, useEffect } from 'react';

interface HeaderProps {
  content: {
    name: string;
    navLinks: Array<{ name: string; href: string }>;
  };
}

export const Header: React.FC<HeaderProps> = ({ content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <a href="#home" className="text-2xl font-bold text-slate-900 dark:text-white">{content.name}</a>
        <nav className="hidden md:flex items-center space-x-8">
          {content.navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              {link.name}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-slate-900 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {content.navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
