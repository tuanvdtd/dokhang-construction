'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 transition-all duration-500">
          <h2 className="text-4xl md:text-5xl mb-4">{t.contact.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30">
          {/* Contact Form */}
          {/* <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-500">
            <h3 className="text-2xl mb-6">{t.contact.form.title}</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm mb-2">
                    {t.contact.form.firstName}
                  </label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm mb-2">
                    {t.contact.form.lastName}
                  </label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  {t.contact.form.email}
                </label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm mb-2">
                  {t.contact.form.phone}
                </label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  {t.contact.form.message}
                </label>
                <Textarea
                  id="message"
                  placeholder={t.contact.form.messagePlaceholder}
                  rows={5}
                />
              </div>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                {t.contact.form.send}
              </Button>
            </form>
          </div> */}

          {/* Contact Information */}
          <div className="space-y-8">
             <h1 className="text-5xl md:text-6xl font-bold leading-snug uppercase mb-4 text-center md:text-left">Hà Nội</h1>
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl mb-6">{t.contact.info.title}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">{t.contact.info.address}</p>
                    <p className="text-gray-600">{t.contact.info.addressValue}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">{t.contact.info.phone}</p>
                    <p className="text-gray-600">{t.contact.info.phoneValue}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">{t.contact.info.email}</p>
                    <p className="text-gray-600">{t.contact.info.emailValue}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">{t.contact.info.hours}</p>
                    <p className="text-gray-600">{t.contact.info.hoursWeekday}</p>
                    <p className="text-gray-600">{t.contact.info.hoursSaturday}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-600 rounded-lg shadow-lg p-8 text-white hover:bg-orange-700 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl mb-4">{t.contact.emergency.title}</h3>
              <p className="mb-4">
                {t.contact.emergency.description}
              </p>
              <Link href='/lien-he'>
              <Button variant="outline" className="bg-white cursor-pointer text-orange-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                {t.contact.emergency.button}
              </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end -mt-4">
          <Image
            src="/S11.png"
            alt="Vietnam Map"
            width={700}
            height={700}
            className="w-full max-w-[500px] lg:max-w-[600px] object-contain"
          />
        </div>
        </div>
      </div>
    </section>
  );
}
