import { IconArrowRight } from './Icons';
import FadeIn from './FadeIn';

const Work = () => {
  const projects = [
    {
      title: 'Euvola (Beauty)',
      year: '2024',
      category: 'E-COMMERCE',
      desc: 'A luxury fragrance and beauty e-commerce experience. Features dynamic product listings, category filtering, and a polished, high-end brand aesthetic.',
      tech: ['React', 'Tailwind CSS', 'Vercel'],
      liveLink: 'https://beauty-two-dusky.vercel.app/',
      githubLink: '#',
      image: '/euvola.jpg',
    },
    {
      title: 'Fachi Fabric',
      year: '2024',
      category: 'E-COMMERCE',
      desc: 'A modern, responsive e-commerce platform for a premium fabric retailer. Features a dynamic product catalogue, pricing display, and direct WhatsApp checkout integration.',
      tech: ['React', 'Tailwind CSS', 'Vercel'],
      liveLink: 'https://fachi-fabric.vercel.app/',
      githubLink: '#',
      image: '/fachi.jpg',
    },
  ];

  return (
    <section id="work" className="relative z-10 border-t border-sage/30 bg-olive py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-3 font-mono text-sm tracking-widest text-sage">SELECTED WORK</p>
          <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">
            Projects I&apos;m proud of.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.15} className="h-full">
              <div className="group flex h-full flex-col border border-sage/30 bg-olive transition-colors duration-300 hover:border-sage">
                <div className="relative flex h-64 items-center justify-center overflow-hidden border-b border-sage/30 bg-olive">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover object-top opacity-80 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-3 flex gap-4 font-mono text-xs">
                    <span className="text-white">{project.year}</span>
                    <span className="text-sage">{project.category}</span>
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-sage">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-white/70">{project.desc}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="border border-sage/50 bg-olive px-3 py-1 font-mono text-xs text-sage"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-sage/30 pt-5">
                    {project.liveLink !== '#' ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-sage"
                      >
                        Live Demo <IconArrowRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-sm font-bold text-white">
                        VIEW PROJECT <IconArrowRight className="h-4 w-4" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
