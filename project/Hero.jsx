function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Grid backdrop */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[520px] grid-bg pointer-events-none"/>
      <div aria-hidden className="absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full bg-brand-500/5 blur-3xl pointer-events-none"/>

      <div className="relative mx-auto max-w-7xl px-5 pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-10 items-start">
          {/* Copy column */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-[12px] text-ink-700 shadow-soft">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-[#2E6E28]"/>
                <span className="absolute inset-0 rounded-full bg-[#2E6E28] animate-ping opacity-60"/>
              </span>
              4,800+ creators sending DMs on autopilot
            </div>

            <h1 className="mt-5 text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.04] tracking-[-0.022em] font-semibold text-ink-900">
              LinkedIn's only{' '}
              <span className="relative inline-block">
                <span className="relative z-10">sustainable</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1 h-[10px] sm:h-[14px] bg-brand-500/15 rounded-sm -skew-x-3"/>
              </span>{' '}
              comment-to-DM tool.
            </h1>

            <p className="mt-5 text-[16.5px] leading-relaxed text-ink-600 max-w-[34rem]">
              Every creator telling you <em className="text-ink-800 not-italic">"comment X to get the link"</em> is running CommentToDM. Auto-reply to every comment, grow your reach, and build real connections. On autopilot.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#cta" className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-brand-500 px-5 text-[15px] font-medium text-white shadow-lift hover:bg-brand-600 transition-colors">
                Get started at $99/mo <I.ArrowRight size={16}/>
              </a>
              <a href="#how" className="inline-flex h-12 items-center justify-center gap-2 text-[14px] font-medium text-ink-600 hover:text-ink-900 transition-colors">
                <I.Play size={13}/> See how it works
              </a>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 max-w-md text-[12px] text-ink-500">
              <Trust label="5 min setup" icon={<I.Zap size={12}/>}/>
              <Trust label="Cancel anytime" icon={<I.Check size={12}/>}/>
              <Trust label="Zero bans, ever" icon={<I.Shield size={12}/>}/>
            </div>


          </div>

          {/* Interactive demo */}
          <div className="relative">
            <HeroDemo/>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust({ label, icon }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-brand-500">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

Object.assign(window, { Hero });
