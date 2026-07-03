import { Icon } from './Icon';

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
          <h2 className="font-display-lg text-headline-md md:text-display-lg mb-4 text-on-background dark:text-[#e2e8f0]">Tại sao chọn CleanBot AI?</h2>
          <p className="text-on-surface-variant dark:text-[#94a3b8] max-w-2xl mx-auto">Công nghệ tiên phong giúp việc làm sạch nhà cửa trở nên thông minh và hiệu quả hơn bao giờ hết.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div 
              key={i}
              className="p-8 bg-surface-container-lowest dark:bg-[#1e293b] rounded-2xl border border-outline-variant/20 dark:border-[#475569]/20 ambient-shadow group hover:border-primary/30 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <Icon name={f.icon} size={32} />
              </div>
              <h3 className="font-title-lg text-title-lg mb-3 dark:text-[#e2e8f0]">{f.title}</h3>
              <p className="text-on-surface-variant dark:text-[#94a3b8] leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
