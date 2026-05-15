import { motion } from 'framer-motion';
import { Atom, BarChart3, Droplets, FileText, Gauge, ScanLine, ShieldCheck } from 'lucide-react';
import GlassCard from './GlassCard.jsx';

const bioCards = [
  { icon: ScanLine, title: 'Tecnologia de precisão', text: 'Leitura técnica para apoiar decisões com dados corporais objetivos.' },
  { icon: Atom, title: 'Análise completa do corpo', text: 'Visão consolidada de massa, gordura, água e indicadores metabólicos.' },
  { icon: FileText, title: 'Relatórios profissionais', text: 'Resultados organizados para acompanhamento e comunicação clara.' },
];

const metrics = [
  { label: 'Composição corporal', value: '360°', icon: BarChart3 },
  { label: 'Massa muscular', value: 'Lean', icon: ShieldCheck },
  { label: 'Gordura corporal', value: '% Fat', icon: Gauge },
  { label: 'Água corporal', value: 'Hydro', icon: Droplets },
  { label: 'Metabolismo basal', value: 'BMR', icon: Atom },
];

function BioPanel() {
  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
      <div className="grid gap-5">
        {bioCards.map((item, index) => <GlassCard key={item.title} {...item} index={index} horizontal />)}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(82,255,189,.18),transparent_34%)]" />
        <div className="relative">
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-pulse-mint">TeraScience</p>
              <h3 className="mt-2 text-3xl font-black">Bioimpedância 4ª geração</h3>
            </div>
            <div className="rounded-2xl border border-pulse-mint/25 bg-pulse-mint/10 px-4 py-3 text-sm font-black text-pulse-mint">
              Relatório técnico
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div key={metric.label} className="rounded-3xl border border-white/10 bg-pulse-black/35 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <Icon className="text-pulse-mint" size={23} />
                    <strong className="text-xl font-black text-pulse-mint">{metric.value}</strong>
                  </div>
                  <p className="font-bold text-pulse-fog/82">{metric.label}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-3xl border border-pulse-mint/20 bg-pulse-mint/[0.075] p-5">
            <div className="flex items-center justify-between gap-5">
              <div>
                <p className="text-sm font-semibold text-pulse-fog/62">Índice de acompanhamento</p>
                <h4 className="mt-1 text-2xl font-black">Evolução corporal com clareza</h4>
              </div>
              <strong className="text-4xl font-black text-pulse-mint">98%</strong>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default BioPanel;
