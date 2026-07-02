import { motion } from 'framer-motion';

interface HeroProps {
  tagline: string;
  description: string;
}

export function HeroSection({ tagline, description }: HeroProps) {
  return (
    <section className="relative pt-12 pb-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <span className="font-label-sm uppercase tracking-wider">Được tin dùng bởi 10,000+ gia đình</span>
          </div>
          <h1 className="font-display-lg text-[32px] md:text-display-lg text-on-background mb-6 leading-tight">
            {tagline.split(',')[0]},<br /><span className="text-primary">{tagline.split(',')[1]}</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 active:scale-[0.985] transition-all shadow-lg shadow-primary/20">
                Đặt hàng ngay <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-secondary/5 active:scale-[0.985] transition-all">Xem demo</button>
          </div>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"></div>
          <div className="rounded-3xl overflow-hidden ambient-shadow border border-outline-variant/20">
            <img 
              className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" 
              alt="Robot hút bụi" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIaoeCY0VLUaWQVC3wZTlHzgdQgHBsJjImEIVb9VuWa8IEOwgS6Y9tdkn8RLzfEKzdVdpRTeH4btd8ctcs7dCln5KEID7mxvbUZA1I_58MQElM6eksMG5P0ybvAgnm1Qv-IMRu0n61MUCz4RLrUe--6hldAiPDtoCFNBBqAzv4ofHyZsA_pBaBpUBoCCrkc8WXgL15BvMl2SrDxbbZsrktLyUJvIoCRuHo__MtG8p0j5xIiaPC4PWQioZlVtWJVo63mpKg4FTXNOw" 
              width="800"
              height="600"
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 50vw"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
