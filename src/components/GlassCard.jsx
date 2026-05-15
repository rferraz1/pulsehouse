import { motion } from 'framer-motion';

function GlassCard({ icon: Icon, title, text, index = 0, horizontal = false, compact = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.52, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className={`glass-card rounded-3xl ${compact ? 'p-5' : 'p-6'} ${horizontal ? 'sm:flex sm:items-start sm:gap-5' : ''}`}
    >
      {Icon && (
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-pulse-mint/25 bg-pulse-mint/10 text-pulse-mint shadow-glow sm:mb-0">
          <Icon size={compact ? 22 : 26} />
        </div>
      )}
      <div>
        <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-black text-white`}>{title}</h3>
        <p className={`${compact ? 'mt-2 text-sm leading-6' : 'mt-4 leading-7'} text-pulse-fog/70`}>{text}</p>
      </div>
    </motion.article>
  );
}

export default GlassCard;
