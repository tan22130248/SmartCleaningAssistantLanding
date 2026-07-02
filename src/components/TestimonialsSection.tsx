import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
}

interface Props {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: Props) {
  return (
    <section className="py-24 bg-surface-container-lowest" id="reviews">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <h2 className="font-display-lg text-headline-md md:text-display-lg text-center mb-16">Khách hàng nói gì?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-background border border-outline-variant/10 ambient-shadow"
            >
              <div className="flex gap-1 mb-4 text-primary">
                {Array(t.rating).fill(0).map((_, j) => (
                  <span key={j} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="italic text-on-surface-variant mb-8">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h5 className="font-bold">{t.name}</h5>
                  <span className="text-xs text-on-surface-variant">{t.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
