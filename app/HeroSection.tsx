'use client';
import { ImageWithFallback } from '../components/image/ImageWithFallback';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export function HeroSection() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1673978482989-5eb3b350be2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHNpdGV8ZW58MXx8fHwxNzYxNTg1OTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Construction site"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white animate-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://zalo.me/0987654321"
              target="_blank"
              rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-orange-600 cursor-pointer hover:bg-orange-700 text-white px-8 py-6 transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
            >
              <span className="group-hover:mr-1 transition-all duration-300">{t.hero.freeQuote}</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
          <Link href='/du-an'>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 cursor-pointer backdrop-blur-sm border-white text-white hover:bg-white/20 px-8 py-6 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-white hover:text-orange-600"
            >
              {t.hero.viewProjects}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
