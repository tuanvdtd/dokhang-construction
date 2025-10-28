'use client';
import { Star } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t.testimonials.testimonial1.name,
      role: t.testimonials.testimonial1.role,
      content: t.testimonials.testimonial1.content,
      rating: 5,
    },
    {
      name: t.testimonials.testimonial2.name,
      role: t.testimonials.testimonial2.role,
      content: t.testimonials.testimonial2.content,
      rating: 5,
    },
    {
      name: t.testimonials.testimonial3.name,
      role: t.testimonials.testimonial3.role,
      content: t.testimonials.testimonial3.content,
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-900 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-900 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 transition-all duration-500">
          <h2 className="text-4xl md:text-5xl mb-4">{t.testimonials.title}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 fill-orange-600 text-orange-600 group-hover:scale-110 transition-transform duration-300" 
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic group-hover:text-white transition-colors duration-300">{testimonial.content}</p>
              <div>
                <p className="text-white group-hover:text-orange-400 transition-colors duration-300">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
