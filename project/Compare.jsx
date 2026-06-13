// Side-by-side comparison table with subtle scroll-triggered reveal per row.
function Compare() {
  const rows = [
    { k: 'Account safety',          us: '0 bans across 4,800+ accounts', them: 'At risk',     usGood: true,  themGood: false },
    { k: 'Boosts post reach',       us: 'Yes — comment volume = algo lift', them: 'No',       usGood: true,  themGood: false },
    { k: 'LinkedIn ToS compliant',  us: 'Always',                       them: 'No',          usGood: true,  themGood: false },
    { k: 'Personalized per commenter', us: 'Yes',                       them: 'Rarely',      usGood: true,  themGood: false },
    { k: 'Works with organic content', us: 'Yes',                       them: 'No',          usGood: true,  themGood: false },
    { k: 'Builds real connections', us: 'Yes',                          them: 'No',          usGood: true,  themGood: false },
    { k: 'Setup time',              us: '5 min',                        them: 'Hours + risk',usGood: true,  themGood: false },
  ];

  const ref = React.useRef(null);
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: .2 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-14">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5">
        <h3 className="text-[22px] font-semibold tracking-tight text-ink-900">CommentToDM vs. other tools</h3>
        <p className="text-[12px] text-ink-500">Independent comparison across 4,800+ accounts.</p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-line bg-white shadow-soft">
        <table className="w-full text-[14px]">
          <thead>
            <tr className="border-b border-line bg-surf-soft">
              <th className="text-left font-medium text-ink-500 px-5 py-3 w-[44%]">Capability</th>
              <th className="text-left font-semibold text-ink-900 px-5 py-3">
                <span className="inline-flex items-center gap-2">
                  <Logo/> CommentToDM
                </span>
              </th>
              <th className="text-left font-medium text-ink-500 px-5 py-3">Other tools</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.k}
                  className={`border-b last:border-b-0 border-line transition-colors hover:bg-brand-50/40 ${vis ? 'row-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 70}ms` }}>
                <td className="px-5 py-4 text-ink-800 font-medium">{r.k}</td>
                <td className="px-5 py-4">
                  <span className="inline-flex items-center gap-2 rounded-md bg-[#D2F3D6] px-2 py-1 text-[12.5px] font-medium text-[#2E6E28]">
                    <I.Check size={12}/> {r.us}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className="inline-flex items-center gap-2 rounded-md bg-surf-soft px-2 py-1 text-[12.5px] font-medium text-ink-600">
                    <I.X size={12} className="text-[#CF3027]"/> {r.them}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

Object.assign(window, { Compare });
