import { useState, useEffect } from 'react';
import { Zap, Target, Award, TrendingUp, Mail, MapPin, Phone } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    benefits: false,
    ingredients: false,
    cta: false,
    contact: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['hero', 'benefits', 'ingredients', 'cta', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
          setIsVisible(prev => ({ ...prev, [section]: isInView }));
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="text-yellow-500" size={28} />
            <span className="text-2xl font-bold tracking-tight">FOCUSFUEL</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#benefits" className="hover:text-yellow-500 transition-colors">Benefits</a>
            <a href="#ingredients" className="hover:text-yellow-500 transition-colors">Ingredients</a>
            <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
          </div>
          <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform gloss-highlight">
            Order Now
          </button>
        </div>
      </nav>

      <section
        id="hero"
        className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-1000 ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="absolute inset-0 metallic-gradient"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
            transform: `scale(${1 + scrollY * 0.0005})`
          }}
        ></div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible.hero ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="inline-block px-4 py-2 bg-yellow-600/20 border border-yellow-600/50 rounded-full text-yellow-500 text-sm font-semibold">
              ZERO SUGAR • NATURAL CAFFEINE
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Stay <span className="text-yellow-500 text-shadow-glow">Focused</span>,<br />
              Stay <span className="text-yellow-500 text-shadow-glow">Fresh</span>.
            </h1>
            <p className="text-xl text-gray-400">
              Premium energy drink engineered for students who demand peak performance without the crash.
            </p>
            <button className="group bg-gradient-to-r from-yellow-600 to-yellow-500 px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 gloss-highlight flex items-center gap-2">
              <Zap className="group-hover:rotate-12 transition-transform" />
              Get Your First Can Free
            </button>
          </div>

          <div className={`relative transition-all duration-1000 delay-500 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <img
              src="/ChatGPT Image Oct 17, 2025, 05_55_02 PM (1).png"
              alt="FocusFuel Energy Drink"
              className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            />
          </div>
        </div>
      </section>

      <section
        id="benefits"
        className={`py-20 relative transition-all duration-1000 ${isVisible.benefits ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16">
            Why Choose <span className="text-yellow-500">FocusFuel</span>?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Laser Focus",
                description: "Natural nootropics enhance concentration and mental clarity for hours of sustained productivity.",
                delay: 100
              },
              {
                icon: TrendingUp,
                title: "No Crash",
                description: "Scientifically balanced formula provides smooth, sustained energy without the dreaded afternoon crash.",
                delay: 200
              },
              {
                icon: Award,
                title: "Clean Energy",
                description: "Zero sugar, zero artificial colors, just pure natural caffeine from green tea and guarana.",
                delay: 300
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className={`group metallic-gradient p-8 rounded-2xl border border-zinc-800 hover:border-yellow-600/50 transition-all duration-500 gloss-highlight ${isVisible.benefits ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${benefit.delay}ms` }}
              >
                <benefit.icon className="w-12 h-12 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="ingredients"
        className={`py-20 relative transition-all duration-1000 ${isVisible.ingredients ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="absolute inset-0 bg-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-4">
            Premium <span className="text-yellow-500">Ingredients</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Scientifically formulated for peak performance</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Natural Caffeine", amount: "150mg", source: "Green Tea Extract" },
              { name: "L-Theanine", amount: "100mg", source: "Smooth Focus" },
              { name: "B-Vitamins", amount: "Complex", source: "Energy Metabolism" },
              { name: "Guarana", amount: "50mg", source: "Sustained Release" },
              { name: "Ginseng", amount: "75mg", source: "Mental Clarity" },
              { name: "Taurine", amount: "200mg", source: "Performance Boost" },
              { name: "CoQ10", amount: "30mg", source: "Cellular Energy" },
              { name: "Zero Sugar", amount: "0g", source: "No Crash" }
            ].map((ingredient, index) => (
              <div
                key={index}
                className={`glass-effect p-6 rounded-xl hover:bg-zinc-900/50 transition-all duration-300 hover:scale-105 ${isVisible.ingredients ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <h3 className="text-xl font-bold text-yellow-500 mb-2">{ingredient.name}</h3>
                <p className="text-2xl font-bold mb-1">{ingredient.amount}</p>
                <p className="text-sm text-gray-400">{ingredient.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cta"
        className={`py-32 relative transition-all duration-1000 ${isVisible.cta ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)'
        }}></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible.cta ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <Zap className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to <span className="text-yellow-500 text-shadow-glow">Fuel Your Focus</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join thousands of students who've already upgraded their productivity game. Get your first can absolutely free.
            </p>
            <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 px-12 py-5 rounded-full text-xl font-bold hover:scale-110 transition-all duration-300 gloss-highlight inline-flex items-center gap-3 shadow-2xl">
              <Zap />
              Claim Your Free Can
            </button>
            <p className="mt-6 text-sm text-gray-500">No credit card required • Free shipping included</p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className={`py-20 border-t border-zinc-800 relative transition-all duration-1000 ${isVisible.contact ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="absolute inset-0 metallic-gradient"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in <span className="text-yellow-500">Touch</span></h2>
              <p className="text-gray-400 mb-8 text-lg">
                Questions about FocusFuel? We'd love to hear from you. Reach out and let's talk about fueling your success.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center group-hover:bg-yellow-600/30 transition-colors">
                    <Mail className="text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold">hello@focusfuel.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center group-hover:bg-yellow-600/30 transition-colors">
                    <Phone className="text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-semibold">1-800-FOCUS-FUEL</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center group-hover:bg-yellow-600/30 transition-colors">
                    <MapPin className="text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 focus:border-yellow-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 focus:border-yellow-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 focus:border-yellow-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us what's on your mind..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 py-3 rounded-lg font-bold hover:scale-105 transition-transform gloss-highlight"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="text-yellow-500" size={20} />
            <span className="font-bold text-white">FOCUSFUEL</span>
          </div>
          <p>&copy; 2025 FocusFuel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
