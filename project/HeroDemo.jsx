// The centerpiece: an interactive LinkedIn post -> comment -> DM simulator.
// Plays automatically on mount, replays on click. Live "commenters" tick up.
function HeroDemo() {
  const STEPS = ['idle', 'commenting', 'commented', 'dm', 'done'];
  const [step, setStep] = React.useState('idle');
  const [typed, setTyped] = React.useState('');
  const [count, setCount] = React.useState(127);
  const [dmSent, setDmSent] = React.useState(312);
  const timers = React.useRef([]);

  const KEYWORD = 'GUIDE';

  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  const schedule = (fn, ms) => { const t = setTimeout(fn, ms); timers.current.push(t); };

  const play = React.useCallback(() => {
    clearTimers();
    setTyped('');
    setStep('commenting');
    // Type the keyword
    KEYWORD.split('').forEach((ch, i) => {
      schedule(() => setTyped(KEYWORD.slice(0, i + 1)), 120 + i * 90);
    });
    schedule(() => setStep('commented'), 120 + KEYWORD.length * 90 + 250);
    schedule(() => {
      setCount(c => c + 1);
    }, 120 + KEYWORD.length * 90 + 400);
    schedule(() => setStep('dm'), 120 + KEYWORD.length * 90 + 900);
    schedule(() => {
      setDmSent(d => d + 1);
      setStep('done');
    }, 120 + KEYWORD.length * 90 + 2400);
  }, []);

  // Auto-play on mount, and again every ~7s while idle/done
  React.useEffect(() => {
    play();
    const loop = setInterval(() => {
      setStep(prev => {
        if (prev === 'done') { play(); return prev; }
        return prev;
      });
    }, 6500);
    return () => { clearInterval(loop); clearTimers(); };
  }, [play]);

  // Live counter ticks up over time
  React.useEffect(() => {
    const t = setInterval(() => setCount(c => c + Math.floor(Math.random() * 2)), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative">
      {/* Floating helper badges */}
      <FloatingBadge className="absolute -left-3 sm:-left-8 top-10 hidden md:flex" pos="left">
        <span className="h-2 w-2 rounded-full bg-[#2E6E28] live-dot"/>
        <span className="text-xs font-medium text-ink-800">{count} commenters</span>
      </FloatingBadge>
      <FloatingBadge className="absolute -right-3 sm:-right-6 top-44 hidden md:flex" pos="right">
        <I.Send size={12} className="text-brand-500"/>
        <span className="text-xs font-medium text-ink-800">{dmSent.toLocaleString()} DMs sent today</span>
      </FloatingBadge>

      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4 items-start">
        <LinkedInPost step={step} typed={typed} keyword={KEYWORD} onTrigger={play} />
        <DMPanel step={step} keyword={KEYWORD} />
      </div>

      {/* Replay control under the demo */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-ink-500">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand-500"/>
          Live simulation — what your audience sees vs. what they get.
        </div>
        <button
          onClick={play}
          className="inline-flex h-8 items-center gap-1.5 rounded-[8px] border border-line bg-white px-3 text-xs font-medium text-ink-800 hover:bg-surf-soft transition-colors">
          <I.Repeat size={12}/> Replay
        </button>
      </div>
    </div>
  );
}

function FloatingBadge({ children, className = '', pos }) {
  return (
    <div className={`z-20 items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 shadow-card ${className}`}
         style={{ animation: 'dmIn .6s ease both' }}>
      {children}
    </div>
  );
}

function LinkedInPost({ step, typed, keyword, onTrigger }) {
  const showFakeComments = step === 'commented' || step === 'dm' || step === 'done';
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-card">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-line bg-white px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"/>
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]"/>
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]"/>
        <span className="ml-3 inline-flex items-center gap-1.5 rounded-md bg-surf-soft px-2 py-0.5 text-[11px] text-ink-500">
          <I.Lock size={10}/> linkedin.com/feed
        </span>
        <span className="ml-auto inline-flex items-center gap-1 rounded-md bg-brand-50 px-1.5 py-0.5 text-[10px] font-medium text-brand-500">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500"/> Demo
        </span>
      </div>

      <div className="p-4">
        {/* Author */}
        <div className="flex items-start gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-900 text-[12px] font-semibold text-white">SK</div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-1.5">
              <p className="truncate text-[13.5px] font-semibold text-ink-800">Saanvi Khanna</p>
              <span className="text-[11px] text-ink-400">• 1st</span>
            </div>
            <p className="text-[11.5px] text-ink-500">LinkedIn growth coach · 41K followers</p>
            <p className="text-[11px] text-ink-400">2h · <I.Globe size={9} className="inline -mt-0.5"/></p>
          </div>
          <button className="rounded-md p-1 text-ink-400 hover:bg-surf-soft" aria-label="More">···</button>
        </div>

        {/* Post body */}
        <div className="mt-3 text-[13.5px] leading-relaxed text-ink-800">
          <p>Spent 6 months reverse-engineering every viral LinkedIn post under 200 words. The result: a 1-page playbook with the exact CTA pattern that drives 3× more comments.</p>
          <p className="mt-2 font-medium text-ink-900">
            👉 Comment <span className="rounded bg-brand-50 px-1.5 py-0.5 font-semibold text-brand-500">"{keyword}"</span> and I'll DM it to you.
          </p>
        </div>

        {/* Reactions */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t border-line pt-2.5 text-[11.5px] text-ink-500">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="inline-flex -space-x-1 flex-shrink-0">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-[10px] text-white ring-2 ring-white">👍</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#df704d] text-[10px] text-white ring-2 ring-white">❤</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f5bb41] text-[10px] text-white ring-2 ring-white">💡</span>
            </span>
            <span className="truncate">2,481</span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span>312 comments</span>
            <span className="text-ink-400">·</span>
            <span>89 reposts</span>
          </div>
        </div>

        {/* Action bar */}
        <div className="mt-1 grid grid-cols-4 border-t border-line pt-1.5 text-[11.5px] text-ink-500">
          <PostAction icon={<I.Heart size={13}/>} label="Like"/>
          <PostAction icon={<I.MessageCircle size={13}/>} label="Comment" active/>
          <PostAction icon={<I.Repeat size={13}/>} label="Repost"/>
          <PostAction icon={<I.Send size={13}/>} label="Send"/>
        </div>

        {/* Comment input */}
        <div className="mt-2.5 rounded-xl border border-line p-2">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-ink-400 text-[10px] font-semibold text-white">YOU</div>
            <div className="flex-1 rounded-full border border-line bg-white px-3 py-1.5 text-[12.5px] text-ink-800">
              {step === 'idle' ? (
                <span className="text-ink-400">Add a comment…</span>
              ) : (
                <span>
                  {typed}
                  {step === 'commenting' && <span className="caret"/>}
                </span>
              )}
            </div>
            <button
              onClick={onTrigger}
              className={`inline-flex h-8 items-center gap-1 rounded-full px-3 text-[12px] font-medium transition-colors ${typed === keyword || step !== 'idle' && step !== 'commenting' ? 'bg-brand-500 text-white hover:bg-brand-600' : 'bg-surf-soft text-ink-500'}`}>
              Post
            </button>
          </div>
        </div>

        {/* Comments stream */}
        <div className="mt-2.5 space-y-1.5">
          {showFakeComments && (
            <CommentRow name="You" sub="Just now" tone="self" text={keyword}/>
          )}
          <CommentRow name="Marcus Hale" sub="just now" text={keyword} hidden={!showFakeComments}/>
        </div>
      </div>
    </div>
  );
}

function PostAction({ icon, label, active }) {
  return (
    <button className={`flex items-center justify-center gap-1.5 rounded-md px-1 py-1.5 hover:bg-surf-soft transition-colors ${active ? 'text-brand-500' : 'text-ink-500'}`}>
      <span className="flex-shrink-0">{icon}</span>
      <span className="hidden sm:inline text-[12px] truncate">{label}</span>
    </button>
  );
}

function CommentRow({ name, sub, text, tone, hidden }) {
  if (hidden) return null;
  const isSelf = tone === 'self';
  return (
    <div className="flex items-start gap-2 dm-in">
      <div className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-semibold text-white ${isSelf ? 'bg-brand-500' : 'bg-ink-400'}`}>
        {name.split(' ').map(s => s[0]).join('').slice(0,2).toUpperCase()}
      </div>
      <div className="flex-1 rounded-2xl bg-surf-soft px-2.5 py-1.5">
        <div className="flex items-baseline gap-1.5">
          <span className="text-[12.5px] font-semibold text-ink-800">{name}</span>
          <span className="text-[11px] text-ink-400">{sub}</span>
        </div>
        <p className="text-[13px] text-ink-800">{text}</p>
      </div>
    </div>
  );
}

function DMPanel({ step, keyword }) {
  const showTyping = step === 'dm';
  const showSent = step === 'done';
  return (
    <div className="lg:sticky lg:top-24">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-card">
        <div className="flex items-center justify-between border-b border-line bg-white px-3 py-2">
          <div className="flex items-center gap-2">
            <I.Send size={12} className="text-brand-500"/>
            <span className="text-[12px] font-medium text-ink-800">Messages</span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-md bg-brand-50 px-1.5 py-0.5 text-[10px] font-medium text-brand-500">
            CommentToDM
          </span>
        </div>

        {/* Thread header */}
        <div className="flex items-center gap-2 border-b border-line px-3 py-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-900 text-[11px] font-semibold text-white">SK</div>
          <div className="min-w-0">
            <p className="truncate text-[12.5px] font-semibold text-ink-800">Saanvi Khanna</p>
            <p className="text-[10.5px] text-ink-400">Active now</p>
          </div>
          <span className="ml-auto h-2 w-2 rounded-full bg-[#2E6E28]"/>
        </div>

        {/* Body */}
        <div className="space-y-2 px-3 py-4 min-h-[260px] bg-[linear-gradient(180deg,#fff,#fafbff)]">
          {step !== 'idle' && step !== 'commenting' && step !== 'commented' ? null : (
            <EmptyDM/>
          )}

          {(step === 'commented' || showTyping || showSent) && (
            <div className="flex items-center justify-center">
              <div className="rounded-full bg-brand-50 px-2.5 py-1 text-[10.5px] font-medium text-brand-500 dm-in">
                Triggered by comment "{keyword}"
              </div>
            </div>
          )}

          {showTyping && (
            <div className="flex items-end gap-2 dm-in">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-900 text-[10px] font-semibold text-white">SK</div>
              <div className="rounded-2xl rounded-bl-md bg-surf-soft px-3 py-2">
                <Typing/>
              </div>
            </div>
          )}

          {showSent && (
            <>
              <div className="flex items-end gap-2 dm-in">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-900 text-[10px] font-semibold text-white">SK</div>
                <div className="max-w-[260px] rounded-2xl rounded-bl-md bg-surf-soft px-3 py-2">
                  <p className="text-[12.5px] text-ink-800">
                    Hey <span className="font-semibold">Marcus</span>! Thanks for commenting "{keyword}" 🙌
                  </p>
                  <p className="mt-1 text-[12.5px] text-ink-800">
                    Here's the playbook I promised — straight from my desk. Enjoy:
                  </p>
                  <a href="#" className="mt-1 inline-flex items-center gap-1 text-[12.5px] font-medium text-brand-500">
                    notion.so/saanvi/viral-playbook <I.ArrowUpRight size={11}/>
                  </a>
                </div>
              </div>
              <div className="flex justify-end pr-8 text-[10px] text-ink-400">Delivered · 4s after comment</div>
            </>
          )}
        </div>

        {/* Composer */}
        <div className="flex items-center gap-2 border-t border-line px-3 py-2">
          <div className="flex-1 rounded-full bg-surf-soft px-3 py-1.5 text-[11.5px] text-ink-400">Write a message…</div>
          <I.Send size={14} className="text-ink-400"/>
        </div>
      </div>

      {/* Trigger control card */}
      <div className="mt-3 rounded-2xl border border-line bg-white p-3 shadow-soft">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">Active trigger</p>
        <div className="mt-1.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-brand-50 px-1.5 py-0.5 text-[12px] font-semibold text-brand-500">"{keyword}"</span>
            <span className="text-[12px] text-ink-500">→ DM with link</span>
          </div>
          <span className="inline-flex h-5 items-center rounded-full bg-[#D2F3D6] px-2 text-[10.5px] font-medium text-[#2E6E28]">On</span>
        </div>
      </div>
    </div>
  );
}

function EmptyDM() {
  return (
    <div className="flex h-[200px] flex-col items-center justify-center gap-2 text-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surf-soft text-ink-400"><I.MessageCircle size={18}/></div>
      <p className="text-[12px] text-ink-500">Waiting for the next comment…</p>
    </div>
  );
}

function Typing() {
  return (
    <div className="flex items-center gap-1">
      <Dot delay="0s"/><Dot delay=".15s"/><Dot delay=".3s"/>
    </div>
  );
}
function Dot({ delay }) {
  return <span className="block h-1.5 w-1.5 rounded-full bg-ink-400" style={{ animation: 'dotPulse 1s ease-in-out infinite', animationDelay: delay }}/>;
}

// inject keyframes for dot
(function(){
  const s = document.createElement('style');
  s.textContent = '@keyframes dotPulse { 0%, 100% { opacity:.3; transform: translateY(0);} 50% { opacity:1; transform: translateY(-2px);} }';
  document.head.appendChild(s);
})();

Object.assign(window, { HeroDemo });
