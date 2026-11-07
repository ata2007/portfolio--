import { IconArrowRight, IconGithub, IconLinkedIn, IconTwitter } from './Icons';
import FadeIn from './FadeIn';

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 border-t border-sage/30 bg-olive py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FadeIn>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Have a project? <span className="text-sage">Let&apos;s talk.</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-white">
            Let&apos;s build something robust and scalable together.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <a
            href="mailto:hello@armstrong.com"
            className="inline-flex items-center bg-sage px-8 py-4 font-bold text-olive transition-colors hover:bg-white"
          >
            hello@armstrong.com <IconArrowRight className="ml-2 h-5 w-5" />
          </a>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-16 flex justify-center gap-8">
            <a href="#" className="text-white transition-colors hover:text-sage">
              <IconGithub className="h-6 w-6" />
            </a>
            <a href="#" className="text-white transition-colors hover:text-sage">
              <IconLinkedIn className="h-6 w-6" />
            </a>
            <a href="#" className="text-white transition-colors hover:text-sage">
              <IconTwitter className="h-6 w-6" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
