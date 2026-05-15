import { motion } from 'framer-motion';
import { Activity, ClipboardCheck, HeartHandshake, SlidersHorizontal } from 'lucide-react';

const steps = [
  { icon: ClipboardCheck, title: 'Avaliação', text: 'Entendimento da estrutura, público e objetivos do condomínio.' },
  { icon: SlidersHorizontal, title: 'Personalização', text: 'Definição de rotinas, conteúdos e jornada mais aderente aos moradores.' },
  { icon: Activity, title: 'Prática', text: 'Uso do app, vídeos instrutivos e treinos guiados nos espaços fitness.' },
  { icon: HeartHandshake, title: 'Acompanhamento', text: 'Relatórios, suporte e evolução contínua para sustentar adesão.' },
];

function MethodologyFlow() {
  return (
    <div className="relative mt-14">
      <div className="absolute left-1/2 top-16 hidden h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-pulse-mint/45 to-transparent lg:block" />
      <div className="grid gap-6 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.58, delay: index * 0.08 }}
              className="relative rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-2xl"
            >
              <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-pulse-mint/25 bg-pulse-black text-pulse-mint shadow-glow">
                <Icon size={30} />
              </div>
              <span className="text-sm font-black uppercase tracking-[0.24em] text-pulse-mint">Etapa {index + 1}</span>
              <h3 className="mt-3 text-2xl font-black">{step.title}</h3>
              <p className="mt-4 leading-7 text-pulse-fog/70">{step.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default MethodologyFlow;
