import { motion } from 'framer-motion';
import { ArrowRight, Building2, Mail, Phone, User } from 'lucide-react';

const fields = [
  { label: 'Nome', icon: User, type: 'text', placeholder: 'Seu nome' },
  { label: 'Condomínio', icon: Building2, type: 'text', placeholder: 'Nome do condomínio' },
  { label: 'WhatsApp', icon: Phone, type: 'tel', placeholder: '(00) 00000-0000' },
  { label: 'E-mail', icon: Mail, type: 'email', placeholder: 'email@exemplo.com' },
];

function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65 }}
      className="glass-card rounded-[2rem] p-6 sm:p-8"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => {
          const Icon = field.icon;
          return (
            <label key={field.label} className="block">
              <span className="mb-2 block text-sm font-bold text-pulse-fog/72">{field.label}</span>
              <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-pulse-black/35 px-4 py-3 transition focus-within:border-pulse-mint/55">
                <Icon className="shrink-0 text-pulse-mint" size={19} />
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full border-0 bg-transparent text-white outline-none placeholder:text-pulse-fog/32"
                />
              </span>
            </label>
          );
        })}
      </div>
      <button type="submit" className="focus-ring mt-7 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-pulse-mint px-7 py-4 font-black text-pulse-black shadow-glow transition hover:bg-white">
        Solicitar Apresentação <ArrowRight size={19} />
      </button>
      <p className="mt-5 text-center text-sm font-medium text-pulse-fog/45">
        Sem backend por enquanto. Formulário preparado para integração futura.
      </p>
    </motion.form>
  );
}

export default ContactForm;
