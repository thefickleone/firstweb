"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create parallax effect for each image
      gsap.utils.toArray(".gallery-item").forEach((item: any, i) => {
        gsap.to(item, {
          yPercent: -20 * (i + 1), // Each image moves at a different speed
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-20 text-right text-gradient">Visual Narratives</h2>
        <div className="grid grid-cols-2 gap-10">
          <div className="gallery-item glass h-[400px] rounded-3xl flex items-center justify-center text-gray-500">Project Alpha</div>
          <div className="gallery-item glass h-[600px] rounded-3xl mt-20 flex items-center justify-center text-gray-500">Project Beta</div>
          <div className="gallery-item glass h-[500px] rounded-3xl -mt-20 flex items-center justify-center text-gray-500">Project Gamma</div>
          <div className="gallery-item glass h-[400px] rounded-3xl flex items-center justify-center text-gray-500">Project Delta</div>
        </div>
      </div>
    </section>
  );
}
