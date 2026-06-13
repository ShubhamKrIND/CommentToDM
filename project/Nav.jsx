// Top navigation. Sticky, white, minimal.
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full bg-white/90 backdrop-blur transition-all ${scrolled ? 'border-b border-line shadow-soft' : 'border-b border-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo />
          <span className="text-[15px] font-semibold text-ink-900 tracking-tight">CommentToDM</span>
          <span className="hidden xl:inline text-[11px] text-ink-500 ml-1">by Sbl.so</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {[
            ['How it works', '#how'],
            ['Use cases', '#cases'],
            ['Why us', '#why'],
            ['Creators', '#creators'],
            ['FAQ', '#faq'],
          ].map(([t, h]) => (
            <a key={h} href={h} className="rounded-md px-3 py-2 text-ink-700 hover:bg-surf-soft transition-colors">{t}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#" className="hidden md:inline-flex h-9 items-center whitespace-nowrap rounded-lg px-3 text-sm text-ink-700 hover:bg-surf-soft">Sign in</a>
          <a href="#cta" className="inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-[8px] bg-brand-500 px-3.5 text-sm font-medium text-white hover:bg-brand-600 shadow-soft transition-colors">
            Get started · $99/mo <I.ArrowRight size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  // Conceptual mark: a chat bubble whose tail becomes an arrow into a DM bubble.
  return (
    <span className="relative inline-flex h-8 w-8 items-center justify-center">
      <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
        <defs>
          <linearGradient id="lg1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#3657D5"/>
            <stop offset="1" stopColor="#1f3aa8"/>
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#lg1)"/>
        <path d="M7.5 10.5h11a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-6.2L9.5 21v-2H7.5a2 2 0 0 1-2-2v-4.5a2 2 0 0 1 2-2Z" fill="#fff" opacity=".95"/>
        <circle cx="11" cy="15" r="1" fill="#3657D5"/>
        <circle cx="14" cy="15" r="1" fill="#3657D5"/>
        <circle cx="17" cy="15" r="1" fill="#3657D5"/>
        <path d="M19 23.5h6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M22.5 21l2.5 2.5L22.5 26" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    </span>
  );
}

Object.assign(window, { Nav, Logo });
