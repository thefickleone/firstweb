import { motion } from 'framer-motion';

function CinematicCTA() {
  return (
    <section className="cta section-padding" id="cta">
      <motion.p
        className="cta-line"
        initial={{ opacity: 0, y: 48, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        Build your next launch as a story worth scrolling.
      </motion.p>
    </section>
  );
}

export default CinematicCTA;

