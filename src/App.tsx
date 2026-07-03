import { productData } from './data/product';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ScrollTracker } from './components/ScrollTracker';
import { Icon } from './components/Icon';
import { lazy, Suspense } from 'react';
const FeaturesSection = lazy(() => import('./components/FeaturesSection').then(m => ({ default: m.FeaturesSection })));
const SpecsSection = lazy(() => import('./components/SpecsSection').then(m => ({ default: m.SpecsSection })));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const FAQSection = lazy(() => import('./components/FAQSection').then(m => ({ default: m.FAQSection })));
const RegisterForm = lazy(() => import('./components/RegisterForm').then(m => ({ default: m.RegisterForm })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const Chatbot = lazy(() => import('./components/Chatbot').then(m => ({ default: m.Chatbot })));

function App() {
  return (
    <div className="bg-background dark:bg-[#0f172a] text-on-surface dark:text-[#e2e8f0] font-body-md overflow-x-hidden">
      <Navbar />
      <ScrollTracker />
      
      <HeroSection 
        tagline={productData.tagline}
        description={productData.description}
      />

      {/* Trust Bar */}
      <div className="bg-surface-container-low py-10 border-y border-outline-variant/10">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-wrap justify-around items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-bold text-2xl text-on-surface-variant"><Icon name="award_star" size={30} /> CE CERTIFIED</div>
          <div className="flex items-center gap-2 font-bold text-2xl text-on-surface-variant"><Icon name="verified_user" size={30} /> ISO 9001</div>
          <div className="flex items-center gap-2 font-bold text-2xl text-on-surface-variant"><Icon name="precision_manufacturing" size={30} /> TECHREVIEW</div>
          <div className="flex items-center gap-2 font-bold text-2xl text-on-surface-variant"><Icon name="eco" size={30} /> GREEN LAB</div>
        </div>
      </div>

      <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
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
                  <Icon name={step.icon} className="text-primary" size={30} />
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
      </Suspense>
      
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
    </div>
  );
}

export default App;
