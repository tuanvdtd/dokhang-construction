'use client';
import { Hammer, Building2, Home, Wrench, HardHat, Ruler } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t.services.commercial.title,
      description: t.services.commercial.description,
    },
    {
      icon: Home,
      title: t.services.residential.title,
      description: t.services.residential.description,
    },
    {
      icon: Wrench,
      title: t.services.renovation.title,
      description: t.services.renovation.description,
    },
    {
      icon: HardHat,
      title: t.services.projectManagement.title,
      description: t.services.projectManagement.description,
    },
    {
      icon: Ruler,
      title: t.services.design.title,
      description: t.services.design.description,
    },
    {
      icon: Hammer,
      title: t.services.contracting.title,
      description: t.services.contracting.description,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 transition-all duration-500">
          <h2 className="text-4xl md:text-5xl mb-4">{t.services.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl mb-3 group-hover:text-orange-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
