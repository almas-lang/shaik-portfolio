import dynamic from 'next/dynamic';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import EnablingBusinesses from './components/EnablingBusinesses';
import Experience from './components/Experience';

// Lazy load below-the-fold components for better performance
const BooksFrameworks = dynamic(() => import('./components/BooksFrameworks'), { ssr: true });
const Accolades = dynamic(() => import('./components/Accolades'), { ssr: true });
const Testimonials = dynamic(() => import('./components/Testimonials'), { ssr: true });
const AboutSection = dynamic(() => import('./components/AboutSection'), { ssr: true });
const ClientsSection = dynamic(() => import('./components/ClientsSection'), { ssr: true });
const FeaturedReads = dynamic(() => import('./components/FeaturedReads'), { ssr: true });
const ContactFooter = dynamic(() => import('./components/ContactFooter'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <EnablingBusinesses />
      <Experience />
      <BooksFrameworks />
      <Accolades />
      <Testimonials />
      <AboutSection />
      <ClientsSection />
      <FeaturedReads />
      <ContactFooter />
    </main>
  );
}
