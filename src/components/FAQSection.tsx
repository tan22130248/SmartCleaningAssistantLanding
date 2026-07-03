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
        <h2 className="font-display-lg text-headline-md text-center mb-12">Câu hỏi thường gặp</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-outline-variant/20">
              <button 
                onClick={() => toggle(index)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors group"
              >
                <span className="font-bold">{faq.question}</span>
                <Icon name={openIndex === index ? 'remove' : 'add'} size={22} />
              </button>
              {openIndex === index && (
                <div className="pb-6 text-on-surface-variant leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
