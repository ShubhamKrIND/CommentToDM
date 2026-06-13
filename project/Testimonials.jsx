function Testimonials() {
  const items = [
    {
      quote: "I used to manually copy-paste DM links for 45 minutes after every big post. Now it's zero effort. One post with a comment trigger and 300 people got my playbook in their DMs before I even checked my phone.",
      name: 'Olivia Bennett', role: 'Creator & career coach', followers: '41K followers',
      stat: ['300 DMs', 'before lunch'],
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      avatarTone: 'from-[#ff7a59] to-[#c64533]',
    },
    {
      quote: "My reach literally tripled after I started using comment triggers. The algorithm sees the engagement spike and pushes the post to people who don't follow me. Best reach hack on LinkedIn right now.",
      name: 'Daniel Carter', role: 'LinkedIn creator · AI & Tech', followers: '28K followers',
      stat: ['3.2×', 'reach lift'],
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      avatarTone: 'from-brand-500 to-brand-900',
    },
    {
      quote: "I grew my newsletter by 800 subscribers in one month just from LinkedIn posts with comment triggers. Every commenter got a DM with my signup link. Nothing else changed. This tool is insane.",
      name: 'Emma Walker', role: 'Newsletter creator', followers: '19K followers',
      stat: ['+800 subs', 'in 30 days'],
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      avatarTone: 'from-[#7a5cff] to-[#3f2eaa]',
    },
  ];
  return (
    <section id="creators" className="bg-surf-soft border-y border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-[11px] font-semibold uppercase tracking-widest text-brand-500">Creators talking</p>
          <h2 className="mt-3 text-[28px] sm:text-[40px] leading-tight font-semibold text-ink-900 tracking-tight">
            They post. CommentToDM handles the rest.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {items.map((t, i) => <Quote key={i} {...t}/>)}
        </div>
      </div>
    </section>
  );
}

function Quote({ quote, name, role, followers, stat, avatar, avatarTone }) {
  const [imgFailed, setImgFailed] = React.useState(false);
  return (
    <figure className="lift relative flex flex-col rounded-2xl border border-line bg-white p-6">
      <I.MessageCircle size={18} className="text-brand-500"/>
      <blockquote className="mt-3 text-[14.5px] leading-relaxed text-ink-800 flex-1">
        "{quote}"
      </blockquote>
      <div className="mt-4 rounded-xl bg-surf-soft px-3 py-2 flex items-baseline gap-2">
        <span className="text-[18px] font-semibold text-ink-900">{stat[0]}</span>
        <span className="text-[12px] text-ink-500">{stat[1]}</span>
      </div>
      <figcaption className="mt-5 flex items-center gap-3 pt-4 border-t border-line">
        {avatar && !imgFailed ? (
          <img
            src={avatar}
            alt={name}
            className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-soft"
            referrerPolicy="no-referrer"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${avatarTone} text-[12px] font-semibold text-white`}>
            {name.split(' ').map(s => s[0]).join('')}
          </span>
        )}
        <div>
          <p className="text-[13.5px] font-semibold text-ink-900 flex items-center gap-1">
            {name}
            <I.Linkedin size={11} className="text-brand-500"/>
          </p>
          <p className="text-[12px] text-ink-500">{role} · {followers}</p>
        </div>
      </figcaption>
    </figure>
  );
}

Object.assign(window, { Testimonials });
