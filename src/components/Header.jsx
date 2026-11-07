import { useState } from 'react';
import { IconClose, IconMenu } from './Icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-sage bg-olive">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-xl font-bold tracking-tight text-white">
          Armstrong.
        </a>

        <nav className="hidden gap-8 text-sm font-mono tracking-wider md:flex">
          <a href="#services" className="text-white transition-colors hover:text-sage">
            01 / SERVICES
          </a>
          <a href="#work" className="text-white transition-colors hover:text-sage">
            02 / WORK
          </a>
          <a
            href="#contact"
            className="bg-sage px-5 py-2 font-bold text-olive transition-colors hover:bg-white"
          >
            LET&apos;S TALK
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <IconClose className="h-8 w-8 text-sage" />
          ) : (
            <IconMenu className="h-8 w-8 text-white" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 flex flex-col items-center justify-center gap-10 bg-olive text-2xl font-mono md:hidden">
          <a href="#services" onClick={() => setIsOpen(false)} className="text-white hover:text-sage">
            01 / SERVICES
          </a>
          <a href="#work" onClick={() => setIsOpen(false)} className="text-white hover:text-sage">
            02 / WORK
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-sage">
            LET&apos;S TALK
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
