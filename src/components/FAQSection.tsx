import { useState } from 'react';
import { Icon } from './Icon';

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQ[];
}

export function FAQSection({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24" id="faq">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-display-lg text-headline-md text-center mb-12 dark:text-[#e2e8f0]">Câu hỏi thường gặp</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-outline-variant/20 dark:border-[#475569]/20">
              <button 
                onClick={() => toggle(index)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors group dark:text-[#e2e8f0]"
              >
                <span className="font-bold">{faq.question}</span>
                <Icon name={openIndex === index ? 'remove' : 'add'} size={22} />
              </button>
              {openIndex === index && (
                <div className="pb-6 text-on-surface-variant dark:text-[#94a3b8] leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
