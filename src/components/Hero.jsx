import { motion } from 'framer-motion';

function Hero({ reducedMotion }) {
  return (
    <section className="hero section-padding" id="hero">
      <div className="hero-gradient" aria-hidden="true" />
      <div className="hero-meta">
        <span className="hero-mode-badge" aria-live="polite">
          Motion: {reducedMotion ? 'Reduced' : 'Full'}
        </span>
      </div>
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Cinematic Landing Experience
      </motion.p>
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 38 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.05, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      >
        Scrollytelling <span className="hero-title-glow">Demo</span>
      </motion.h1>
      <motion.p
        className="hero-copy"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        Premium pacing, rich typography, and fluid interactions shaped for modern product storytelling.
      </motion.p>
      <motion.div
        className="hero-scroll-cue"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.2, 0.65, 0.3, 0.9] }}
      >
        <span>Scroll to explore</span>
        <span className="hero-scroll-line" aria-hidden="true" />
      </motion.div>
    </section>
  );
}

export default Hero;

