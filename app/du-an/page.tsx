'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ImageWithFallback } from '@/components/image/ImageWithFallback';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Ruler, 
  CheckCircle, 
  Clock,
  ArrowRight,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('completed');

  const completedProjects = [
    {
      id: 1,
      name: t.projectsPage.projects.completed.project1.name,
      location: t.projectsPage.projects.completed.project1.location,
      size: '5,000 m²',
      type: t.projectsPage.projects.completed.project1.type,
      description: t.projectsPage.projects.completed.project1.description,
      completedDate: 'December 2024',
      image: 'https://images.unsplash.com/photo-1625201212921-1c5e5557d451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE2MTU0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      beforeAfter: true,
      metrics: {
        onTime: true,
        budget: '100%',
        satisfaction: '98%'
      }
    },
    {
      id: 2,
      name: t.projectsPage.projects.completed.project2.name,
      location: t.projectsPage.projects.completed.project2.location,
      size: '3,200 m²',
      type: t.projectsPage.projects.completed.project2.type,
      description: t.projectsPage.projects.completed.project2.description,
      completedDate: 'October 2024',
      image: 'https://images.unsplash.com/photo-1580063665421-4c9cbe9ec11b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvdXNlJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MTYzNDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      beforeAfter: false,
      metrics: {
        onTime: true,
        budget: '95%',
        satisfaction: '100%'
      }
    },
    {
      id: 3,
      name: t.projectsPage.projects.completed.project3.name,
      location: t.projectsPage.projects.completed.project3.location,
      size: '8,500 m²',
      type: t.projectsPage.projects.completed.project3.type,
      description: t.projectsPage.projects.completed.project3.description,
      completedDate: 'September 2024',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYxNjM0ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      beforeAfter: false,
      metrics: {
        onTime: true,
        budget: '98%',
        satisfaction: '96%'
      }
    },
    {
      id: 4,
      name: t.projectsPage.projects.completed.project4.name,
      location: t.projectsPage.projects.completed.project4.location,
      size: '2,800 m²',
      type: t.projectsPage.projects.completed.project4.type,
      description: t.projectsPage.projects.completed.project4.description,
      completedDate: 'August 2024',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNjM0ODYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      beforeAfter: false,
      metrics: {
        onTime: true,
        budget: '100%',
        satisfaction: '99%'
      }
    },
    {
      id: 5,
      name: t.projectsPage.projects.completed.project5.name,
      location: t.projectsPage.projects.completed.project5.location,
      size: '1,500 m²',
      type: t.projectsPage.projects.completed.project5.type,
      description: t.projectsPage.projects.completed.project5.description,
      completedDate: 'July 2024',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZXxlbnwxfHx8fDE3NjE2MzQ4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      beforeAfter: false,
      metrics: {
        onTime: true,
        budget: '97%',
        satisfaction: '100%'
      }
    },
    {
      id: 6,
      name: t.projectsPage.projects.completed.project6.name,
      location: t.projectsPage.projects.completed.project6.location,
      size: '4,200 m²',
      type: t.projectsPage.projects.completed.project6.type,
      description: t.projectsPage.projects.completed.project6.description,
      completedDate: 'June 2024',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE2MzQ5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      beforeAfter: false,
      metrics: {
        onTime: true,
        budget: '99%',
        satisfaction: '97%'
      }
    },
  ];

  const ongoingProjects = [
    {
      id: 1,
      name: t.projectsPage.projects.ongoing.project1.name,
      location: t.projectsPage.projects.ongoing.project1.location,
      size: '12,000 m²',
      type: t.projectsPage.projects.ongoing.project1.type,
      description: t.projectsPage.projects.ongoing.project1.description,
      startDate: 'January 2025',
      expectedCompletion: 'December 2025',
      progress: 35,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwY3JhbmV8ZW58MXx8fHwxNzYxNjM0OTI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      phase: t.projectsPage.phases.foundation
    },
    {
      id: 2,
      name: t.projectsPage.projects.ongoing.project2.name,
      location: t.projectsPage.projects.ongoing.project2.location,
      size: '6,500 m²',
      type: t.projectsPage.projects.ongoing.project2.type,
      description: t.projectsPage.projects.ongoing.project2.description,
      startDate: 'November 2024',
      expectedCompletion: 'August 2025',
      progress: 60,
      image: 'https://images.unsplash.com/photo-1590725175609-474c1acb5f21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjE2MzQ5NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      phase: t.projectsPage.phases.structure
    },
    {
      id: 3,
      name: t.projectsPage.projects.ongoing.project3.name,
      location: t.projectsPage.projects.ongoing.project3.location,
      size: '3,800 m²',
      type: t.projectsPage.projects.ongoing.project3.type,
      description: t.projectsPage.projects.ongoing.project3.description,
      startDate: 'September 2024',
      expectedCompletion: 'May 2025',
      progress: 75,
      image: 'https://images.unsplash.com/photo-1503418895522-246dd43cce41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE2MzQ5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      phase: t.projectsPage.phases.finishing
    },
  ];

  const testimonials = [
    {
      name: 'Robert Chen',
      role: t.projectsPage.testimonials.testimonial1.role,
      content: t.projectsPage.testimonials.testimonial1.content,
      project: t.projectsPage.projects.completed.project1.name,
    },
    {
      name: 'Jennifer Martinez',
      role: t.projectsPage.testimonials.testimonial2.role,
      content: t.projectsPage.testimonials.testimonial2.content,
      project: t.projectsPage.projects.completed.project2.name,
    },
    {
      name: 'David Thompson',
      role: t.projectsPage.testimonials.testimonial3.role,
      content: t.projectsPage.testimonials.testimonial3.content,
      project: t.projectsPage.projects.completed.project3.name,
    },
  ];

  useEffect(() => {
    const prev = window.history.scrollRestoration;
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = prev ?? 'auto';
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative mt-16 md:mt-20 py-20 scroll-mt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255, 255, 255, 0.1) 35px,
              rgba(255, 255, 255, 0.1) 70px
            )`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/20 rounded-full mb-6">
              <Building2 className="h-5 w-5" />
              <span className="text-sm">{t.projectsPage.header.badge}</span>
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">{t.projectsPage.header.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.projectsPage.header.subtitle}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-2">500+</div>
              <div className="text-gray-300">{t.projectsPage.stats.totalProjects}</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-2">98%</div>
              <div className="text-gray-300">{t.projectsPage.stats.onTimeDelivery}</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-2">2M+</div>
              <div className="text-gray-300">{t.projectsPage.stats.sqmBuilt}</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-2">100%</div>
              <div className="text-gray-300">{t.projectsPage.stats.clientSatisfaction}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="completed" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-14">
              <TabsTrigger 
                value="completed" 
                className="text-base data-[state=active]:bg-orange-600 data-[state=active]:text-white transition-all duration-300"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                {t.projectsPage.tabs.completed}
              </TabsTrigger>
              <TabsTrigger 
                value="ongoing"
                className="text-base data-[state=active]:bg-orange-600 data-[state=active]:text-white transition-all duration-300"
              >
                <Clock className="h-5 w-5 mr-2" />
                {t.projectsPage.tabs.ongoing}
              </TabsTrigger>
            </TabsList>

            {/* Completed Projects */}
            <TabsContent value="completed" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {completedProjects.map((project, index) => (
                  <Link
                    href={`/du-an/${project.id}`}
                    key={project.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-600 hover:bg-green-700 text-white">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {t.projectsPage.badges.completed}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl mb-2 group-hover:text-orange-600 transition-colors duration-300">
                        {project.name}
                      </h3>
                      
                      <div className="space-y-2 mb-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-orange-600" />
                          <span className="text-sm">{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Ruler className="h-4 w-4 text-orange-600" />
                          <span className="text-sm">{project.size} • {project.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-orange-600" />
                          <span className="text-sm">{project.completedDate}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Success Metrics */}
                      <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
                        <div className="text-center">
                          <div className="text-sm text-green-600">{project.metrics.satisfaction}</div>
                          <div className="text-xs text-gray-500">{t.projectsPage.metrics.satisfaction}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-green-600">{project.metrics.budget}</div>
                          <div className="text-xs text-gray-500">{t.projectsPage.metrics.budget}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-green-600">
                            {project.metrics.onTime ? '✓' : '-'}
                          </div>
                          <div className="text-xs text-gray-500">{t.projectsPage.metrics.onTime}</div>
                        </div>
                      </div>

                      <Button 
                        className="w-full bg-gray-900 hover:bg-orange-600 transition-all duration-300 group"
                      >
                        <span className="group-hover:mr-2 transition-all duration-300">
                          {t.projectsPage.buttons.viewDetails}
                        </span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            {/* Ongoing Projects */}
            <TabsContent value="ongoing" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ongoingProjects.map((project, index) => (
                  <Link
                    href='/du-an/slug'
                    key={project.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Construction Animation Indicator */}
                    <div className="absolute top-2 left-2 z-10">
                      <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 animate-pulse">
                        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                        {t.projectsPage.badges.inProgress}
                      </div>
                    </div>

                    <div className="relative aspect-[4/3] overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-orange-600 hover:bg-orange-700 text-white">
                          <Clock className="h-3 w-3 mr-1" />
                          {project.progress}%
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl mb-2 group-hover:text-orange-600 transition-colors duration-300">
                        {project.name}
                      </h3>
                      
                      <div className="space-y-2 mb-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-orange-600" />
                          <span className="text-sm">{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Ruler className="h-4 w-4 text-orange-600" />
                          <span className="text-sm">{project.size} • {project.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-orange-600" />
                          <span className="text-sm">{t.projectsPage.labels.expectedCompletion}: {project.expectedCompletion}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">{t.projectsPage.labels.progress}</span>
                          <span className="text-sm text-orange-600">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                        <div className="mt-2">
                          <span className="text-xs text-gray-500">
                            {t.projectsPage.labels.currentPhase}: {project.phase}
                          </span>
                        </div>
                      </div>

                      <Button 
                        className="w-full bg-orange-600 hover:bg-orange-700 transition-all duration-300 group"
                      >
                        <span className="group-hover:mr-2 transition-all duration-300">
                          {t.projectsPage.buttons.viewProgress}
                        </span>
                        <TrendingUp className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">{t.projectsPage.testimonialsSection.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.projectsPage.testimonialsSection.subtitle}
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-gray-50 rounded-lg p-8 h-full hover:bg-orange-50 transition-all duration-300">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Award key={i} className="h-5 w-5 fill-orange-600 text-orange-600" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-orange-600 mt-1">{testimonial.project}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white hover:bg-orange-600 hover:text-white transition-all duration-300" />
            <CarouselNext className="right-0 bg-white hover:bg-orange-600 hover:text-white transition-all duration-300" />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Users className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl mb-6">{t.projectsPage.cta.title}</h2>
          <p className="text-xl mb-8 text-orange-100">
            {t.projectsPage.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href='/lien-he'>
              <Button 
                size="lg" 
                className="cursor-pointer bg-white text-orange-600 hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
              >
                {t.projectsPage.cta.primaryButton}
              </Button>
            </Link>
            <Link href="https://zalo.me/0987654321"
              target="_blank"
              rel="noopener noreferrer">
              <Button 
                size="lg" 
                variant="outline" 
                className="cursor-pointer bg-transparent border-white text-white hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-110"
              >
                {t.projectsPage.cta.secondaryButton}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
