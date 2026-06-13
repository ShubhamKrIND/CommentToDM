// "Built for creators": tabbed use-case switcher with a custom mock per tab.
function UseCases() {
  const cases = [
    { id: 'share',    label: 'Share resources',  icon: <I.ClipboardList size={14}/>,
      title: 'Share resources without a link-in-bio',
      body: 'Drop a valuable guide, template, or tool. Ask people to comment to get it. They get it instantly in their DMs — no Linktree, no friction.',
      quote: '"Comment TEMPLATE and I\'ll send my viral post framework straight to your DMs."',
      keyword: 'TEMPLATE',
      cta: 'Send my framework',
    },
    { id: 'connect',  label: 'Auto-connect', icon: <I.Users size={14}/>,
      title: 'Auto-connect with every engaged reader',
      body: 'Every commenter gets a personalized DM from you. You\'re not handing out a link — you\'re starting a 1-on-1 conversation with people who care.',
      quote: '"Comment CONNECT if you\'re building on LinkedIn. Let\'s exchange notes in the DMs."',
      keyword: 'CONNECT',
      cta: 'Open the DM',
    },
    { id: 'news',     label: 'Grow a newsletter', icon: <I.Mail size={14}/>,
      title: 'Grow your newsletter from LinkedIn posts',
      body: 'Use a comment trigger to hand off interested readers to your newsletter. Capture warm intent — not cold traffic — straight from your content.',
      quote: '"Comment SUBSCRIBE for the link to my weekly AI newsletter. 12K readers."',
      keyword: 'SUBSCRIBE',
      cta: 'Send subscribe link',
    },
    { id: 'wait',     label: 'Build waitlists', icon: <I.Calendar size={14}/>,
      title: 'Build waitlists for your next launch',
      body: 'Tease your cohort, course, or product. Keyword comments become your waitlist. You know exactly who\'s interested before you open the doors.',
      quote: '"Launching my AI cohort in 3 weeks. Comment COHORT to be first — early bird included."',
      keyword: 'COHORT',
      cta: 'Add to waitlist',
    },
    { id: 'viral',    label: 'Capture viral spikes', icon: <I.TrendingUp size={14}/>,
      title: 'Turn viral posts into an audience that stays',
      body: 'When a post blows up, comment triggers convert that spike into followers, DM conversations, and community — not just impressions that disappear.',
      quote: '"This post hit 200K views. Comment JOIN and I\'ll add you to my private creator group."',
      keyword: 'JOIN',
      cta: 'Invite to group',
    },
    { id: 'poll',     label: 'Run polls & AMAs', icon: <I.MessageCircle size={14}/>,
      title: 'Run polls, feedback rounds, AMAs',
      body: 'Post a question. Ask people to comment their answer. Route each response to a custom DM with a follow-up — research and community building, automated.',
      quote: '"Comment your biggest LinkedIn struggle. I\'ll DM you a specific tip based on what you share."',
      keyword: 'STRUGGLE',
      cta: 'Send my tip',
    },
  ];

  const [active, setActive] = React.useState(0);
  const c = cases[active];

  return (
    <section id="cases" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-[11px] font-semibold uppercase tracking-widest text-brand-500">Built for creators</p>
            <h2 className="mt-3 text-[28px] sm:text-[40px] leading-tight font-semibold text-ink-900 tracking-tight">
              What are LinkedIn creators actually doing with it?
            </h2>
            <p className="mt-4 text-[15.5px] text-ink-600 max-w-xl">
              From sharing resources to building a loyal audience — here's how creators use one trigger to do it all.
            </p>
          </div>
          <p className="text-[12px] text-ink-400">Click a use case to see it in action.</p>
        </div>

        {/* Tab strip */}
        <div className="mt-8 flex flex-wrap gap-2">
          {cases.map((cc, i) => (
            <button key={cc.id} onClick={() => setActive(i)}
              className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${active === i ? 'border-brand-500 bg-brand-500 text-white shadow-lift' : 'border-line bg-white text-ink-700 hover:bg-surf-soft'}`}>
              <span className={active === i ? 'text-white' : 'text-brand-500'}>{cc.icon}</span>
              {cc.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div key={c.id} className="tab-enter mt-8 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 items-start">
          <div>
            <h3 className="text-[22px] sm:text-[26px] font-semibold leading-tight text-ink-900 tracking-tight">{c.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-600 max-w-lg">{c.body}</p>

            <figure className="mt-6 rounded-2xl border border-line bg-surf-soft p-5">
              <I.MessageCircle size={18} className="text-brand-500"/>
              <blockquote className="mt-2 text-[15.5px] leading-relaxed text-ink-800">
                {c.quote}
              </blockquote>
              <figcaption className="mt-2 text-[12px] text-ink-500">Sample post copy you can steal.</figcaption>
            </figure>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-[12px] text-ink-500">Trigger keyword</span>
              <span className="rounded-md bg-brand-500 px-2 py-1 text-[12.5px] font-semibold text-white">{c.keyword}</span>
            </div>
          </div>

          {/* Mini chat preview */}
          <UseCasePreview c={c}/>
        </div>
      </div>
    </section>
  );
}

function UseCasePreview({ c }) {
  return (
    <div className="relative">
      <div className="absolute -inset-3 dots opacity-50 -z-10 rounded-3xl"/>
      <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden">
        <div className="flex items-center justify-between border-b border-line px-3 py-2">
          <div className="flex items-center gap-2">
            <I.Send size={12} className="text-brand-500"/>
            <span className="text-[12px] font-medium text-ink-800">DM preview</span>
          </div>
          <span className="text-[11px] text-ink-500">to {firstNameOf(c.id)}</span>
        </div>
        <div className="px-4 py-5 bg-[linear-gradient(180deg,#fff,#fafbff)]">
          <div className="flex items-center justify-center">
            <div className="rounded-full bg-brand-50 px-2.5 py-1 text-[10.5px] font-medium text-brand-500">
              Triggered by "{c.keyword}"
            </div>
          </div>
          <div className="mt-3 flex items-end gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-900 text-[10px] font-semibold text-white">YO</div>
            <div className="max-w-[320px] rounded-2xl rounded-bl-md bg-surf-soft px-3 py-2.5">
              <p className="text-[13px] text-ink-800">
                Hey <span className="font-semibold">{firstNameOf(c.id)}</span> 👋 — {bodyOf(c.id)}
              </p>
              <a href="#" className="mt-2 inline-flex items-center gap-1 text-[13px] font-medium text-brand-500">
                {ctaLinkOf(c.id)} <I.ArrowUpRight size={12}/>
              </a>
            </div>
          </div>
          <div className="mt-1 pr-9 text-right text-[10px] text-ink-400">Delivered · auto-replied</div>
        </div>

        <div className="grid grid-cols-3 border-t border-line text-center text-[11px]">
          <Stat label="Reach lift" value="3.4×"/>
          <Stat label="Reply rate" value="62%"/>
          <Stat label="DM cost" value="$0"/>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="px-2 py-3 border-r last:border-r-0 border-line">
      <p className="text-ink-500">{label}</p>
      <p className="mt-0.5 text-[14px] font-semibold text-ink-900">{value}</p>
    </div>
  );
}

function firstNameOf(id) {
  return { share: 'Marcus', connect: 'Priya', news: 'Liam', wait: 'Ananya', viral: 'Jordan', poll: 'Sofia' }[id];
}
function bodyOf(id) {
  return ({
    share:   'as promised, the viral post framework. Steal whatever you need:',
    connect: 'glad you commented! I\'d love to exchange notes — I\'ll go first:',
    news:    'thanks for commenting. Here\'s the link to the weekly AI newsletter:',
    wait:    'you\'re on the waitlist for the cohort. Early bird link below 👇',
    viral:   'you\'re in. Adding you to the private creator group now:',
    poll:    'based on what you shared, this is the one thing I\'d try this week:',
  })[id];
}
function ctaLinkOf(id) {
  return ({
    share: 'notion.so/viral-framework', connect: 'calendly.com/30-min',
    news: 'thealgo.beehiiv.com', wait: 'cohort.app/early-bird',
    viral: 'circle.so/creator-club', poll: 'docs.com/the-fix',
  })[id];
}

Object.assign(window, { UseCases });
