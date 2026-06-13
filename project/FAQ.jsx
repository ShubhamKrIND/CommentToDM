function FAQ() {
  const items = [
    {
      q: 'Is this actually safe to use on LinkedIn?',
      a: "Yes, and this is the core reason CommentToDM exists. We don't scrape, spam, or simulate fake activity. We respond to real people who genuinely commented on your real post. LinkedIn sees healthy engagement, not automation. Zero bans across 4,800+ accounts.",
    },
    {
      q: 'Will my audience know it\'s automated?',
      a: "Not unless you want them to. Your message goes out in your voice, with their first name, in under 5 seconds. From their side, you just look like someone who's incredibly on top of their DMs. Most people are genuinely impressed.",
    },
    {
      q: 'Does it actually help my post reach more people?',
      a: "Yes, and this is the part most people don't realize at first. LinkedIn's algorithm distributes posts based on early engagement signals, especially comments. A comment trigger drives a sudden spike in comments, which tells LinkedIn the post is worth showing to more people. You get DM automation AND organic distribution.",
    },
    {
      q: 'Can I set different DMs for different posts?',
      a: "Absolutely. Each post can have its own keyword and its own DM. Run a resource delivery, a newsletter signup, and a waitlist flow all at the same time — completely separate.",
    },
    {
      q: 'What\'s the difference between this and just replying in the comments?',
      a: "Public comment replies are visible to everyone and don't start a private relationship. A DM moves the conversation to 1-on-1, where real connections get built. Plus, a public comment saying \"check your DMs!\" actually adds even more engagement to the post.",
    },
  ];

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
          <div>
            <p className="eyebrow text-[11px] font-semibold uppercase tracking-widest text-brand-500">Good questions</p>
            <h2 className="mt-3 text-[28px] sm:text-[40px] leading-tight font-semibold text-ink-900 tracking-tight">
              Things people ask before they sign up.
            </h2>
            <p className="mt-4 text-[15.5px] text-ink-600 max-w-md">
              Still have a question after this? Email us — we answer everything in under an hour during weekdays.
            </p>
            <a href="mailto:hi@commenttodm.com" className="mt-5 inline-flex h-10 items-center gap-1.5 rounded-[8px] border border-line bg-white px-3.5 text-[13.5px] font-medium text-ink-800 hover:bg-surf-soft transition-colors">
              <I.Mail size={14}/> hi@commenttodm.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            {items.map((it, i) => (
              <FAQItem key={i} q={it.q} a={it.a}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }) {
  return (
    <details className="group rounded-2xl border border-line bg-white open:bg-surf-soft transition-colors">
      <summary className="flex items-center justify-between gap-4 px-5 py-4">
        <span className="text-[15px] font-medium text-ink-900">{q}</span>
        <span className="chev flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white border border-line text-ink-700">
          <I.ChevronDown size={14}/>
        </span>
      </summary>
      <div className="px-5 pb-5 -mt-1 text-[14px] leading-relaxed text-ink-600">{a}</div>
    </details>
  );
}

Object.assign(window, { FAQ });
