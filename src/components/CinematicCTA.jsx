import { motion } from 'framer-motion';

function CinematicCTA() {
  return (
    <section className="cta section-padding" id="cta">
      <p className="eyebrow">Final Frame</p>
      <motion.p
        className="cta-line"
        initial={{ opacity: 0, y: 48, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        Build your next launch as a story worth scrolling.
      </motion.p>
      <motion.a
        className="cta-button"
        href="#hero"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        Replay Experience
      </motion.a>
    </section>
  );
}

export default CinematicCTA;

