import { motion } from 'framer-motion';
import { Activity, Dumbbell, Flame, PlayCircle } from 'lucide-react';

const sessions = [
  { icon: Dumbbell, title: 'Treino funcional', level: 'Intermediário', progress: '72%' },
  { icon: Activity, title: 'Mobilidade guiada', level: 'Iniciante', progress: '48%' },
  { icon: Flame, title: 'Cardio seguro', level: 'Avançado', progress: '86%' },
];

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 34 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="relative mx-auto w-full max-w-[420px]"
    >
      <div className="absolute -inset-8 rounded-full bg-pulse-mint/10 blur-3xl" />
      <div className="relative rounded-[2.5rem] border border-white/15 bg-black p-3 shadow-glass">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-pulse-deep to-pulse-black p-5">
          <div className="mx-auto mb-5 h-1.5 w-24 rounded-full bg-white/20" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-pulse-mint">Hoje</p>
              <h3 className="mt-1 text-2xl font-black">Plano do morador</h3>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pulse-mint text-pulse-black">
              <PlayCircle size={25} />
            </div>
          </div>
          <div className="mt-6 rounded-3xl border border-pulse-mint/20 bg-pulse-mint/10 p-5">
            <p className="text-sm font-semibold text-pulse-fog/70">Score de rotina</p>
            <div className="mt-3 flex items-end gap-3">
              <strong className="text-5xl font-black text-pulse-mint">91</strong>
              <span className="mb-2 font-semibold text-pulse-fog/70">/100</span>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {sessions.map((session) => {
              const Icon = session.icon;
              return (
                <div key={session.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-pulse-mint">
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="truncate font-bold">{session.title}</h4>
                      <p className="text-xs font-semibold text-pulse-fog/55">{session.level}</p>
                    </div>
                    <span className="text-sm font-black text-pulse-mint">{session.progress}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PhoneMockup;
