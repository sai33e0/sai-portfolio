import React from 'react';
import { Navigation, Footer } from '../components';
import { Hero, About, Projects, Skills, Fun, Contact } from '../sections';

const navigationItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Fun', href: '#fun' },
  { name: 'Contact', href: '#contact' }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation items={navigationItems} />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Fun />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}