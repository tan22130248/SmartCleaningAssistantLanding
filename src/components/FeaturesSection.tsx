import { motion } from 'framer-motion';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Props {
  features: Feature[];
}

export function FeaturesSection({ features }: Props) {
  return (
    <section className="py-24" id="features">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-headline-md md:text-display-lg mb-4 text-on-background">Tại sao chọn CleanBot AI?</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Công nghệ tiên phong giúp việc làm sạch nhà cửa trở nên thông minh và hiệu quả hơn bao giờ hết.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 ambient-shadow group hover:border-primary/30 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">{f.icon}</span>
              </div>
              <h3 className="font-title-lg text-title-lg mb-3">{f.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
