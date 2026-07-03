import { useState } from 'react';
import { Icon } from './Icon';
import screenImage from '../assets/screen.png';

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
                  <Icon name={spec.icon} className="text-primary" size={22} /> 
                  {spec.label}
                </span>
                <span className="font-bold text-on-background dark:text-[#e2e8f0]">{spec.value}</span>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden ambient-shadow bg-surface-container p-8">
              <img 
                src={screenImage}
                className="w-full object-contain" 
                alt="Cấu tạo chi tiết robot hút bụi CleanBot AI" 
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
