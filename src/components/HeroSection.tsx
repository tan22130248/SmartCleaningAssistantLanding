import { Icon } from './Icon';

interface HeroProps {
  tagline: string;
  description: string;
}

export function HeroSection({ tagline, description }: HeroProps) {
  return (
    <section className="relative pt-12 pb-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="hero-copy">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6">
            <Icon name="verified" size={18} fill="currentColor" />
            <span className="font-label-sm uppercase tracking-wider">ÄÆ°á»£c tin dÃ¹ng bá»Ÿi 10,000+ gia Ä‘Ã¬nh</span>
          </div>
          <h1 className="font-display-lg text-[32px] md:text-display-lg text-on-background mb-6 leading-tight">
            {tagline.split(',')[0]},<br /><span className="text-primary">{tagline.split(',')[1]}</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 active:scale-[0.985] transition-all shadow-lg shadow-primary/20">
                Äáº·t hÃ ng ngay <Icon name="arrow_forward" size={24} />
              </button>
              <button className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-secondary/5 active:scale-[0.985] transition-all">Xem demo</button>
          </div>
        </div>
        
        <div className="relative hero-visual">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"></div>
            <div className="rounded-3xl overflow-hidden ambient-shadow border border-outline-variant/20 bg-gradient-to-br from-primary/10 via-surface-container to-secondary/10 aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <Icon name="smart_toy" className="mx-auto text-primary/80" size={120} strokeWidth={1.5} />
                <p className="mt-2 text-on-surface-variant font-semibold">CleanBot AI</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
