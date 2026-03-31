import { motion } from 'framer-motion';

const cards = [
  {
    tag: '01',
    title: 'Cinematic Motion',
    description: 'Micro-interactions and eased transforms maintain a smooth high-end rhythm.',
  },
  {
    tag: '02',
    title: 'Narrative Structure',
    description: 'Section-to-section flow is tuned for storytelling, not generic scrolling.',
  },
  {
    tag: '03',
    title: 'Premium Visual System',
    description: 'Subtle gradients, layered depth, and clear hierarchy create an elevated feel.',
  },
];

function FeatureCards() {
  const handleCardPointerMove = (event) => {
    const cardBounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - cardBounds.left;
    const y = event.clientY - cardBounds.top;
    event.currentTarget.style.setProperty('--spotlight-x', `${x}px`);
    event.currentTarget.style.setProperty('--spotlight-y', `${y}px`);
  };

  const handleCardPointerLeave = (event) => {
    event.currentTarget.style.setProperty('--spotlight-x', '50%');
    event.currentTarget.style.setProperty('--spotlight-y', '50%');
  };

  return (
    <section className="cards section-padding" id="features">
      <p className="eyebrow">Feature Highlights</p>
      <h2 className="section-title">Three premium components, one cohesive experience.</h2>

      <div className="cards-grid">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            className="feature-card"
            style={{ '--spotlight-x': '50%', '--spotlight-y': '50%' }}
            initial={{ opacity: 0, scale: 0.88, y: 36 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.01 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.65, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            onPointerMove={handleCardPointerMove}
            onPointerLeave={handleCardPointerLeave}
          >
            <div className="feature-card-top">
              <span className="feature-card-tag">{card.tag}</span>
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default FeatureCards;

