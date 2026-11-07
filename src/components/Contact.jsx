import { IconGithub, IconInstagram, IconWhatsApp } from './Icons';
import FadeIn from './FadeIn';

const Contact = () => {
  const whatsappLink = 'https://wa.me/message/PE6PLCTFJZTVP1';

  return (
    <section id="contact" className="relative z-10 border-t border-sage/30 bg-olive py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FadeIn>
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
            Have a project? <span className="text-sage">Let&apos;s talk.</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/70">
            The fastest way to reach me is via WhatsApp. Let&apos;s discuss your next web platform,
            e-commerce build, or custom application.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-sage px-8 py-4 text-lg font-bold text-olive transition-colors hover:bg-white"
          >
            <IconWhatsApp className="mr-3 h-6 w-6" /> Message on WhatsApp
          </a>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16 border-t border-sage/30 pt-10">
            <p className="mb-8 font-mono text-xs tracking-widest text-sage uppercase">
              Or connect with me on
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <a
                href="https://github.com/ata2007?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-white/80 transition-colors hover:text-sage"
              >
                <span className="flex h-12 w-12 items-center justify-center border border-sage/50 transition-colors group-hover:border-sage">
                  <IconGithub className="h-5 w-5" />
                </span>
                <span className="font-mono text-sm tracking-wider">GitHub</span>
              </a>

              <a
                href="https://www.instagram.com/armstrong.ata007"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-white/80 transition-colors hover:text-sage"
              >
                <span className="flex h-12 w-12 items-center justify-center border border-sage/50 transition-colors group-hover:border-sage">
                  <IconInstagram className="h-5 w-5" />
                </span>
                <span className="font-mono text-sm tracking-wider">Instagram</span>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-white/80 transition-colors hover:text-sage"
              >
                <span className="flex h-12 w-12 items-center justify-center border border-sage/50 transition-colors group-hover:border-sage">
                  <IconWhatsApp className="h-5 w-5" />
                </span>
                <span className="font-mono text-sm tracking-wider">WhatsApp</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
