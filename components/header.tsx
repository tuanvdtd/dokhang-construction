'use client';
import { Building2, Menu, Languages } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 transition-all duration-300">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className=" flex items-center justify-center">
              <Image src="/logo1.png" alt="logo" width={70} height={70} />
            </Link>
            {/* <span className="text-2xl text-gray-900">DoKhang</span> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#home" className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 hover:after:w-full after:transition-all after:duration-300">
              {t.header.home}
            </Link>
            <Link href="/#services" className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 hover:after:w-full after:transition-all after:duration-300">
              {t.header.services}
            </Link>
            <Link href="/#projects" className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 hover:after:w-full after:transition-all after:duration-300">
              {t.header.projects}
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 hover:after:w-full after:transition-all after:duration-300">
              {t.header.about}
            </Link>
            <Link href="/lien-he" className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 hover:after:w-full after:transition-all after:duration-300">
              {t.header.contact}
            </Link>
          </nav>

          {/* CTA Button & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
              className="flex items-center cursor-pointer gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
            >
              <Languages className="h-5 w-5 text-gray-700" />
              <span className="text-gray-700">{language === 'en' ? 'EN' : 'VI'}</span>
            </button>
            <Link href="tel:0123456789">
              <Button className="bg-orange-600 cursor-pointer hover:bg-orange-700 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                {t.header.getQuote}
              </Button>
            </Link>
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
              <Link href="/#home" className="text-gray-700 hover:text-orange-600 transition-colors">
                {t.header.home}
              </Link>
              <Link href="/#services" className="text-gray-700 hover:text-orange-600 transition-colors">
                {t.header.services}
              </Link>
              <Link href="/#projects" className="text-gray-700 hover:text-orange-600 transition-colors">
                {t.header.projects}
              </Link>
              <Link href="/#about" className="text-gray-700 hover:text-orange-600 transition-colors">
                {t.header.about}
              </Link>
              <Link href="/lien-he" className="text-gray-700 hover:text-orange-600 transition-colors">
                {t.header.contact}
              </Link>
              <button
                onClick={() => setLanguage(language === 'en' ? 'en' : 'vi')}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors w-full"
              >
                <Languages className="h-5 w-5 text-gray-700" />
                <span className="text-gray-700">{language === 'en' ? 'English' : 'Tiếng Việt'}</span>
              </button>
              <Link href="tel:0123456789">
                <Button className="bg-orange-600 hover:bg-orange-700 w-full">
                  {t.header.getQuote}
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
