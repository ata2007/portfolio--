import { useState } from 'react';
import { IconArrowRight, IconClose } from './Icons';

const Credential = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="mx-auto flex max-w-4xl cursor-pointer flex-col border border-sage transition-colors hover:border-white md:flex-row"
      >
        <div className="flex h-48 items-center justify-center border-b border-sage bg-olive md:h-auto md:w-1/3 md:border-b-0 md:border-r">
          <span className="font-mono text-sm text-sage">[ Certificate Image ]</span>
        </div>

        <div className="p-8 md:w-2/3">
          <p className="mb-2 font-mono text-xs tracking-widest uppercase text-sage">Coursera / Meta</p>
          <h3 className="mb-2 text-2xl font-bold text-white">Full-Stack Web Development</h3>
          <p className="mb-4 font-mono text-sm text-sage">Issued: October 2025</p>
          <p className="mb-6 text-sm leading-relaxed text-white">
            Completed an intensive program covering React, Node.js, Express, MongoDB, and RESTful API design.
            Built and deployed 5+ production-ready full-stack applications.
          </p>

          <div className="flex items-center justify-between border-t border-sage pt-4">
            <span className="flex items-center text-sm font-bold text-white">
              VIEW CREDENTIAL <IconArrowRight className="ml-2 h-4 w-4" />
            </span>
            <span className="font-mono text-xs text-sage">VERIFIED ✓</span>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-olive p-4">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-6 top-6 text-sage hover:text-white"
            aria-label="Close credential"
          >
            <IconClose className="h-8 w-8" />
          </button>

          <div className="w-full max-w-4xl border border-sage p-4">
            <div className="aspect-[4/3] flex items-center justify-center border border-sage">
              <span className="font-mono text-sage">[ Expanded Certificate View ]</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Credential;
