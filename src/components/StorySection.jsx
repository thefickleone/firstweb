import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const beats = [
  {
    title: 'Open with confidence',
    body: 'A focused beginning sets tone instantly with deliberate spacing, light, and intent.',
  },
  {
    title: 'Guide attention naturally',
    body: 'The sticky narrative panel keeps context grounded while the story unfolds through motion.',
  },
  {
    title: 'End on momentum',
    body: 'Each section transitions with restraint so the final call-to-action lands with impact.',
  },
];

function StorySection({ reducedMotion }) {
  const sectionRef = useRef(null);
  const [activeBeat, setActiveBeat] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const index = Math.min(beats.length - 1, Math.floor(latest * beats.length));
    setActiveBeat((currentBeat) => (currentBeat === index ? currentBeat : index));
  });

  return (
    <section className="story-wrapper" ref={sectionRef}>
      <div className="story-sticky section-padding">
        <div className="story-grid">
          <div className="story-rail" aria-hidden="true">
            <motion.span className="story-progress" style={{ scaleY: lineScale }} />
          </div>
          <div>
            <p className="eyebrow">Sticky Story Section</p>
            <div className="story-stage">
              {beats.map((beat, index) => (
                <motion.article
                  key={beat.title}
                  className="story-beat"
                  animate={{
                    opacity: activeBeat === index ? 1 : 0.18,
                    y: reducedMotion ? 0 : activeBeat === index ? 0 : 18,
                    filter: reducedMotion ? 'none' : activeBeat === index ? 'blur(0px)' : 'blur(1px)',
                  }}
                  transition={{ duration: reducedMotion ? 0.2 : 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                >
                  <h2>{beat.title}</h2>
                  <p>{beat.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;

