import { productData } from '../data/product';
import { useTheme } from '../context/ThemeContext';
import { Icon } from './Icon';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-surface/80 dark:bg-[#1e293b]/90 glass-nav border-b border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-center px-4 md:px-10 py-4 max-w-[1280px] mx-auto w-full">
        <div className="font-display-lg-mobile text-display-lg-mobile font-bold text-primary flex items-center gap-2">
          <Icon name="smart_toy" size={36} strokeWidth={1.75} />
          <span>{productData.name}</span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-on-surface-variant dark:text-[#94a3b8] hover:text-primary transition-colors" href="#features">Tính năng</a>
          <a className="text-on-surface-variant dark:text-[#94a3b8] hover:text-primary transition-colors" href="#specs">Thông số</a>
          <a className="text-on-surface-variant dark:text-[#94a3b8] hover:text-primary transition-colors" href="#reviews">Đánh giá</a>
          <a className="text-on-surface-variant dark:text-[#94a3b8] hover:text-primary transition-colors" href="#faq">FAQ</a>
          <a className="text-on-surface-variant dark:text-[#94a3b8] hover:text-primary transition-colors" href="#contact">Liên hệ</a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="hidden md:flex text-on-surface-variant dark:text-[#94a3b8] hover:bg-surface-container-low dark:hover:bg-[#334155] p-2 rounded-full transition-all"
            aria-label="Toggle theme"
          >
            <Icon name={theme === 'dark' ? 'light_mode' : 'dark_mode'} size={24} />
          </button>
          <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 active:scale-95 transition-all">Đặt hàng ngay</button>
          <button className="md:hidden text-primary" aria-label="Open menu">
            <Icon name="menu" size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
}
