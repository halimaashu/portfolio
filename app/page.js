import Hero from '../components/Hero';
import About from '../components/About';
import Qualifications from '../components/Qualifications';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export const metadata = {
  title: 'Ashikur Rahman | MERN Stack Developer',
  description: 'MERN Stack Developer building full-stack web apps with React, Next.js, Node.js, and MongoDB.',
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
