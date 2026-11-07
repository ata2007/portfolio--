import FadeIn from './FadeIn';

const TechStack = () => {
  const categories = [
    {
      title: 'Frontend',
      tools: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3'],
    },
    {
      title: 'Backend',
      tools: ['Node.js', 'Express', 'Python', 'RESTful APIs'],
    },
    {
      title: 'Database',
      tools: ['MongoDB', 'PostgreSQL', 'MySQL'],
    },
    {
      title: 'Tools & Practice',
      tools: ['Git & GitHub', 'AWS / Vercel', 'Figma', 'Semantic Markup'],
    },
  ];

  return (
    <section className="relative z-10 border-t border-sage/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-3 font-mono text-sm tracking-widest text-sage">TECH STACK</p>
          <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">
            Tools I actually use.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <FadeIn key={category.title} delay={index * 0.1} className="h-full">
              <div className="h-full border border-sage/30 bg-olive p-6">
                <h3 className="mb-4 border-b border-sage/30 pb-4 font-mono text-sm tracking-widest text-sage">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.tools.map((tool) => (
                    <li key={tool} className="flex items-center gap-2 text-sm text-white">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage" aria-hidden="true" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
