function Footer() {
  return (
    <footer className="bg-white border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <Logo/>
            <div>
              <p className="text-[14px] font-semibold text-ink-900">CommentToDM</p>
              <p className="text-[11.5px] text-ink-500">by Sbl.so · Built for LinkedIn creators</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-1 text-[13px] text-ink-600">
            <a className="rounded-md px-3 py-1.5 hover:bg-surf-soft" href="#">Privacy</a>
            <a className="rounded-md px-3 py-1.5 hover:bg-surf-soft" href="#">Terms</a>
            <a className="rounded-md px-3 py-1.5 hover:bg-surf-soft" href="#">Contact</a>
            <a className="rounded-md px-3 py-1.5 hover:bg-surf-soft" href="#cta">Status</a>
          </nav>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[12px] text-ink-500">
          <p>© 2026 CommentToDM. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2E6E28] live-dot"/>
            All systems normal · DMs delivering in under 30 minutes
          </p>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
