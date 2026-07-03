import { useState } from 'react';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function RegisterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!emailPattern.test(email.trim())) {
      setError('Email khÃ´ng há»£p lá»‡');
      return;
    }

    try {
      // Simulate webhook (replace with real webhook.site or Formspree URL)
      await fetch('https://webhook.site/your-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-24" id="contact">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="bg-primary p-12 md:p-20 rounded-[2rem] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="relative z-10 text-white max-w-lg">
            <h2 className="font-display-lg text-headline-md md:text-display-lg mb-4">ÄÄƒng kÃ½ nháº­n Æ°u Ä‘Ã£i</h2>
            <p className="text-white/80 font-body-lg">Äá»«ng bá» lá»¡ cÆ¡ há»™i nháº­n voucher giáº£m giÃ¡ 20% vÃ  cÃ¡c thÃ´ng tin cáº­p nháº­t cÃ´ng nghá»‡ má»›i nháº¥t tá»« CleanBot.</p>
          </div>
          <div className="w-full md:w-auto relative z-10">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 bg-white/10 p-2 rounded-2xl backdrop-blur-md">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border-none rounded-xl px-6 py-4 flex-grow min-w-[280px] focus:ring-2 focus:ring-primary-container text-on-surface" 
                placeholder="Email cá»§a báº¡n..." 
              />
              <button 
                type="submit"
                className="bg-primary-container text-on-primary-container font-bold px-8 py-4 rounded-xl hover:opacity-90 active:scale-95 transition-all"
              >
                ÄÄƒng kÃ½ ngay
              </button>
            </form>
            {error && <p className="text-red-300 mt-2 text-sm">{error}</p>}
            {status === 'success' && <p className="text-green-300 mt-2 text-sm">ÄÄƒng kÃ½ thÃ nh cÃ´ng! Cáº£m Æ¡n báº¡n.</p>}
            {status === 'error' && <p className="text-red-300 mt-2 text-sm">CÃ³ lá»—i xáº£y ra. Vui lÃ²ng thá»­ láº¡i.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

