import FadeIn from './FadeIn';

const Process = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Strategy',
      desc: 'I start by understanding what the business actually needs the site to do. We define the structure, features, and goals before writing a single line of code.',
    },
    {
      num: '02',
      title: 'Design & Prototype',
      desc: 'High-fidelity mockups and design systems. You see exactly how it will look and behave on mobile and desktop before development begins.',
    },
    {
      num: '03',
      title: 'Full-Stack Development',
      desc: 'Hand-written React and Node.js. 1–2 week sprints with continuous live links so you can test the build as it happens.',
    },
    {
      num: '04',
      title: 'Launch & Handover',
      desc: 'Final QA, performance optimization, and deployment. You get all documentation, source code, and a 30-day support window.',
    },
  ];

  return (
    <section className="relative z-10 border-t border-sage/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-3 font-mono text-sm tracking-widest text-sage">03 / PROCESS</p>
          <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">How I operate.</h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <FadeIn key={step.num} delay={index * 0.1} className="h-full">
              <div className="relative h-full border border-sage/30 bg-olive p-8 transition-colors duration-300 hover:border-sage">
                <div className="pointer-events-none absolute right-4 top-4 mb-6 font-mono text-6xl font-bold text-sage/30">
                  {step.num}
                </div>
                <h3 className="relative z-10 mb-3 pr-12 text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="relative z-10 text-sm leading-relaxed text-white/70">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
