'use client';
import { Building2, Facebook, Twitter, Instagram, Linkedin, ArrowUp  } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { useEffect, useState } from 'react';
import Logo from "./Logo";

const TikTokIcon = ({
  size = 18,
  color = "#ff6600",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill={color}
    width={size}
    height={size}
    className={className}
  >
    <path d="M448,209.2a210,210,0,0,1-122.77-39.26V349.43A162.57,162.57,0,1,1,162.56,186.86a164.41,164.41,0,0,1,18.14,1v89.53a72.13,72.13,0,1,0,51.44,69V0H325.23A122.23,122.23,0,0,0,448,122.23Z" />
  </svg>
);

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight /2 ;
      setShowScrollTop(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
                <Logo className=" text-white" />
              <span className="text-2xl text-white">DoKhangCo</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/DOKHANGCONSTRUCTION" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@dokhangconstruction" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
                 <TikTokIcon className="h-5 w-5" color='white'/>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-orange-600 transition-colors">{t.header.home}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-600 transition-colors">{t.header.services}</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-600 transition-colors">{t.header.projects}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-600 transition-colors">{t.header.about}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-600 transition-colors">{t.header.contact}</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">{t.footer.services}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">{t.services.commercial.title}</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">{t.services.residential.title}</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">{t.services.renovation.title}</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">{t.services.projectManagement.title}</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">{t.services.design.title}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {t.footer.copyright}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-orange-600 text-sm transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600 text-sm transition-colors">
                {t.footer.terms}
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600 text-sm transition-colors">
                {t.footer.sitemap}
              </a>
            </div>
          </div>
        </div>
      </div>
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed cursor-pointer bottom-8 right-8 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 animate-fadeIn"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
}
