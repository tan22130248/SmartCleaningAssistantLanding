export interface ProductData {
  name: string;
  tagline: string;
  description: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  specs: Array<{
    icon: string;
    label: string;
    value: string;
  }>;
  process: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  testimonials: Array<{
    name: string;
    location: string;
    quote: string;
    rating: number;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const productData: ProductData = {
  name: "CleanBot AI",
  tagline: "Dọn Dẹp Thông Minh, Sống Thảnh Thơi",
  description: "Giải pháp robot hút bụi thế hệ mới tích hợp AI giúp không gian sống của bạn luôn sạch sẽ mà không cần chạm tay. Tự động hóa hoàn toàn quy trình dọn dẹp mỗi ngày.",
  
  features: [
    {
      icon: "map",
      title: "Lập bản đồ AI thông minh",
      description: "Sử dụng LiDAR thế hệ mới để quét và lưu trữ bản đồ 3D ngôi nhà chỉ trong một lần chạy đầu tiên."
    },
    {
      icon: "360",
      title: "Tránh vật cản 360°",
      description: "Nhận diện chính xác hơn 100 loại vật dụng gia đình, từ dây điện đến thú cưng để tránh va chạm."
    },
    {
      icon: "ev_station",
      title: "Tự sạc pin & Xả rác",
      description: "Chu trình khép kín hoàn toàn: tự quay về trạm sạc để nạp năng lượng và tự động đổ rác vào túi chứa."
    },
    {
      icon: "app_shortcut",
      title: "Điều khiển qua App",
      description: "Thiết lập tường ảo, vùng cấm và lịch trình dọn dẹp chi tiết từ bất kỳ đâu thông qua điện thoại."
    }
  ],

  specs: [
    {
      icon: "cyclone",
      label: "Lực hút tối đa",
      value: "5000Pa Super Suction"
    },
    {
      icon: "battery_charging_full",
      label: "Dung lượng pin",
      value: "5200mAh Lithium-ion"
    },
    {
      icon: "timer",
      label: "Thời gian hoạt động",
      value: "180 phút liên tục"
    },
    {
      icon: "explore",
      label: "Công nghệ dẫn đường",
      value: "LiDAR 4.0 & AI Camera"
    },
    {
      icon: "volume_down",
      label: "Độ ồn tối đa",
      value: "< 60dB (Chế độ êm ái)"
    },
    {
      icon: "straighten",
      label: "Kích thước",
      value: "350 × 350 × 96 mm"
    },
    {
      icon: "bluetooth",
      label: "Kết nối",
      value: "Wi-Fi 2.4GHz + App CleanBot Home"
    },
    {
      icon: "sensors",
      label: "Cảm biến",
      value: "LiDAR + Camera AI + 12 cảm biến va chạm"
    }
  ],

  process: [
    {
      icon: "add_location_alt",
      title: "Quét bản đồ",
      description: "Robot bắt đầu định vị và quét không gian 3D."
    },
    {
      icon: "route",
      title: "Lập lộ trình",
      description: "AI tính toán đường đi hiệu quả nhất, không bỏ sót."
    },
    {
      icon: "mop",
      title: "Dọn dẹp",
      description: "Hệ thống chổi kép và lực hút mạnh xử lý mọi bụi bẩn."
    },
    {
      icon: "home_repair_service",
      title: "Tự sạc",
      description: "Kết thúc phiên dọn dẹp, robot tự quay về dock sạc."
    }
  ],

  testimonials: [
    {
      name: "Trần Thu Hà",
      location: "Hà Nội",
      quote: "CleanBot AI thực sự thay đổi cuộc sống của gia đình mình. Từ khi có em nó, sàn nhà lúc nào cũng bóng loáng mà mình không cần động tay vào.",
      rating: 5
    },
    {
      name: "Minh Vương",
      location: "TP. Hồ Chí Minh",
      quote: "Rất ấn tượng với khả năng tránh vật cản. Nhà mình có trẻ nhỏ hay bày đồ chơi nhưng robot chưa bao giờ bị kẹt hay húc đổ đồ đạc.",
      rating: 5
    },
    {
      name: "Dương Lan",
      location: "Đà Nẵng",
      quote: "Tính năng tự đổ rác quá tiện lợi, cả tháng mình mới phải đi đổ túi rác một lần. App điều khiển mượt mà, dễ dùng cho cả người lớn tuổi.",
      rating: 5
    }
  ],

  faqs: [
    {
      question: "Chế độ bảo hành của CleanBot AI như thế nào?",
      answer: "Sản phẩm được bảo hành chính hãng 24 tháng cho thân máy và 12 tháng cho pin. Chúng tôi hỗ trợ 1 đổi 1 trong vòng 30 ngày nếu có lỗi từ nhà sản xuất."
    },
    {
      question: "Pin của robot sử dụng được bao lâu trước khi cần thay mới?",
      answer: "Pin Lithium-ion cao cấp của CleanBot AI có tuổi thọ trung bình từ 3-5 năm (tương đương 1000 chu kỳ sạc) trước khi dung lượng bắt đầu giảm đáng kể."
    },
    {
      question: "App điều khiển có hỗ trợ tiếng Việt không?",
      answer: "Có, ứng dụng CleanBot Home hoàn toàn hỗ trợ ngôn ngữ tiếng Việt và giao diện cực kỳ trực quan, dễ dàng sử dụng cho mọi thành viên trong gia đình."
    },
    {
      question: "Robot có hút được bụi trên thảm dày không?",
      answer: "Với lực hút 5000Pa, robot dễ dàng làm sạch bụi mịn sâu bên trong thảm. Cảm biến thông minh sẽ tự động tăng lực hút tối đa khi robot di chuyển lên bề mặt thảm."
    },
    {
      question: "Làm sao để kết nối robot với Wi-Fi?",
      answer: "Bạn chỉ cần tải app, quét mã QR dưới nắp robot và làm theo 3 bước hướng dẫn đơn giản trên màn hình điện thoại để kết nối với mạng Wi-Fi 2.4GHz của gia đình."
    }
  ]
};
