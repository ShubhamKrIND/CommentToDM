// How it works: 3 interactive steps with custom preview on the right.
function HowItWorks() {
  const [active, setActive] = React.useState(0);
  const autoRef = React.useRef(null);
  const [pinned, setPinned] = React.useState(false);

  React.useEffect(() => {
    if (pinned) return;
    autoRef.current = setInterval(() => setActive(a => (a + 1) % 3), 5000);
    return () => clearInterval(autoRef.current);
  }, [pinned]);

  const STEPS = [
    {
      eyebrow: 'Step 1',
      title: 'Write a post with a keyword CTA',
      body: 'Tell your audience to comment a word — "FREE", "GUIDE", "TEMPLATE", anything. That comment becomes the trigger.',
      icon: <I.Linkedin size={16}/>,
    },
    {
      eyebrow: 'Step 2',
      title: 'Set your DM once',
      body: 'Write a personalized message with their first name, your link, your voice. Set it once. It goes to everyone who comments. Forever.',
      icon: <I.Wand size={16}/>,
    },
    {
      eyebrow: 'Step 3',
      title: 'Watch reach and connections grow',
      body: 'Comments spike your reach. DMs build your network. The algorithm loves it. Your audience does too.',
      icon: <I.TrendingUp size={16}/>,
    },
  ];

  return (
    <section id="how" className="relative bg-surf-soft border-y border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-start">
          {/* Left: steps list */}
          <div>
            <p className="eyebrow text-[11px] font-semibold uppercase tracking-widest text-brand-500">How it works</p>
            <h2 className="mt-3 text-[28px] sm:text-[40px] leading-tight font-semibold text-ink-900 tracking-tight">
              Three steps. Then it runs forever.
            </h2>
            <p className="mt-4 text-[15.5px] text-ink-600 max-w-lg">
              Write your post. Pick a keyword. Set your DM once. CommentToDM handles every commenter while you're offline, on calls, or creating the next post.
            </p>

            <div className="mt-8 flex flex-col gap-2.5"
                 onMouseEnter={() => setPinned(true)}
                 onMouseLeave={() => setPinned(false)}>
              {STEPS.map((s, i) => (
                <StepRow
                  key={i}
                  index={i}
                  active={active === i}
                  step={s}
                  onClick={() => { setPinned(true); setActive(i); }}
                />
              ))}
            </div>
          </div>

          {/* Right: live preview pane */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-card min-h-[440px]">
              <PreviewChrome step={active}/>
              <div className="p-5">
                {active === 0 && <StepOnePreview/>}
                {active === 1 && <StepTwoPreview/>}
                {active === 2 && <StepThreePreview/>}
              </div>
            </div>
            {/* progress dots */}
            <div className="mt-4 flex items-center justify-center gap-1.5">
              {STEPS.map((_, i) => (
                <button key={i} onClick={() => { setPinned(true); setActive(i); }}
                  className={`h-1.5 rounded-full transition-all ${active === i ? 'w-8 bg-brand-500' : 'w-1.5 bg-line'}`}
                  aria-label={`Step ${i + 1}`}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepRow({ index, step, active, onClick }) {
  return (
    <button onClick={onClick}
            className={`group flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all ${active ? 'border-brand-500/30 bg-white shadow-card ring-active' : 'border-line bg-white/60 hover:bg-white'}`}>
      <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[13px] font-semibold transition-all ${active ? 'bg-brand-500 text-white' : 'bg-surf-soft text-ink-800'}`}>
        {index + 1}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">{step.eyebrow}</span>
          <span className={`text-brand-500 transition-opacity ${active ? 'opacity-100' : 'opacity-0'}`}>{step.icon}</span>
        </div>
        <p className={`mt-0.5 text-[16px] font-semibold ${active ? 'text-ink-900' : 'text-ink-800'}`}>{step.title}</p>
        <p className="mt-1 text-[13.5px] leading-relaxed text-ink-600 max-w-md">{step.body}</p>
      </div>
      <I.ArrowRight size={14} className={`mt-2 transition-all ${active ? 'text-brand-500 translate-x-0' : 'text-ink-400 -translate-x-1'}`}/>
    </button>
  );
}

function PreviewChrome({ step }) {
  const labels = ['Post composer', 'Trigger settings', 'Analytics'];
  return (
    <div className="flex items-center justify-between border-b border-line bg-white px-3 py-2">
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"/>
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]"/>
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]"/>
        <span className="ml-3 inline-flex items-center gap-1.5 rounded-md bg-surf-soft px-2 py-0.5 text-[11px] text-ink-500">
          <I.Lock size={10}/> app.commenttodm.com / {labels[step].toLowerCase()}
        </span>
      </div>
      <span className="text-[11px] text-ink-400">CommentToDM</span>
    </div>
  );
}

// ---------- Step 1: write a post with keyword ----------
function StepOnePreview() {
  const [val, setVal] = React.useState("");
  const [animKey, setAnimKey] = React.useState(0);
  React.useEffect(() => {
    setVal("");
    const text = "Most LinkedIn posts die in 24h.\n\nMine don't.\n\nI built a 1-page playbook: hooks, structure, the CTA pattern that triples comments.\n\nWant it? Comment \"GUIDE\" and I'll DM it to you.";
    let i = 0;
    const id = setInterval(() => {
      i += 2;
      setVal(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, [animKey]);

  return (
    <div className="tab-enter" key="s1">
      <div className="flex items-center gap-2 text-[12px] text-ink-500">
        <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-medium text-brand-500">New post</span>
        <span>·</span><span>Public</span>
      </div>
      <div className="mt-3 rounded-xl border border-line bg-white">
        <div className="flex items-center gap-2 border-b border-line px-3 py-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-900 text-[10px] font-semibold text-white">YO</div>
          <span className="text-[12.5px] font-medium text-ink-800">You</span>
        </div>
        <textarea
          value={val}
          onChange={(e) => setVal(e.target.value)}
          rows={7}
          className="w-full resize-none rounded-b-xl border-none bg-white p-3 text-[14px] leading-relaxed text-ink-800 outline-none placeholder:text-ink-400"
          placeholder="What do you want to talk about?"
        />
      </div>

      <div className="mt-3 rounded-xl border border-brand-500/25 bg-brand-50/40 p-3">
        <div className="flex items-center gap-2">
          <I.Wand size={14} className="text-brand-500"/>
          <p className="text-[12.5px] font-medium text-ink-800">We detected your trigger</p>
        </div>
        <div className="mt-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-[12.5px] text-ink-600">Keyword:</span>
            <span className="rounded-md bg-brand-500 px-2 py-0.5 text-[12.5px] font-semibold text-white">GUIDE</span>
          </div>
          <button onClick={() => setAnimKey(k => k + 1)} className="inline-flex h-7 items-center gap-1 rounded-md border border-line bg-white px-2 text-[11px] text-ink-700 hover:bg-white">
            <I.Repeat size={11}/> Replay
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------- Step 2: set DM once ----------
function StepTwoPreview() {
  const [tone, setTone] = React.useState('warm');
  const [link, setLink] = React.useState('notion.so/saanvi/viral-playbook');
  const tones = {
    warm:  `Hey {{first_name}}! Thanks for commenting "GUIDE" 🙌\n\nHere's the playbook I promised — straight from my desk.\nEnjoy:`,
    blunt: `{{first_name}} — playbook below. No fluff.`,
    nerdy: `Yo {{first_name}} 👋 As requested: the deconstructed CTA pattern + 12 hook templates. Open in a quiet room:`,
  };
  return (
    <div className="tab-enter" key="s2">
      <p className="text-[12px] text-ink-500">Set this once. It runs for every commenter, forever.</p>

      <div className="mt-3 grid grid-cols-1 gap-3">
        {/* Trigger row */}
        <div className="rounded-xl border border-line bg-surf-soft px-3 py-2.5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">Trigger</p>
          <div className="mt-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[13px] text-ink-600">When a comment contains</span>
              <span className="rounded-md bg-brand-500 px-2 py-0.5 text-[12.5px] font-semibold text-white">GUIDE</span>
            </div>
            <span className="inline-flex h-5 items-center rounded-full bg-[#D2F3D6] px-2 text-[10.5px] font-medium text-[#2E6E28]">On</span>
          </div>
        </div>

        {/* Tone */}
        <div>
          <p className="text-[12px] font-medium text-ink-700">Voice</p>
          <div className="mt-1.5 inline-flex rounded-lg border border-line bg-white p-1">
            {Object.keys(tones).map(k => (
              <button key={k} onClick={() => setTone(k)}
                className={`rounded-md px-3 py-1 text-[12px] capitalize transition-colors ${tone === k ? 'bg-brand-500 text-white' : 'text-ink-700 hover:bg-surf-soft'}`}>
                {k}
              </button>
            ))}
          </div>
        </div>

        {/* DM body */}
        <div className="rounded-xl border border-line bg-white">
          <div className="flex items-center justify-between border-b border-line px-3 py-2">
            <p className="text-[12px] font-medium text-ink-700">DM body</p>
            <div className="flex gap-1.5">
              <Pill>{'{{first_name}}'}</Pill>
              <Pill>{'{{post_title}}'}</Pill>
            </div>
          </div>
          <pre className="whitespace-pre-wrap p-3 text-[13px] leading-relaxed text-ink-800 font-sans">{tones[tone]}</pre>
          <div className="border-t border-line px-3 py-2 flex items-center gap-2">
            <I.ArrowUpRight size={12} className="text-ink-400"/>
            <input value={link} onChange={(e) => setLink(e.target.value)}
              className="flex-1 bg-transparent text-[13px] text-brand-500 outline-none"/>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[12px] text-ink-500">
          <I.Check size={12} className="text-brand-500"/> Personalized per commenter. Sent under 30 minutes.
        </div>
      </div>
    </div>
  );
}

function Pill({ children }) {
  return <span className="rounded-md bg-surf-soft px-1.5 py-0.5 text-[11px] font-medium text-ink-700">{children}</span>;
}

// ---------- Step 3: analytics ----------
function StepThreePreview() {
  // Tiny SVG sparkline
  const points = [4, 6, 5, 8, 12, 11, 14, 18, 22, 21, 26, 33, 38, 42, 49];
  const max = Math.max(...points);
  const w = 460, h = 110;
  const step = w / (points.length - 1);
  const path = points.map((v, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${h - (v / max) * (h - 12)}`).join(' ');
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <div className="tab-enter" key="s3">
      <div className="grid grid-cols-3 gap-3">
        <Kpi label="Reach" value="148K" delta="+212%"/>
        <Kpi label="Comments" value="312" delta="+187%"/>
        <Kpi label="DMs sent" value="289" delta="auto"/>
      </div>

      <div className="mt-4 rounded-xl border border-line bg-white p-4">
        <div className="flex items-center justify-between">
          <p className="text-[12px] font-medium text-ink-700">Comments on this post (last 24h)</p>
          <span className="text-[11px] text-ink-400">vs. your typical post</span>
        </div>
        <svg viewBox={`0 0 ${w} ${h}`} className="mt-2 w-full">
          <defs>
            <linearGradient id="area1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#3657D5" stopOpacity=".25"/>
              <stop offset="1" stopColor="#3657D5" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d={area} fill="url(#area1)"/>
          <path d={path} fill="none" stroke="#3657D5" strokeWidth="2"/>
          {/* baseline */}
          <line x1="0" y1={h - 18} x2={w} y2={h - 18} stroke="#F1F1F1" strokeDasharray="3 3"/>
          <text x={w - 4} y={h - 22} textAnchor="end" fontSize="9" fill="#9CA3AF">typical baseline</text>
        </svg>
        <div className="mt-2 flex items-center gap-2 text-[11.5px] text-ink-500">
          <span className="inline-block h-2 w-2 rounded-full bg-brand-500"/> Posts with comment trigger
          <span className="ml-3 inline-block h-px w-4 border-t border-dashed border-ink-400"/> Baseline
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-[#D2F3D6] bg-[#F4FBF4] p-3 text-[12.5px] text-[#2E6E28]">
        Algo lift detected — your post is being shown to <strong>new audiences</strong> outside your network.
      </div>
    </div>
  );
}

function Kpi({ label, value, delta }) {
  return (
    <div className="rounded-xl border border-line bg-white p-3">
      <p className="text-[11px] text-ink-500">{label}</p>
      <p className="mt-1 text-[20px] font-semibold text-ink-900 tracking-tight">{value}</p>
      <p className="mt-0.5 text-[11px] font-medium text-[#2E6E28]">{delta}</p>
    </div>
  );
}

Object.assign(window, { HowItWorks });
