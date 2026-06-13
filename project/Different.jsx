function Different() {
  const reasons = [
    {
      tag: 'Zero-ban record',
      title: 'Zero bans across 4,800+ accounts',
      body: "We have never had an account flagged, restricted, or banned. Not one. Because we only trigger DMs from genuine comment interactions — exactly what LinkedIn wants.",
      icon: <I.Shield size={18}/>,
      stat: '0 bans',
    },
    {
      tag: 'No scraping',
      title: 'No scraping. No fake engagement.',
      body: 'Other tools simulate activity. We respond to real comments in real-time. LinkedIn\'s systems see healthy, authentic engagement — and reward your content for it.',
      icon: <I.Lock size={18}/>,
      stat: 'Real comments only',
    },
    {
      tag: 'Algo-aligned',
      title: 'Comment volume tells the algo your post is hot',
      body: 'The more comments your trigger generates, the more LinkedIn pushes your post to new audiences. You\'re not just automating DMs — you\'re engineering distribution.',
      icon: <I.TrendingUp size={18}/>,
      stat: 'Engineered distribution',
    },
  ];

  return (
    <section id="why" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
        <div className="flex flex-col items-start gap-3 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/20 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand-500">
            <I.Sparkles size={12}/> Industry-first
          </span>
          <h2 className="text-[28px] sm:text-[40px] leading-tight font-semibold text-ink-900 tracking-tight">
            The only tool that does this without getting you banned.
          </h2>
          <p className="text-[15.5px] text-ink-600">
            Every other LinkedIn automation tool runs the same risk: scraping, fake activity, ToS violations. We built the only system that works <em className="not-italic font-medium text-ink-900">with</em> LinkedIn's algorithm — not around it.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {reasons.map((r, i) => <ReasonCard key={i} {...r}/>)}
        </div>

        <Compare/>
      </div>
    </section>
  );
}

function ReasonCard({ tag, title, body, icon, stat }) {
  return (
    <div className="lift relative overflow-hidden rounded-2xl border border-line bg-white p-6 flex flex-col">
      <div className="flex items-center justify-between">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-500">{icon}</span>
        <span className="rounded-md bg-surf-soft px-2 py-0.5 text-[11px] font-medium text-ink-600">{tag}</span>
      </div>
      <h3 className="mt-4 text-[17px] font-semibold leading-snug text-ink-900">{title}</h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600 flex-1">{body}</p>
      <div className="mt-4 pt-4 border-t border-line flex items-center justify-between">
        <span className="text-[12.5px] font-medium text-ink-800">{stat}</span>
        <span className="inline-flex h-6 items-center gap-1 rounded-full bg-[#D2F3D6] px-2 text-[10.5px] font-semibold text-[#2E6E28]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2E6E28]"/> Verified
        </span>
      </div>
    </div>
  );
}

Object.assign(window, { Different });
