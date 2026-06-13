// Big "You've seen this on LinkedIn" callout, with the actual post screenshots.
function SeenOnLinkedIn() {
  const ref = React.useRef(null);
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: .2 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-white border-b border-line overflow-hidden">
      {/* soft background blobs */}
      <div aria-hidden className="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-brand-500/[.05] blur-3xl"/>
      <div aria-hidden className="absolute -bottom-40 -right-32 h-[420px] w-[420px] rounded-full bg-brand-500/[.04] blur-3xl"/>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-ink-500 shadow-soft">
            <I.Linkedin size={12} className="text-brand-500"/> Sound familiar?
          </div>
          <h2 className="mt-5 text-[32px] sm:text-[48px] lg:text-[56px] leading-[1.04] tracking-[-0.02em] font-semibold text-ink-900">
            You've seen this on LinkedIn.
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-ink-600 max-w-2xl">
            Every other post in your feed says "comment something to get the link." Here's two examples you've definitely scrolled past this week.
          </p>
        </div>

        {/* The two screenshots */}
        <div className="relative mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-start">
          <PostCard
            n="1"
            label='The post: "Comment XYZ on my post"'
            sub="Bait the comment."
            tilt="-2.5deg"
            src="https://sbl.so/wp-content/uploads/2025/12/VLwj7O2cvZChHRbuCCwCeoHZWo.avif"
            alt="LinkedIn post asking viewers to comment a keyword to receive the file"
            stampText="Spotted ✦ in your feed"
            visible={vis}
            delay={0}
          />

          {/* Connector arrow between cards */}
          <Connector visible={vis}/>

          <PostCard
            n="2"
            label={"\"And I'll DM you my file\""}
            sub="Deliver the goods."
            tilt="2deg"
            src="https://sbl.so/wp-content/uploads/2025/12/9J45ShTyERxKwDZfZB7eflyq48s.webp"
            alt="LinkedIn DM with the promised file being delivered to the commenter"
            stampText="...followed by this"
            visible={vis}
            delay={200}
            right
          />
        </div>

        {/* Punchline */}
        <div className="relative mt-14 lg:mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[28px] sm:text-[40px] leading-tight font-semibold tracking-tight text-ink-900">
              Yeah. <span className="relative inline-block">
                <span className="relative z-10">That's us.</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1 h-[12px] sm:h-[16px] bg-brand-500/15 -skew-x-3 rounded-sm"/>
              </span>
            </p>
            <p className="mt-3 text-[16px] sm:text-[18px] text-ink-600">
              Because it's that easy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PostCard({ n, label, sub, tilt, src, alt, stampText, visible, delay, right }) {
  return (
    <div className="relative" style={{ transitionDelay: `${delay}ms` }}>
      {/* Number tag */}
      <div className={`absolute z-20 -top-5 ${right ? '-right-2 sm:-right-3' : '-left-2 sm:-left-3'} flex items-center gap-2`}>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white text-[15px] font-semibold shadow-lift">
          {n}
        </span>
        <span className="rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-500 shadow-soft">
          {stampText}
        </span>
      </div>

      {/* Card with screenshot */}
      <figure
        className={`group relative rounded-[20px] border border-line bg-white p-2 sm:p-3 shadow-card transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
        style={{ transform: visible ? `rotate(${tilt})` : 'none', transitionDelay: `${delay}ms` }}
      >
        {/* fake browser/post chrome */}
        <div className="flex items-center gap-1.5 px-2 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]"/>
          <span className="h-2 w-2 rounded-full bg-[#febc2e]"/>
          <span className="h-2 w-2 rounded-full bg-[#28c840]"/>
          <span className="ml-2 inline-flex items-center gap-1 text-[10px] text-ink-400">
            <I.Linkedin size={10} className="text-brand-500"/> linkedin.com
          </span>
        </div>
        <div className="relative overflow-hidden rounded-[14px] bg-surf-soft">
          <img
            src={src}
            alt={alt}
            className="block w-full h-auto max-h-[520px] object-cover object-top"
            referrerPolicy="no-referrer"
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
          />
          <div className="hidden flex-col items-center justify-center gap-2 py-20 text-ink-400" aria-hidden>
            <I.Linkedin size={28}/>
            <p className="text-[12px]">Screenshot couldn't load</p>
          </div>
        </div>
        <figcaption className="px-2 pt-3 pb-1">
          <p className="text-[13px] font-medium text-ink-900">{label}</p>
          <p className="mt-0.5 text-[12px] text-ink-500">{sub}</p>
        </figcaption>

        {/* tape decoration */}
        <span aria-hidden className={`absolute -top-3 ${right ? 'right-12' : 'left-12'} h-5 w-20 rotate-[${right ? '6' : '-6'}deg] bg-brand-500/15 rounded-sm`}/>
      </figure>
    </div>
  );
}

function Connector({ visible }) {
  return (
    <div aria-hidden className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center">
      <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-white border border-line shadow-card transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        <I.ArrowRight size={20} className="text-brand-500"/>
      </div>
    </div>
  );
}

Object.assign(window, { SeenOnLinkedIn });
