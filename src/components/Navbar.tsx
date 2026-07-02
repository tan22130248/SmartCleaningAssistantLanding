import { productData } from '../data/product';
import { useTheme } from '../context/ThemeContext';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-surface/80 glass-nav border-b border-outline-variant/30 shadow-sm dark:bg-surface/90">
      <div className="flex justify-between items-center px-4 md:px-10 py-4 max-w-[1280px] mx-auto w-full">
        <div className="font-display-lg-mobile text-display-lg-mobile font-bold text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-4xl">smart_toy</span>
          <span>{productData.name}</span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#features">Tính năng</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#specs">Thông số</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#reviews">Đánh giá</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#faq">FAQ</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#contact">Liên hệ</a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="hidden md:block material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-all"
          >
            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </button>
          <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 active:scale-95 transition-all">Đặt hàng ngay</button>
          <button className="md:hidden material-symbols-outlined text-primary">menu</button>
        </div>
      </div>
    </nav>
  );
}
