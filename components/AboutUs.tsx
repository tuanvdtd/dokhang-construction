'use client'
import { ImageWithFallback } from './image/ImageWithFallback';
import { Award, Users, Building, CheckCircle } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function AboutUs() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Building,
      value: '500+',
      label: t.about.stats.projects,
    },
    {
      icon: Users,
      value: '200+',
      label: t.about.stats.clients,
    },
    {
      icon: Award,
      value: '25+',
      label: t.about.stats.experience,
    },
    {
      icon: CheckCircle,
      value: '100%',
      label: t.about.stats.satisfaction,
    },
  ];

  const values = [
    {
      title: t.about.values.quality.title,
      description: t.about.values.quality.description,
    },
    {
      title: t.about.values.safety.title,
      description: t.about.values.safety.description,
    },
    {
      title: t.about.values.delivery.title,
      description: t.about.values.delivery.description,
    },
    {
      title: t.about.values.sustainable.title,
      description: t.about.values.sustainable.description,
    },
  ];
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Parallax Background Pattern */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            #f97316 0px,
            #f97316 1px,
            transparent 1px,
            transparent 20px
          )`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 transition-all duration-500">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">{t.about.title}</h2>
            <p className="text-xl text-gray-600 mb-6">
              {t.about.intro}
            </p>
            <p className="text-gray-600 mb-6">
              {t.about.paragraph1}
            </p>
            <p className="text-gray-600 mb-8">
              {t.about.paragraph2}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="h-5 w-5 text-orange-600" />
                <span>{t.about.licensed}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="h-5 w-5 text-orange-600" />
                <span>{t.about.awardWinning}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="h-5 w-5 text-orange-600" />
                <span>{t.about.ecoFriendly}</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-orange-500/50">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1712916870935-64f86ef1ed35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYxNTczMzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Construction workers building"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-600 rounded-lg -z-10 group-hover:scale-110 transition-transform duration-500"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-20 hover:shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-14 h-14 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-4xl text-white mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                  <div className="text-gray-400 group-hover:text-orange-400 transition-colors duration-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl mb-4">{t.about.values.title}</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.about.values.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-orange-50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 group cursor-pointer">
                <h4 className="text-xl mb-3 group-hover:text-orange-600 transition-colors duration-300">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
