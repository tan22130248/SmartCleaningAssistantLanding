import { useState } from 'react';

const faqAnswers: Record<string, string> = {
  'bảo hành': 'Sản phẩm được bảo hành 24 tháng cho thân máy và 12 tháng cho pin.',
  'pin': 'Pin Lithium-ion 5200mAh có tuổi thọ 3-5 năm (khoảng 1000 chu kỳ sạc).',
  'app': 'Ứng dụng CleanBot Home hỗ trợ đầy đủ tiếng Việt, dễ sử dụng.',
  'thảm': 'Với lực hút 5000Pa, robot hút bụi rất tốt trên thảm dày.',
  'wifi': 'Kết nối Wi-Fi 2.4GHz qua app bằng cách quét mã QR dưới nắp robot.',
  'default': 'Bạn có thể xem thêm tại phần FAQ hoặc liên hệ hỗ trợ.'
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: 'Xin chào! Tôi có thể giúp gì cho bạn về CleanBot AI?', isBot: true }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = input.toLowerCase();
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput('');

    setTimeout(() => {
      let reply = faqAnswers.default;
      Object.keys(faqAnswers).forEach(key => {
        if (userMsg.includes(key)) reply = faqAnswers[key];
      });
      setMessages(prev => [...prev, { text: reply, isBot: true }]);
    }, 600);
  };

  return (
    <>
      <button 
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center z-[80] hover:scale-110 transition-all"
      >
        <span className="material-symbols-outlined text-3xl">chat_bubble</span>
      </button>

      {open && (
        <div className="fixed bottom-24 right-8 w-80 bg-surface border border-outline-variant rounded-2xl shadow-2xl z-[90] flex flex-col overflow-hidden">
          <div className="bg-primary text-on-primary px-4 py-3 font-semibold flex justify-between items-center">
            <span>Trợ lý CleanBot</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          
          <div className="h-72 overflow-y-auto p-4 space-y-3 text-sm bg-surface-container-lowest">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-2xl ${msg.isBot ? 'bg-surface-container' : 'bg-primary text-on-primary'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-outline-variant flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Hỏi về bảo hành, pin, app..."
              className="flex-1 bg-surface-container border border-outline-variant rounded-xl px-3 py-2 text-sm"
            />
            <button onClick={sendMessage} className="px-4 bg-primary text-on-primary rounded-xl">Gửi</button>
          </div>
        </div>
      )}
    </>
  );
}
