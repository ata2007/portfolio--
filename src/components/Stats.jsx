import FadeIn from './FadeIn';

const Stats = () => {
  const stats = [
    {
      value: '100%',
      label: 'Hand-Written Code',
      sub: 'No page builders or templates',
    },
    { value: '320px+', label: 'Responsive', sub: 'Mobile-first layouts' },
    { value: 'Semantic', label: 'Accessible', sub: 'SEO-friendly structure' },
    { value: 'Zero', label: 'Compromise', sub: 'Built to last' },
  ];

  return (
    <section className="relative z-10 border-t border-sage/30 bg-sage py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 divide-y divide-olive/20 text-center sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.08}>
              <div className="py-4 sm:py-0">
                <div className="mb-2 text-4xl font-bold text-olive md:text-5xl">
                  {stat.value}
                </div>
                <div className="mb-1 text-sm font-bold tracking-wider text-olive uppercase">
                  {stat.label}
                </div>
                <div className="font-mono text-xs text-olive/70">{stat.sub}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
