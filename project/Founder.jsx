function Founder() {
  return (
    <section className="relative bg-brand-900 text-white overflow-hidden">
      <div aria-hidden className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-brand-500/30 blur-3xl"/>
      <div aria-hidden className="absolute -bottom-32 -right-20 h-[420px] w-[420px] rounded-full bg-brand-500/20 blur-3xl"/>
      <div aria-hidden className="absolute inset-0 grid-bg opacity-[.07]"/>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <div>
            <p className="eyebrow text-[11px] font-semibold uppercase tracking-widest text-brand-50">For founders</p>
            <h2 className="mt-3 text-[28px] sm:text-[40px] leading-[1.1] font-semibold tracking-tight">
              Founder? Your comments are already warm leads.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-white/75 max-w-lg">
              When someone comments on your thought-leadership post, they're already interested in what you do. Route every commenter into a private conversation — share a demo link, book a call, or send a case study. No cold outreach. They came to you first.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#cta" className="inline-flex h-11 items-center gap-1.5 rounded-[10px] bg-white px-4 text-[14px] font-medium text-brand-900 hover:bg-white/90 transition-colors">
                Get started at $99/mo <I.ArrowRight size={14}/>
              </a>
            </div>
          </div>

          <FounderFlow/>
        </div>
      </div>
    </section>
  );
}

function FounderFlow() {
  // Three nodes: Comment -> Routed -> Action. Light cards with subtle motion.
  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <FlowCard
          eyebrow="01 Comment"
          title={"\"Curious how this scales beyond 10 reps\""}
          sub="On a thought-leadership post"
          icon={<I.MessageCircle size={14}/>}
        />
        <FlowCard
          eyebrow="02 Routed"
          title="Auto-DM with intro + demo link"
          sub="Personalized with their name + company"
          icon={<I.Send size={14}/>}
          highlight
        />
        <FlowCard
          eyebrow="03 Action"
          title="Books a 20-min call"
          sub="Avg. response in 6 minutes"
          icon={<I.Calendar size={14}/>}
        />
      </div>

      <div className="mt-6 rounded-2xl border border-white/15 bg-white/[.04] p-4">
        <p className="text-[12px] uppercase tracking-wider text-white/60">Real founder triggers in production</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {['DEMO','PRICING','CASE STUDY','INVEST','HIRE','PILOT'].map(k => (
            <span key={k} className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/[.06] px-2 py-1 text-[11.5px] text-white">
              <span className="text-brand-50">"</span>{k}<span className="text-brand-50">"</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function FlowCard({ eyebrow, title, sub, icon, highlight }) {
  return (
    <div className={`rounded-2xl border p-4 lift ${highlight ? 'border-white/30 bg-white/[.08]' : 'border-white/15 bg-white/[.04]'}`}>
      <div className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-wider text-white/60">
        <span className={highlight ? 'text-white' : 'text-brand-50'}>{icon}</span>
        {eyebrow}
      </div>
      <p className="mt-2 text-[13.5px] font-medium leading-snug">{title}</p>
      <p className="mt-1 text-[12px] text-white/60">{sub}</p>
    </div>
  );
}

Object.assign(window, { Founder });
