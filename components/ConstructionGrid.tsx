'use client';
import { ImageWithFallback } from './image/ImageWithFallback';
import { useLanguage } from '../lib/LanguageContext';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export function ConstructionGrid() {
  const { t } = useLanguage();
  const carouselRef = useRef<any>(null);

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1625201212921-1c5e5557d451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE2MTU0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: t.projects.office.title,
      category: t.projects.office.category,
      description: t.projects.office.description,
    },
    {
      image: 'https://images.unsplash.com/photo-1580063665421-4c9cbe9ec11b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvdXNlJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MTYzNDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: t.projects.residential.title,
      category: t.projects.residential.category,
      description: t.projects.residential.description,
    },
    {
      image: 'https://images.unsplash.com/photo-1718209962486-4f91ce71886b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwdGVhbXxlbnwxfHx8fDE3NjE1OTgzODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: t.projects.warehouse.title,
      category: t.projects.warehouse.category,
      description: t.projects.warehouse.description,
    },
  ];

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current?.scrollNext) {
        carouselRef.current.scrollNext();
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 transition-all duration-500">
          <h2 className="text-4xl md:text-5xl mb-4 animate-fade-in">{t.projects.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Desktop: Grid View */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href="/du-an/slug"
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 transition-all duration-500">
                <span className="inline-block px-3 py-1 bg-orange-600 text-white rounded-full text-sm mb-2 w-fit transform group-hover:scale-110 transition-transform duration-300">
                  {project.category}
                </span>
                <h3 className="text-2xl text-white mb-2 transform group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
                <p className="text-gray-200 transform group-hover:translate-x-2 transition-transform duration-300">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile/Tablet: Carousel View */}
        <div className="lg:hidden">
          <Carousel
            ref={carouselRef}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="group relative overflow-hidden rounded-lg shadow-lg">
                    <div className="aspect-[4/3] overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                      <span className="inline-block px-3 py-1 bg-orange-600 text-white rounded-full text-sm mb-2 w-fit">
                        {project.category}
                      </span>
                      <h3 className="text-2xl text-white mb-2">{project.title}</h3>
                      <p className="text-gray-200">{project.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/90 hover:bg-white transition-all duration-300" />
            <CarouselNext className="right-2 bg-white/90 hover:bg-white transition-all duration-300" />
          </Carousel>
          
          {/* Carousel Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300 hover:bg-orange-600"
              ></div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link href="/du-an">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            >
              <span className="group-hover:mr-2 transition-all duration-300">{t.projects.viewMore}</span>
              <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
