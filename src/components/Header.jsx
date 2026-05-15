import { Activity, ArrowRight } from 'lucide-react';

function Header({ navItems, mobileOpen, setMobileOpen, MenuIcon, CloseIcon }) {
  const closeMenu = () => setMobileOpen(false);
  const ToggleIcon = mobileOpen ? CloseIcon : MenuIcon;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-pulse-black/72 backdrop-blur-2xl">
      <nav className="container-pad flex h-20 items-center justify-between">
        <a href="#inicio" onClick={closeMenu} className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-pulse-mint/35 bg-pulse-mint/12 text-pulse-mint shadow-glow">
            <Activity size={24} />
          </div>
          <div>
            <span className="block text-xl font-black tracking-tight">PulseHouse</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-pulse-mint/80">Wellness Tech</span>
          </div>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-semibold text-pulse-fog/72 transition hover:bg-white/[0.07] hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contato" className="focus-ring hidden items-center gap-2 rounded-full bg-pulse-mint px-5 py-3 text-sm font-black text-pulse-black shadow-glow transition hover:bg-white lg:inline-flex">
          Agendar Apresentação <ArrowRight size={17} />
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
        >
          <ToggleIcon size={22} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-pulse-black/96 px-5 py-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu} className="rounded-2xl px-4 py-3 font-semibold text-pulse-fog/80 hover:bg-white/[0.07] hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#contato" onClick={closeMenu} className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-pulse-mint px-5 py-4 font-black text-pulse-black">
              Agendar Apresentação <ArrowRight size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
