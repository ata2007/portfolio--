import { useState } from 'react';
import { IconArrowRight } from './Icons';
import FadeIn from './FadeIn';

const Hero = () => {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  return (
    <section className="relative z-10 flex min-h-screen items-center bg-olive pt-16">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FadeIn delay={0.1}>
              <p className="mb-6 font-mono text-sm tracking-widest text-sage uppercase">
                Lagos, Nigeria · Full-Stack Developer
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="mb-8 text-5xl font-bold leading-[1.1] text-white md:text-7xl">
                I build systems
                <br />
                <span className="text-sage">that actually work.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mb-12 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                I design and develop modern, responsive web platforms and digital products for
                businesses, brands, and organisations. From complex web apps to e-commerce systems,
                I build them end-to-end.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/message/PE6PLCTFJZTVP1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-sage px-8 py-3 text-sm font-bold text-olive transition-colors hover:bg-white"
                >
                  Let&apos;s Talk <IconArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center border border-sage px-8 py-3 text-sm font-bold text-sage transition-colors hover:bg-sage hover:text-olive"
                >
                  View My Work
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5">
            <FadeIn delay={0.5}>
              <div className="relative">
                <div className="absolute inset-0 translate-x-4 translate-y-4 border border-sage/50" />
                <div className="group relative aspect-[4/5] overflow-hidden border border-sage bg-olive p-2">
                  <div className="absolute inset-2 flex flex-col items-center justify-center bg-sage/10">
                    <span className="text-6xl font-bold text-sage">A</span>
                    <span className="mt-3 font-mono text-xs tracking-widest text-sage uppercase">
                      Armstrong
                    </span>
                  </div>
                  {!imageUnavailable && (
                    <>
                      <img
                        src="/ata.jpeg"
                        alt="Armstrong, Full-Stack Developer"
                        className="absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0"
                        onError={() => setImageUnavailable(true)}
                      />
                      <div className="pointer-events-none absolute inset-2 bg-sage/10 transition-colors duration-700 group-hover:bg-transparent" />
                    </>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
