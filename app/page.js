import Hero from '../components/Hero';
import About from '../components/About';
import Qualifications from '../components/Qualifications';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export const metadata = {
  title: 'MD. Ashikur Rahman Ashik | Portfolio',
  description: 'Freelance Front-end Web Developer with 3+ years of experience.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Qualifications />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
