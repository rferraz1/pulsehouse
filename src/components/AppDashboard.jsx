import { motion } from 'framer-motion';
import { Activity, BarChart3, Dumbbell, PlayCircle, Target, Video } from 'lucide-react';

function AppDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="glass-card overflow-hidden rounded-[2rem] p-5 sm:p-7"
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-pulse-mint">Dashboard App</p>
          <h3 className="mt-2 text-2xl font-black">Experiência do morador</h3>
        </div>
        <div className="flex gap-2">
          {[Activity, Video, Target].map((Icon, index) => (
            <div key={index} className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-pulse-mint">
              <Icon size={20} />
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-3xl border border-white/10 bg-pulse-black/45 p-5">
          <div className="aspect-video rounded-2xl border border-pulse-mint/20 bg-[radial-gradient(circle_at_30%_20%,rgba(82,255,189,.24),transparent_35%),linear-gradient(135deg,rgba(255,255,255,.1),rgba(255,255,255,.02))] p-5">
            <div className="flex h-full items-end justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-black/35 px-3 py-2 text-sm font-bold text-pulse-mint">
                  <PlayCircle size={16} /> Aula guiada
                </span>
                <h4 className="mt-4 max-w-sm text-2xl font-black">Força e postura na academia</h4>
              </div>
              <div className="hidden h-16 w-16 items-center justify-center rounded-full bg-pulse-mint text-pulse-black sm:flex">
                <PlayCircle size={34} />
              </div>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {['Legenda', 'Séries', 'Nível'].map((label, index) => (
              <div key={label} className="rounded-2xl bg-white/[0.055] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-pulse-fog/45">{label}</p>
                <p className="mt-2 font-black text-white">{['Ativa', '3x12', 'Moderado'][index]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-5">
            <div className="flex items-center gap-3">
              <BarChart3 className="text-pulse-mint" />
              <h4 className="font-black">Evolução semanal</h4>
            </div>
            <div className="mt-6 flex h-36 items-end gap-3">
              {[42, 68, 55, 88, 74, 96].map((height, index) => (
                <div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-pulse-green/40 to-pulse-mint" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-5">
            <div className="flex items-center gap-3">
              <Dumbbell className="text-pulse-mint" />
              <div>
                <h4 className="font-black">Treino atualizado</h4>
                <p className="text-sm text-pulse-fog/58">Novo ciclo disponível no app.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AppDashboard;
