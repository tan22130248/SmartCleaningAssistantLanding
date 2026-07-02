import { productData } from './data/product';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { SpecsSection } from './components/SpecsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { RegisterForm } from './components/RegisterForm';
import { ScrollTracker } from './components/ScrollTracker';
import { lazy, Suspense } from 'react';
const Chatbot = lazy(() => import('./components/Chatbot').then(m => ({ default: m.Chatbot })));

function App() {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <Navbar />
      <ScrollTracker />
      
      <HeroSection 
        tagline={productData.tagline}
        description={productData.description}
      />

      {/* Trust Bar */}
      <div className="bg-surface-container-low py-10 border-y border-outline-variant/10">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-wrap justify-around items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-bold text-2xl text-on-surface-variant"><span className="material-symbols-outlined text-3xl">award_star</span> CE CERTIFIED</div>
          <div className="flex items-center gap-2 font-bold text-2xl text-on-surface-variant"><span className="material-symbols-outlined text-3xl">verified_user</span> ISO 9001</div>
          <div className="flex items-center gap-2 font-bold text-2xl text-on-surface-variant"><span className="material-symbols-outlined text-3xl">precision_manufacturing</span> TECHREVIEW</div>
          <div className="flex items-center gap-2 font-bold text-2xl text-on-surface-variant"><span className="material-symbols-outlined text-3xl">eco</span> GREEN LAB</div>
        </div>
      </div>

      <FeaturesSection features={productData.features} />
      <SpecsSection specs={productData.specs} />
      
      {/* Process Section (static for now) */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="text-center mb-20 reveal">
            <h2 className="font-display-lg text-headline-md md:text-display-lg text-on-background">Quy trình làm sạch khép kín</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-outline-variant/20 -z-10"></div>
            {productData.process.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center reveal">
                <div className="w-20 h-20 rounded-full bg-surface-container-highest border-4 border-background flex items-center justify-center mb-6 shadow-md">
                  <span className="material-symbols-outlined text-primary text-3xl">{step.icon}</span>
                </div>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-on-surface-variant px-4">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={productData.testimonials} />
      <FAQSection faqs={productData.faqs} />
      <RegisterForm />
      <Footer />
      
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
    </div>
  );
}

export default App;
