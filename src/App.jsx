import {
  Activity,
  ArrowRight,
  BrainCircuit,
  CalendarCheck,
  CheckCircle2,
  FileText,
  HeartPulse,
  Layers3,
  LockKeyhole,
  Menu,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  Video,
  X,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from './components/Header.jsx';
import SectionHeading from './components/SectionHeading.jsx';
import GlassCard from './components/GlassCard.jsx';
import PhoneMockup from './components/PhoneMockup.jsx';
import AppDashboard from './components/AppDashboard.jsx';
import BioPanel from './components/BioPanel.jsx';
import MethodologyFlow from './components/MethodologyFlow.jsx';
import ContactForm from './components/ContactForm.jsx';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Solução', href: '#solucao' },
  { label: 'Aplicativo', href: '#aplicativo' },
  { label: 'Bioimpedância', href: '#bioimpedancia' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Contato', href: '#contato' },
];

const foundations = [
  { icon: BrainCircuit, title: 'Tecnologia', text: 'Uma plataforma digital desenhada para orientar, engajar e acompanhar moradores com clareza.' },
  { icon: Users, title: 'Profissionalismo', text: 'Conteúdo estruturado por especialistas e comunicação pronta para condomínios ativos.' },
  { icon: ShieldCheck, title: 'Segurança', text: 'Treinos guiados, instruções objetivas e experiência pensada para uso responsável.' },
  { icon: HeartPulse, title: 'Acessibilidade', text: 'Rotinas para diferentes níveis, idades e objetivos, sem complicar a adoção.' },
];

const techCards = [
  { icon: Smartphone, title: 'Aplicativo exclusivo para moradores', text: 'Acesso simples, elegante e organizado para transformar a academia do condomínio em uma experiência acompanhada.' },
  { icon: Video, title: 'Vídeos instrutivos com legendas', text: 'Demonstrações claras para reduzir dúvidas e elevar segurança durante a prática.' },
  { icon: Layers3, title: 'Acesso universal para todos os níveis', text: 'Conteúdo segmentado para iniciantes, intermediários e usuários avançados.' },
];

const appFeatures = [
  'Demonstrações em vídeo',
  'Legendas explicativas',
  'Acesso 24h',
  'Conteúdo atualizado',
  'Perfis personalizados',
];

const condoBenefits = [
  { icon: LockKeyhole, title: 'Segurança garantida', text: 'Orientação visual e instruções reduzem improvisos e melhoram o uso dos equipamentos.' },
  { icon: Sparkles, title: 'Modernidade', text: 'Entrega uma percepção premium para moradores e reforça o posicionamento do empreendimento.' },
  { icon: FileText, title: 'Profissionalismo', text: 'Programa estruturado, com método e materiais prontos para apresentação e operação.' },
  { icon: HeartPulse, title: 'Bem-estar', text: 'Incentiva hábitos saudáveis, convivência e maior uso dos espaços comuns.' },
];

const differentials = [
  { title: 'Exclusividade', text: 'Solução pensada para a realidade dos condomínios residenciais, com linguagem e recursos próprios.' },
  { title: 'Tecnologia Premium', text: 'Aplicativo, relatórios e jornada digital que elevam a percepção de valor do condomínio.' },
  { title: 'Suporte Completo', text: 'Apoio comercial, conteúdo instrutivo e estrutura para implantação com administradoras e síndicos.' },
];

const stats = [
  { value: '100%', label: 'Segurança' },
  { value: '4ª', label: 'Geração' },
  { value: '24/7', label: 'Disponibilidade' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-radial-grid text-white">
      <div className="noise" />
      <Header
        navItems={navItems}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        MenuIcon={Menu}
        CloseIcon={X}
      />

      <main className="relative z-10">
        <section id="inicio" className="relative min-h-screen overflow-hidden pt-40">
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-pulse-mint/10 to-transparent" />
          <div className="container-pad grid min-h-[calc(100vh-7rem)] items-center gap-14 pb-16 lg:grid-cols-[1.05fr_.95fr]">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.75 }}>
              <span className="pill">
                <Activity size={16} /> Gestão Inteligente de Bem-Estar
              </span>
              <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Transforme seu condomínio em uma comunidade mais saudável
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-pulse-fog/78 sm:text-xl">
                Tecnologia, segurança e acompanhamento profissional para elevar o bem-estar dos moradores.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#solucao" className="focus-ring inline-flex items-center justify-center gap-3 rounded-full bg-pulse-mint px-7 py-4 font-bold text-pulse-black shadow-glow hover:bg-white">
                  Conhecer Solução <ArrowRight size={19} />
                </a>
                <a href="#beneficios" className="focus-ring inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-bold text-white hover:border-pulse-mint/50 hover:bg-pulse-mint/10">
                  Ver Benefícios
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ['24/7', 'App'],
                  ['100%', 'Segurança'],
                  ['4ª Geração', 'Bioimpedância'],
                ].map(([value, label]) => (
                  <div key={label} className="glass-card rounded-2xl px-5 py-4">
                    <strong className="block text-2xl font-black text-pulse-mint">{value}</strong>
                    <span className="text-sm font-medium text-pulse-fog/70">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.85, delay: 0.15 }} className="relative">
              <div className="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(82,255,189,.22),transparent_42%)]" />
                <div className="relative">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pulse-mint">Pulse Index</p>
                      <h2 className="mt-2 text-2xl font-black">Condomínio ativo</h2>
                    </div>
                    <div className="rounded-2xl border border-pulse-mint/25 bg-pulse-mint/10 p-3 text-pulse-mint">
                      <HeartPulse size={28} />
                    </div>
                  </div>
                  <svg viewBox="0 0 620 220" className="h-auto w-full overflow-visible">
                    <path d="M8 128 H92 L120 76 L157 174 L199 106 L238 128 H310 L344 52 L393 188 L438 95 L480 128 H612" fill="none" stroke="rgba(82,255,189,.95)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" className="heartbeat" />
                    <path d="M8 128 H92 L120 76 L157 174 L199 106 L238 128 H310 L344 52 L393 188 L438 95 L480 128 H612" fill="none" stroke="rgba(82,255,189,.16)" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <GlassCard icon={TrendingUp} title="+ Engajamento" text="Mais uso dos espaços fitness." compact />
                    <GlassCard icon={ShieldCheck} title="Menos risco" text="Orientação clara em cada treino." compact />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="solucao" className="section-pad">
          <div className="container-pad">
            <SectionHeading eyebrow="Conheça a PulseHouse" title="Saúde, tecnologia e gestão inteligente dentro do condomínio." text="A PulseHouse une tecnologia, saúde e gestão inteligente para transformar a experiência de bem-estar dentro dos condomínios residenciais." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {foundations.map((item, index) => <GlassCard key={item.title} {...item} index={index} />)}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white/[0.025]">
          <div className="container-pad grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
            <div>
              <SectionHeading eyebrow="Tecnologia que faz a diferença" title="Uma experiência digital simples para moradores e valiosa para a gestão." text="A plataforma reduz barreiras de uso, organiza o conteúdo e cria uma jornada de bem-estar mais segura, moderna e mensurável." />
              <div className="mt-10 grid gap-5">
                {techCards.map((item, index) => <GlassCard key={item.title} {...item} index={index} horizontal />)}
              </div>
            </div>
            <PhoneMockup />
          </div>
        </section>

        <section id="aplicativo" className="section-pad">
          <div className="container-pad grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <SectionHeading eyebrow="Aplicativo PulseHouse" title="Conteúdo fitness disponível a qualquer hora, com orientação visual e perfis personalizados." text="O morador encontra treinos, vídeos, legendas e recomendações em uma interface premium criada para gerar adesão real." />
              <div className="mt-8 grid gap-3">
                {appFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-pulse-fog">
                    <CheckCircle2 className="shrink-0 text-pulse-mint" size={20} />
                    <span className="font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <AppDashboard />
          </div>
        </section>

        <section id="bioimpedancia" className="section-pad bg-white/[0.025]">
          <div className="container-pad">
            <SectionHeading eyebrow="Bioimpedância 4ª Geração TeraScience" title="Dados corporais claros para orientar evolução, metas e acompanhamento profissional." text="Uma camada técnica e premium para transformar avaliações em relatórios acionáveis sobre composição corporal e metabolismo." />
            <BioPanel />
          </div>
        </section>

        <section id="beneficios" className="section-pad">
          <div className="container-pad">
            <SectionHeading eyebrow="Benefícios para o condomínio" title="Uma solução comercialmente forte para síndicos, administradoras e empreendimentos residenciais." text="A PulseHouse aumenta a percepção de valor da estrutura existente, melhora a experiência dos moradores e apoia uma gestão mais moderna dos espaços fitness." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {condoBenefits.map((item, index) => <GlassCard key={item.title} {...item} index={index} />)}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white/[0.025]">
          <div className="container-pad">
            <SectionHeading eyebrow="Diferenciais" title="O que torna a PulseHouse uma proposta diferente no mercado condominial." />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {differentials.map((item, index) => (
                <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={fadeUp} transition={{ duration: 0.55, delay: index * 0.08 }} className="glass-card rounded-3xl p-7">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-pulse-mint text-2xl font-black text-pulse-black">0{index + 1}</div>
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="mt-4 leading-7 text-pulse-fog/72">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="metodologia" className="section-pad">
          <div className="container-pad">
            <SectionHeading eyebrow="Nossa Metodologia" title="Um fluxo de implantação claro: avaliar, personalizar, praticar e acompanhar." />
            <MethodologyFlow />
          </div>
        </section>

        <section className="section-pad bg-white/[0.025]">
          <div className="container-pad">
            <div className="glass-card overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
                <div>
                  <span className="pill"><Zap size={16} /> Por que escolher a PulseHouse?</span>
                  <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">Impacto visível para moradores, gestão e valor percebido.</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-3xl border border-pulse-mint/15 bg-pulse-mint/[0.07] p-6 text-center">
                      <strong className="block text-4xl font-black text-pulse-mint sm:text-5xl">{stat.value}</strong>
                      <span className="mt-2 block font-semibold text-pulse-fog/75">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="section-pad">
          <div className="container-pad grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <SectionHeading eyebrow="Contato" title="Vamos transformar seu condomínio juntos?" text="Agende uma apresentação e descubra como a PulseHouse pode revolucionar o bem-estar dos moradores." />
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/5500000000000" className="focus-ring inline-flex items-center gap-3 rounded-full border border-pulse-mint/25 bg-pulse-mint/10 px-6 py-3 font-bold text-pulse-mint hover:bg-pulse-mint hover:text-pulse-black">
                  WhatsApp editável <ArrowRight size={18} />
                </a>
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-pulse-fog/70">
                  <CalendarCheck size={18} /> Apresentação comercial
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
