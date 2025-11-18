import Navigation from './components/Navigation';
import Hero from './components/Hero';
import EnablingBusinesses from './components/EnablingBusinesses';
import Experience from './components/Experience';
import BooksFrameworks from './components/BooksFrameworks';
import Accolades from './components/Accolades';
import Testimonials from './components/Testimonials';
import AboutSection from './components/AboutSection';
import ClientsSection from './components/ClientsSection';
import FeaturedReads from './components/FeaturedReads';
import ContactFooter from './components/ContactFooter';

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
