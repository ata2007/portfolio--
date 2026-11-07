import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import TechStack from './components/TechStack';
import Process from './components/Process';
import Stats from './components/Stats';
import Credential from './components/Credential';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeIn from './components/FadeIn';

function App() {
  return (
    <div className="min-h-screen bg-olive font-sans text-white">
      <Background />

      <div className="relative z-10 flex flex-col">
        <Header />
        <main>
          <Hero />
          <Services />
          <Work />
          <TechStack />
          <Process />
          <Stats />

          <section className="relative z-10 border-t border-sage/30 bg-olive py-24">
            <div className="mx-auto max-w-6xl px-6">
              <FadeIn>
                <p className="mb-3 font-mono text-sm tracking-widest text-sage">
                  VERIFIED CREDENTIALS
                </p>
                <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">
                  Proof of expertise
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <Credential />
              </FadeIn>
            </div>
          </section>

          <section className="relative z-10 border-t border-sage/30 bg-olive py-24">
            <div className="mx-auto max-w-4xl px-6 text-center">
              <FadeIn>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-white md:text-5xl">
                  Built by a <span className="text-sage">craftsman</span>,
                  <br />
                  not a contractor.
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                  I am a developer who builds for the business behind the website. I don&apos;t take on
                  every project — I take on the ones I can deliver with no compromise. Everything
                  here is hand-written code. No page builders, no templates.
                </p>
                <p className="font-mono text-sm text-sage">
                  Small team. High bar. Work that holds up.
                </p>
              </FadeIn>
            </div>
          </section>

          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
