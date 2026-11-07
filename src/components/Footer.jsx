const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-sage/30 bg-olive py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <a href="#" className="text-xl font-bold tracking-tight text-white">
          Armstrong.
        </a>
        <p className="font-mono text-xs text-sage">
          © 2026 Armstrong. Built by a craftsman, not a contractor.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
