import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Background from './components/Background';

function App() {

  // Custom smooth scroll for slower duration
  useEffect(() => {
    const smoothScroll = (targetId, duration = 2000) => {
      const target = document.querySelector(targetId);
      if (!target) return;

      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b; // Cubic ease-in
        t -= 2;
        return c / 2 * (t * t * t + 2) + b; // Cubic ease-out
      }

      requestAnimationFrame(animation);
    };

    const handleClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        smoothScroll(href, 1500); // 1.5s duration for slower scroll
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(anchor => anchor.addEventListener('click', handleClick));

    return () => {
      links.forEach(anchor => anchor.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <div className="min-h-screen text-[var(--text-main)] selection:bg-[var(--neon-cyan)] selection:text-black">
      <Background />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
