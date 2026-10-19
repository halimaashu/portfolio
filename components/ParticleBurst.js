'use client';

import React, { useState, useCallback, useEffect } from 'react';
import gsap from 'gsap';

const ParticleBurst = () => {
  const [bursts, setBursts] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  const createBurst = useCallback((e) => {
    const target = e.target;
    if (!target.closest('a, button, .group, [role="button"]')) return;

    const id = Date.now();
    const x = e.clientX;
    const y = e.clientY;
    
    const newBurst = { id, x, y };
    setBursts((prev) => [...prev, newBurst]);

    // Cleanup after animation
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== id));
    }, 2000);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    window.addEventListener('click', createBurst);
    return () => window.removeEventListener('click', createBurst);
  }, [createBurst]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000] overflow-hidden">
      {bursts.map((burst) => (
        <BurstEffect key={burst.id} x={burst.x} y={burst.y} />
      ))}
    </div>
  );
};

const BurstEffect = ({ x, y }) => {
  const containerRef = React.useRef(null);
  const petals = Array.from({ length: 10 });

  useEffect(() => {
    const elements = containerRef.current.children;
    
    gsap.fromTo(elements, 
      { 
        x: 0, 
        y: 0, 
        opacity: 1, 
        scale: 0.5,
        rotation: 0
      },
      {
        x: (i) => Math.cos((i / elements.length) * Math.PI * 2) * (100 + Math.random() * 50),
        y: (i) => Math.sin((i / elements.length) * Math.PI * 2) * (100 + Math.random() * 50),
        opacity: 0,
        scale: 1.5,
        rotation: () => Math.random() * 360,
        duration: 1.5,
        stagger: 0.02,
        ease: "power2.out"
      }
    );
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute" 
      style={{ left: x, top: y }}
    >
      {petals.map((_, i) => (
        <div 
          key={i}
          className="absolute w-4 h-6 bg-[#731cb2]/50 border border-[#5a2aac] rounded-full blur-[1px] shadow-[0_0_12px_rgba(115,28,178,0.5)]"
          style={{ 
            backdropFilter: 'blur(4px)',
            transform: `rotate(${(i / petals.length) * 360}deg)`,
            transformOrigin: 'center'
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBurst;
