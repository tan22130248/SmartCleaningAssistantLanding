export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-10 py-20 max-w-[1280px] mx-auto w-full gap-8">
        <div className="flex flex-col gap-4">
          <div className="font-display-lg-mobile text-display-lg-mobile font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-3xl">smart_toy</span>
            <span>CleanBot AI</span>
          </div>
          <p className="text-on-surface-variant max-w-xs">Mang đến sự sạch sẽ tuyệt đối cho ngôi nhà Việt bằng trí tuệ nhân tạo.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            ['Sản phẩm', ['CleanBot S1', 'Phụ kiện', 'Trạm sạc']],
            ['Công ty', ['Về chúng tôi', 'Tuyển dụng', 'Blog']],
            ['Hỗ trợ', ['Hướng dẫn', 'Bảo hành', 'Liên hệ']],
            ['Pháp lý', ['Bảo mật', 'Điều khoản']],
          ].map(([title, links], i) => (
            <div key={i} className="flex flex-col gap-4">
              <span className="font-bold text-on-background">{title}</span>
              {(links as string[]).map((l: string, j: number) => <a key={j} className="text-on-surface-variant hover:text-primary transition-colors" href="#">{l}</a>)}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant text-sm">
        <span>© 2024 CleanBot AI. All rights reserved.</span>
        <div className="flex gap-6">
          <span className="material-symbols-outlined cursor-pointer hover:text-primary">face_nod</span>
          <span className="material-symbols-outlined cursor-pointer hover:text-primary">smart_display</span>
          <span className="material-symbols-outlined cursor-pointer hover:text-primary">alternate_email</span>
        </div>
      </div>
    </footer>
  );
}
