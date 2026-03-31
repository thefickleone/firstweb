import { motion } from 'framer-motion';

function ReducedMotionToggle({ reducedMotion, onToggle }) {
  return (
    <motion.button
      type="button"
      className="reduced-motion-toggle"
      onClick={onToggle}
      aria-pressed={reducedMotion}
      aria-label="Toggle reduced motion"
      initial={reducedMotion ? false : { opacity: 0, y: -12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={reducedMotion ? { duration: 0.01 } : { duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="toggle-label">Motion</span>
      <span className="toggle-value">{reducedMotion ? 'Reduced' : 'Full'}</span>
      <span className="toggle-hint">M</span>
    </motion.button>
  );
}

export default ReducedMotionToggle;

