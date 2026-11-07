const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-sage/30 bg-olive">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <a href="#" className="text-2xl font-bold tracking-tight text-white">
              Armstrong.
            </a>
            <p className="mt-2 font-mono text-xs text-sage">Full-Stack Developer</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 font-mono text-sm text-white">
            <a href="#services" className="transition-colors hover:text-sage">
              01 / Services
            </a>
            <a href="#work" className="transition-colors hover:text-sage">
              02 / Work
            </a>
            <a href="#contact" className="transition-colors hover:text-sage">
              03 / Contact
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-sage/20 pt-6 md:flex-row">
          <p className="font-mono text-xs text-sage">© 2026 Armstrong. All rights reserved.</p>
          <p className="font-mono text-xs text-sage">Built by craftsmen, not contractors.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
