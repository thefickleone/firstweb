import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Cinematic Motion',
    description: 'Micro-interactions and eased transforms maintain a smooth high-end rhythm.',
  },
  {
    title: 'Narrative Structure',
    description: 'Section-to-section flow is tuned for storytelling, not generic scrolling.',
  },
  {
    title: 'Premium Visual System',
    description: 'Subtle gradients, layered depth, and clear hierarchy create an elevated feel.',
  },
];

function FeatureCards() {
  return (
    <section className="cards section-padding" id="features">
      <p className="eyebrow">Feature Highlights</p>
      <h2 className="section-title">Three premium components, one cohesive experience.</h2>

      <div className="cards-grid">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            className="feature-card"
            initial={{ opacity: 0, scale: 0.88, y: 36 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.65, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default FeatureCards;

