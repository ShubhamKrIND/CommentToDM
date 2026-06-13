function FinalCTA() {
  return (
    <section id="cta" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
        <div className="relative overflow-hidden rounded-[28px] border border-line bg-brand-900 text-white px-6 sm:px-12 py-14 sm:py-16">
          <div aria-hidden className="absolute inset-0 grid-bg opacity-[.08]"/>
          <div aria-hidden className="absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full bg-brand-500/40 blur-3xl"/>
          <div aria-hidden className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-brand-500/20 blur-3xl"/>

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/[.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/80">
                <I.Rocket size={12}/> Start in 5 minutes
              </span>
              <h2 className="mt-4 text-[34px] sm:text-[48px] leading-[1.05] font-semibold tracking-tight">
                Post it. Trigger it. Watch your LinkedIn grow.
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-white/75 max-w-xl">
                Set up in 5 minutes. Runs on every post, forever. One flat price. Just more reach, more connections, and more conversations — automatically.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a href="#" className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-white px-5 text-[15px] font-semibold text-brand-900 hover:bg-white/90 transition-colors">
                  Get started at $99/mo <I.ArrowRight size={16}/>
                </a>
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl text-[12.5px] text-white/70">
                <Bullet>$99/month flat</Bullet>
                <Bullet>Cancel anytime</Bullet>
                <Bullet>5-minute setup</Bullet>
                <Bullet>Zero-ban record</Bullet>
              </div>
            </div>

            {/* Decorative mini-mock */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl border border-white/15 bg-white/[.06] backdrop-blur p-4 shadow-card">
                <div className="flex items-center justify-between text-[11px] text-white/70">
                  <span>Today's run</span>
                  <span className="inline-flex h-5 items-center gap-1 rounded-full bg-[#D2F3D6] px-2 text-[10.5px] font-semibold text-[#2E6E28]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2E6E28]"/> Healthy
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <MiniStat n="184" l="Comments"/>
                  <MiniStat n="181" l="DMs sent"/>
                  <MiniStat n="62%" l="Reply rate"/>
                </div>
                <div className="mt-3 rounded-xl bg-white/[.06] p-3">
                  <div className="flex items-center gap-2 text-[11px] text-white/70">
                    <I.MessageCircle size={11}/> Last commenter
                  </div>
                  <p className="mt-1 text-[12.5px] text-white">"GUIDE — please send 🙏"</p>
                  <p className="mt-1 text-[10.5px] text-white/60">DM delivered · 4s ago</p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 rotate-3 rounded-xl border border-white/15 bg-white/[.08] backdrop-blur px-3 py-2 text-[11.5px] text-white">
                <span className="font-semibold">+312</span> creators joined this week
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bullet({ children }) {
  return <span className="inline-flex items-center gap-1.5"><I.Check size={12} className="text-white"/>{children}</span>;
}
function MiniStat({ n, l }) {
  return (
    <div className="rounded-lg bg-white/[.06] px-2 py-2">
      <p className="text-[16px] font-semibold text-white">{n}</p>
      <p className="text-[10.5px] text-white/60">{l}</p>
    </div>
  );
}

Object.assign(window, { FinalCTA });
