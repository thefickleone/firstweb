"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: ".feature-grid",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const features = [
    { title: "Next-Gen 3D", desc: "Immersive WebGL experiences." },
    { title: "Fluid Motion", desc: "High-performance GSAP animations." },
    { title: "Glass UI", desc: "Modern frosted-glass aesthetics." }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-gradient">Core Capabilities</h2>
        <div className="feature-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="feature-card glass p-10 rounded-3xl">
              <div className="h-12 w-12 bg-blue-600 rounded-xl mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-white">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
