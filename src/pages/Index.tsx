
import React from 'react';
import Hero from '@/components/Hero';
import StarField from '@/components/StarField';
import Header from '@/components/Header';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const Index = () => {
  return (
    <div className="min-h-screen bg-dream-darker relative overflow-hidden">
      <StarField />
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
