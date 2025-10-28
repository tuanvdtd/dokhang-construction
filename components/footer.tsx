'use client';
import { Building2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl text-white">BuildCo</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Twitter className="h-5 w-5" />
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
    </footer>
  );
}
