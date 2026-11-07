import {
  IconWeb,
  IconMobile,
  IconEcommerce,
  IconBusiness,
  IconDesign,
  IconStrategy,
} from './Icons';
import FadeIn from './FadeIn';

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Business Websites',
      desc: 'Multi-page sites for companies — services, about, contact, and everything a customer needs to decide to work with you.',
      icon: IconWeb,
    },
    {
      id: '02',
      title: 'E-Commerce Systems',
      desc: 'Product catalogues, filtering, working carts, and an order flow that ends in a seamless checkout.',
      icon: IconEcommerce,
    },
    {
      id: '03',
      title: 'Custom Web Apps',
      desc: 'Interactive components, search, dashboards, and complex web applications built to your exact specification.',
      icon: IconMobile,
    },
    {
      id: '04',
      title: 'Web Redesigns',
      desc: 'Rebuilding outdated sites with modern layout, better mobile behaviour, faster loading, and clearer structure.',
      icon: IconDesign,
    },
    {
      id: '05',
      title: 'UI/UX Engineering',
      desc: 'Design sprints, prototyping, and design systems that translate perfectly into front-end code.',
      icon: IconStrategy,
    },
    {
      id: '06',
      title: 'Maintenance & Support',
      desc: 'Ongoing updates, content changes, bug fixes, and performance checks after launch.',
      icon: IconBusiness,
    },
  ];

  return (
    <section
      id="services"
      className="relative z-10 border-t border-sage/30 bg-olive py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-3 font-mono text-sm tracking-widest text-sage">WHAT I BUILD</p>
          <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">
            Built for the business behind the website.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.08} className="h-full">
              <div className="group h-full border border-sage/30 bg-olive p-8 transition-colors duration-300 hover:border-sage">
                <div className="mb-6 flex items-start justify-between">
                  <span className="font-mono text-sm text-sage transition-colors group-hover:text-white">
                    {service.id}
                  </span>
                  <service.icon className="h-6 w-6 text-sage transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{service.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
