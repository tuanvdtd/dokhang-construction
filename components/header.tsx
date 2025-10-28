'use client';
import { Building2, Menu, Languages } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 transition-all duration-300">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl text-gray-900">BuildCo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 hover:after:w-full after:transition-all after:duration-300">
              {t.header.home}
            </a>
            <a href="#services" className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 hover:after:w-full after:transition-all after:duration-300">
              {t.header.services}
            </a>
            <a href="#projects" className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 hover:after:w-full after:transition-all after:duration-300">
              {t.header.projects}
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 hover:after:w-full after:transition-all after:duration-300">
              {t.header.about}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 hover:after:w-full after:transition-all after:duration-300">
              {t.header.contact}
            </a>
          </nav>

          {/* CTA Button & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
            >
              <Languages className="h-5 w-5 text-gray-700" />
              <span className="text-gray-700">{language === 'en' ? 'EN' : 'VI'}</span>
            </button>
            <Button className="bg-orange-600 hover:bg-orange-700 transition-all duration-300 hover:scale-110 hover:shadow-lg">
              {t.header.getQuote}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">
                {t.header.home}
              </a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors">
                {t.header.services}
              </a>
              <a href="#projects" className="text-gray-700 hover:text-orange-600 transition-colors">
                {t.header.projects}
              </a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">
                {t.header.about}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">
                {t.header.contact}
              </a>
              <button
                onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors w-full"
              >
                <Languages className="h-5 w-5 text-gray-700" />
                <span className="text-gray-700">{language === 'en' ? 'English' : 'Tiếng Việt'}</span>
              </button>
              <Button className="bg-orange-600 hover:bg-orange-700 w-full">
                {t.header.getQuote}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
