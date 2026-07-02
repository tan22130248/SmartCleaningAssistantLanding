import { useState } from 'react';

interface Spec {
  icon: string;
  label: string;
  value: string;
}

interface Props {
  specs: Spec[];
}

export function SpecsSection({ specs }: Props) {
  const [activeTab, setActiveTab] = useState<'standard' | 'pro'>('standard');

  const proSpecs = specs.map(s => ({
    ...s,
    value: s.label.includes('hút') ? '6500Pa' : s.value
  }));

  const currentSpecs = activeTab === 'pro' ? proSpecs : specs;

  return (
    <section className="py-24 bg-surface-container-low" id="specs">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display-lg text-headline-md md:text-display-lg text-on-background">
            Thông số kỹ thuật <span className="text-primary">Vượt Trội</span>
          </h2>
          <div className="flex border border-outline-variant rounded-lg overflow-hidden text-sm">
            <button 
              onClick={() => setActiveTab('standard')}
              className={`px-4 py-1.5 font-medium transition ${activeTab === 'standard' ? 'bg-primary text-on-primary' : 'hover:bg-surface-container'}`}
            >
              Standard
            </button>
            <button 
              onClick={() => setActiveTab('pro')}
              className={`px-4 py-1.5 font-medium transition ${activeTab === 'pro' ? 'bg-primary text-on-primary' : 'hover:bg-surface-container'}`}
            >
              Pro
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {currentSpecs.map((spec, i) => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-outline-variant/20">
                <span className="text-on-surface-variant flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">{spec.icon}</span> 
                  {spec.label}
                </span>
                <span className="font-bold text-on-background">{spec.value}</span>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden ambient-shadow rotate-3 hover:rotate-0 transition-transform">
              <img 
                className="w-full object-cover" 
                alt="Cấu tạo robot" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7voTgNQcJEmqN3DX_UXj3ZjZrV6uJkgTs8OPve3qgUSCRk3unqSZepYMPrRwjLgiSHYfF-3IgrUE_VddNU1JRxWdcowWM648FAG815QMXe3eddktBdBVd_rGBNvqTQtw9fifvGTGq95BTc7ggq_0maIvlXs5vJe2AjAbAM4pq8o7kugpPI17N7-_kewM6eOcGnG7kuBnP_vAw59QxvEIGRCtXVz8zr6FMQASxe0AzGAlv_kO785DozLSMM3ua9sT2BZsxM_d4yGg" 
                width="600"
                height="450"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
