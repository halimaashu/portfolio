'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const dotRef = useRef(null);
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const lastMouse = useRef({ x: 0, y: 0 });
  const particles = useRef([]);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    setIsMounted(true);
    isTouchDevice.current = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice.current || !dotRef.current || !canvasRef.current) return;

    // Dot tracking
    const xToDot = gsap.quickTo(dotRef.current, "x", { duration: 0.1, ease: "power3" });
    const yToDot = gsap.quickTo(dotRef.current, "y", { duration: 0.1, ease: "power3" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouse.current = { x: clientX, y: clientY };
      xToDot(clientX);
      yToDot(clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = target.closest('a, button, .group, [role="button"]');
      setIsHovered(!!isClickable);
    };

    // Canvas Logic
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.baseSize = this.size;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.color = '#00d2b4';
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
        this.size = this.baseSize * this.life;
      }

      draw() {
        const radius = Math.max(0.1, this.size);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.max(0, this.life * 0.5);
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Spawn particles if mouse moved
      const dx = mouse.current.x - lastMouse.current.x;
      const dy = mouse.current.y - lastMouse.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 2) {
        for (let i = 0; i < 2; i++) {
          particles.current.push(new Particle(mouse.current.x, mouse.current.y));
        }
        lastMouse.current = { ...mouse.current };
      }

      // If hovered, spawn extra generative aura
      if (isHovered && Math.random() > 0.5) {
        particles.current.push(new Particle(mouse.current.x + (Math.random() - 0.5) * 40, mouse.current.y + (Math.random() - 0.5) * 40));
      }

      particles.current.forEach((particle, index) => {
        particle.update();
        if (particle.life <= 0 || particle.size <= 0) {
          particles.current.splice(index, 1);
        } else {
          particle.draw();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    resize();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered, isMounted]);

  if (!isMounted || (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches)) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Central Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-teal rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#00d2b4]"
        style={{ 
          transform: isHovered ? 'scale(4)' : 'scale(1)',
          backgroundColor: isHovered ? 'rgba(0, 210, 180, 0.2)' : '#00d2b4',
          transition: 'transform 0.3s, background-color 0.3s'
        }}
      />
    </div>
  );
};

export default CustomCursor;
