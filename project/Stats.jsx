// Big-number stats. Numbers animate in on view.
function Stats() {
  const stats = [
    { num: '3×', label: 'More reach', sub: 'on posts that use a comment trigger' },
    { num: '<30 min', label: 'DM delivery', sub: 'from comment to message landing' },
    { num: '0', label: 'Bans, restrictions or flags', sub: 'across the entire network. Ever.' },
    { num: '4,800+', label: 'Creators', sub: 'growing on LinkedIn with us' },
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow text-[11px] font-semibold uppercase tracking-widest text-brand-500">The numbers</p>
          <h2 className="mt-3 text-[28px] sm:text-[36px] leading-tight font-semibold text-ink-900 tracking-tight">
            Built for your distribution. <span className="text-ink-500">Obsessive about safety.</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} index={i}/>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ num, label, sub, index }) {
  return (
    <div className="lift relative overflow-hidden rounded-2xl border border-line bg-white p-6">
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand-500/5"/>
      <p className="relative text-[44px] leading-none font-semibold text-ink-900 tracking-tight">{num}</p>
      <p className="relative mt-3 text-[14px] font-medium text-ink-800">{label}</p>
      <p className="relative mt-1 text-[13px] text-ink-500 leading-snug">{sub}</p>
    </div>
  );
}

Object.assign(window, { Stats });
