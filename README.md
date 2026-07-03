# CleanBot AI - Landing Page

> **Robot hút bụi thông minh tích hợp AI** — Giải pháp dọn dẹp hiện đại cho ngôi nhà Việt.

![CleanBot AI](https://lh3.googleusercontent.com/aida-public/AB6AXuCIaoeCY0VLUaWQVC3wZTlHzgdQgHBsJjImEIVb9VuWa8IEOwgS6Y9tdkn8RLzfEKzdVdpRTeH4btd8ctcs7dCln5KEID7mxvbUZA1I_58MQElM6eksMG5P0ybvAgnm1Qv-IMRu0n61MUCz4RLrUe--6hldAiPDtoCFNBBqAzv4ofHyZsA_pBaBpUBoCCrkc8WXgL15BvMl2SrDxbbZsrktLyUJvIoCRuHo__MtG8p0j5xIiaPC4PWQioZlVtWJVo63mpKg4FTXNOw)

## 🌟 Mô tả sản phẩm

CleanBot AI là landing page giới thiệu robot hút bụi thế hệ mới tích hợp trí tuệ nhân tạo. Website được thiết kế với giao diện hiện đại, tối ưu trải nghiệm người dùng và hỗ trợ dark mode.

**Điểm nổi bật:**
- Lập bản đồ AI thông minh (LiDAR 4.0)
- Tránh vật cản 360° với hơn 100 loại vật dụng
- Tự sạc pin & tự đổ rác
- Điều khiển qua App CleanBot Home
- 8 thông số kỹ thuật chi tiết

---

## 🛠️ Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v4** + `@tailwindcss/vite`
- **Framer Motion** (animation)
- **Zod** (form validation)
- **React Hook Form**

---

## ✨ Tính năng đã triển khai

### Core Features
- [x] Navbar sticky + responsive
- [x] Hero section với entrance animation
- [x] Features grid (4 tính năng nổi bật)
- [x] Specs section (có tab Standard vs Pro)
- [x] Process steps (4 bước)
- [x] Testimonials grid
- [x] FAQ Accordion
- [x] Register form (Zod validation)

### Điểm cộng (Bonus)
- [x] **Dark Mode** — ThemeContext + localStorage + toggle icon
- [x] **Scroll tracking** — Toast khi scroll > 50%
- [x] **Chatbot widget** — Rule-based trả lời FAQ (góc dưới bên phải)
- [x] **Micro-interactions** — Framer Motion + hover/active effects
- [x] **Responsive** — Mobile (375px), Tablet (768px), Desktop (1440px)
- [x] **SEO** — Meta tags, Open Graph, Twitter Card

---

## 🚀 Cách chạy local

```bash
# 1. Clone repository
git clone https://github.com/tan22130248/SmartCleaningAssistantLanding.git
cd SmartCleaningAssistantLanding

# 2. Cài đặt dependencies
npm install

# 3. Chạy development server
npm run dev
```

Truy cập: `http://localhost:5173`

### Build production

```bash
npm run build
npm run preview
```

---

## 🌐 Link Deploy

**Production:** [https://silly-douhua-650a60.netlify.app](https://silly-douhua-650a60.netlify.app)

---

## 📊 PageSpeed Insights (Mobile)

- **Performance:** 83
- **Accessibility:** 94
- **Best Practices:** 100
- **SEO:** 92

---

## 📸 Minh chứng điểm cộng

### 1. Dark Mode
![Dark Mode](https://via.placeholder.com/600x400?text=Dark+Mode+Screenshot)

### 2. Chatbot Widget
![Chatbot](https://via.placeholder.com/600x400?text=Chatbot+Widget)

### 3. Form Submit + Webhook
![Form Success](https://via.placeholder.com/600x400?text=Form+Submit+Success)

### 4. Animation (Framer Motion)
- Hero entrance animation
- Features scroll reveal
- Specs tab switching
- Testimonials fade-in

---

## 📝 Ghi chú

- Dự án được phát triển theo **8 giai đoạn** (từ wireframe → deploy)
- Tất cả component được tách riêng, tái sử dụng tốt
- Dữ liệu sản phẩm được quản lý tập trung tại `src/data/product.ts`
- Dark mode lưu trạng thái vào `localStorage`

---

**Made with ❤️ by Smart Cleaning Assistant Team**
