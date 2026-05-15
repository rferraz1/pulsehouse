import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={center ? 'mx-auto text-center' : ''}
    >
      {eyebrow && (
        <span className="pill">
          <Sparkles size={16} /> {eyebrow}
        </span>
      )}
      <h2 className={`section-title ${center ? 'mx-auto' : ''}`}>{title}</h2>
      {text && <p className={`section-copy ${center ? 'mx-auto' : ''}`}>{text}</p>}
    </motion.div>
  );
}

export default SectionHeading;
