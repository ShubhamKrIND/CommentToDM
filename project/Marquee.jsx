// "We're powering ..." horizontal marquee of who uses it.
function Marquee() {
  const items = [
    { t: 'Coaches & educators', i: <I.Sparkle size={14}/> },
    { t: 'Content creators', i: <I.MessageCircle size={14}/> },
    { t: 'Newsletter writers', i: <I.Mail size={14}/> },
    { t: 'Agency owners', i: <I.Users size={14}/> },
    { t: 'Course builders', i: <I.ClipboardList size={14}/> },
    { t: 'Founders & operators', i: <I.Rocket size={14}/> },
    { t: 'Career coaches', i: <I.TrendingUp size={14}/> },
    { t: 'B2B SaaS marketers', i: <I.AtSign size={14}/> },
  ];
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto max-w-7xl px-5 py-8">
        <p className="text-center text-[12px] uppercase tracking-[.16em] text-ink-400">
          Powering the "comment to get the link" trend on LinkedIn
        </p>
        <div className="relative mt-4 overflow-hidden"
             style={{ maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)' }}>
          <div className="marquee-track flex gap-3 w-max">
            {[...items, ...items, ...items].map((it, i) => (
              <span key={i} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] text-ink-800">
                <span className="text-brand-500">{it.i}</span>
                {it.t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Marquee });
