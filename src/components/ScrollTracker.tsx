import { useEffect, useState } from 'react';

export function ScrollTracker() {
  const [showToast, setShowToast] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent > 50 && !hasShown) {
        setShowToast(true);
        setHasShown(true);
        setTimeout(() => setShowToast(false), 4500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown]);

  if (!showToast) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] px-5 py-3 rounded-2xl bg-surface-container border border-outline-variant shadow-xl text-sm flex items-center gap-3">
      <span>Bạn đã xem 50% trang — xem thêm <a href="#specs" className="text-primary underline">thông số kỹ thuật</a></span>
      <button onClick={() => setShowToast(false)} className="text-on-surface-variant hover:text-primary">✕</button>
    </div>
  );
}
