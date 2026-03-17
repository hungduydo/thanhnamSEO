export type ArticleSection =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }

export type Article = {
  slug: string
  title: string
  description: string
  category: string
  categoryColor: "sky" | "amber" | "emerald"
  readTime: string
  date: string
  excerpt: string
  content: ArticleSection[]
}

export const ARTICLES: Article[] = [
  {
    slug: "gara-o-to-xuan-loc-chat-luong",
    title: "Top 13+ Gara Ô Tô Xuân Lộc Đồng Nai Uy Tín & Chất Lượng Nhất 2026",
    description:
      "Danh sách 13+ gara ô tô Xuân Lộc Đồng Nai uy tín nhất. Thông tin chi tiết địa chỉ, số điện thoại và dịch vụ của các garage sửa chữa ô tô hàng đầu tại Gia Ray, Xuân Lộc.",
    category: "Tiện ích",
    categoryColor: "sky",
    readTime: "10 phút",
    date: "2026-03-17",
    excerpt:
      "Tìm kiếm gara ô tô Xuân Lộc uy tín không hề đơn giản. Bài viết này tổng hợp danh sách các địa chỉ sửa chữa xe tin cậy nhất tại khu vực Gia Ray và lân cận để bạn lựa chọn.",
    content: [
      {
        type: "p",
        text: "Xuân Lộc là cửa ngõ giao thông quan trọng tại Đồng Nai, nơi tập trung lượng lớn xe cá nhân và xe vận tải. Việc tìm kiếm một địa chỉ sửa chữa xe tin cậy là ưu tiên hàng đầu của các bác tài. Dưới đây là danh sách tổng hợp các gara ô tô Xuân Lộc được khách hàng đánh giá cao nhất hiện nay.",
      },
      {
        type: "image",
        src: "/images/sua-chua.png",
        alt: "Gara ô tô Xuân Lộc Đồng Nai uy tín",
        caption: "Thành Nam Oto - Địa chỉ sửa chữa ô tô tin cậy tại Gia Ray, Xuân Lộc",
      },
      { type: "h2", text: "1. Thành Nam Oto — Chuyên nghiệp & Minh bạch" },
      {
        type: "p",
        text: "Dù mới nhưng Thành Nam Oto đã nhanh chóng khẳng định vị thế nhờ vào quy trình làm việc hiện đại, minh bạch về giá cả và cam kết bảo hành bằng văn bản. Chúng tôi tập trung vào trải nghiệm khách hàng với các tiêu chuẩn khắt khe nhất.",
      },
      {
        type: "ul",
        items: [
          "Địa chỉ: Trần Nhân Tông, Khu Phố 8, TT. Gia Ray, Xuân Lộc, Đồng Nai.",
          "Điện thoại: 0388 476 247",
          "Dịch vụ nổi bật: Sơn xe phòng kín, Sửa chữa máy gầm, Bảo dưỡng định kỳ, Chẩn đoán lỗi bằng máy chuyên dụng.",
        ],
      },
      { type: "h2", text: "2. Ngọc Thạch Auto" },
      {
        type: "p",
        text: "Một trong những gara lâu đời tại Gia Ray với đội ngũ thợ có tay nghề vững.",
      },
      {
        type: "ul",
        items: [
          "Địa chỉ: QL1A, TT. Gia Ray, Xuân Lộc, Đồng Nai.",
          "Dịch vụ: Chỉnh thẳng bánh xe, Lắp đặt máy lạnh, Chăm sóc nội thất.",
        ],
      },
      { type: "h2", text: "3. Hùng Vương Auto" },
      {
        type: "p",
        text: "Trung tâm chăm sóc xe chuyên nghiệp nằm sâu trong thị trấn, thuận tiện cho cư dân khu vực trung tâm.",
      },
      {
        type: "ul",
        items: [
          "Địa chỉ: 132/8 Hùng Vương, TT. Gia Ray, Xuân Lộc, Đồng Nai.",
          "Dịch vụ: Sửa chữa và bảo trì chung, Sửa động cơ, Hệ thống lái.",
        ],
      },
      { type: "h2", text: "4. Garage Viễn Đông Auto" },
      {
        type: "p",
        text: "Nổi tiếng với dịch vụ đa dạng và tư vấn nhiệt tình, đúng hẹn.",
      },
      {
        type: "ul",
        items: [
          "Địa chỉ: 1 QL1A, TT. Gia Ray, Xuân Lộc, Đồng Nai.",
          "Dịch vụ: Đánh bóng xe, Tinh chỉnh động cơ, Ống xả.",
        ],
      },
      { type: "h2", text: "Các Garage uy tín khác tại các xã lân cận" },
      {
        type: "p",
        text: "Ngoài khu vực trung tâm Gia Ray, bạn cũng có thể tham khảo các địa chỉ sau:",
      },
      {
        type: "ul",
        items: [
          "Gara Năm Nhân: 1259 QL1A, Xuân Hưng (Chuyên lốp, phanh, điện ô tô).",
          "Garage Quang Khánh: ĐT765, Suối Cát (Chuyên điện lạnh, hộp số tự động).",
          "Garage Lê Hành: QL1A, Bảo Hoà (Tinh chỉnh động cơ, thiết bị điện).",
          "Garage Hai Tèo: 3018 QL1A, ấp Việt Kiều (Uy tín, chất lượng lâu năm).",
          "Triệu Thành Auto: 33 Suối Rết B, Xuân Định (Chăm sóc xe, độ đèn).",
          "Garage Tú: 515 Hồ Thị Hương (Thay dầu, bảo dưỡng, lốp xe).",
          "Garage Binh Sơn: Xuân Hiệp (Nhiệt tình, tâm huyết với nghề).",
        ],
      },
      { type: "h2", text: "Lời khuyên khi chọn Gara tại Xuân Lộc" },
      {
        type: "p",
        text: "Để tránh những phiền toái không đáng có khi đi sửa xe, các bác tài nên lưu ý:",
      },
      {
        type: "ul",
        items: [
          "Luôn yêu cầu báo giá bằng văn bản hoặc qua Zalo trước khi đồng ý tháo máy.",
          "Kiểm tra phụ tùng thay thế xem có đúng chủng loại và xuất xứ không.",
          "Ưu tiên các gara có máy đọc lỗi (scanners) để chẩn đoán chính xác, tránh sửa mò.",
          "Quan sát thái độ phục vụ và sự sạch sẽ của xưởng sửa chữa.",
        ],
      },
      {
        type: "note",
        text: "Nếu bạn vẫn đang băn khoăn, hãy ghé Thành Nam Oto tại Trần Nhân Tông, Khu Phố 8, Gia Ray. Chúng tôi hỗ trợ kiểm tra xe và đọc lỗi miễn phí cho tất cả khách hàng mới. Hotline: 0388 476 247.",
      },
    ],
  },
  {
    slug: "bao-duong-xe-bao-lau-mot-lan",
    title: "Bảo dưỡng xe bao lâu một lần? Lịch chuẩn theo km & thời gian",
    description:
      "Hướng dẫn lịch bảo dưỡng xe ô tô chuẩn theo km và thời gian. Biết khi nào cần thay nhớt, kiểm tra phanh, và các hạng mục quan trọng để xe luôn an toàn.",
    category: "Bảo dưỡng",
    categoryColor: "sky",
    readTime: "5 phút",
    date: "2026-03-01",
    excerpt:
      "Nhiều chủ xe không biết chính xác khi nào cần bảo dưỡng. Bài viết này tóm gọn lịch chuẩn theo km và thời gian để xe luôn vận hành tốt.",
    content: [
      {
        type: "p",
        text: "Một trong những câu hỏi phổ biến nhất mà khách hàng hỏi chúng tôi tại Thành Nam Oto là: \"Bao lâu thì cần đưa xe đi bảo dưỡng một lần?\" Câu trả lời phụ thuộc vào nhiều yếu tố, nhưng dưới đây là lịch chuẩn mà hầu hết nhà sản xuất và kỹ thuật viên kinh nghiệm đều khuyến nghị.",
      },
      { type: "h2", text: "Chu kỳ bảo dưỡng theo số km" },
      {
        type: "p",
        text: "Đây là cách tính phổ biến và chính xác nhất. Hầu hết xe hiện đại áp dụng mốc bảo dưỡng theo cây số:",
      },
      {
        type: "ul",
        items: [
          "5.000 km: Thay nhớt máy (xe dùng dầu khoáng hoặc semi-synthetic), kiểm tra lọc gió, lốp xe.",
          "10.000 km: Thay nhớt (xe dùng nhớt tổng hợp full synthetic), kiểm tra phanh, bugi, dây đai.",
          "20.000 km: Thay lọc gió điều hòa, kiểm tra hệ thống làm mát, nước rửa kính.",
          "40.000–50.000 km: Kiểm tra dây cam, bơm nước, kiểm tra toàn bộ gầm xe.",
          "80.000–100.000 km: Thay dây cam (một số động cơ), đại tu hệ thống phanh, kiểm tra hộp số.",
        ],
      },
      { type: "h2", text: "Bảo dưỡng theo thời gian" },
      {
        type: "p",
        text: "Nếu xe không chạy nhiều, thời gian cũng là yếu tố quan trọng không kém. Nhớt máy bị oxy hóa và giảm tác dụng theo thời gian, dù xe ít lăn bánh:",
      },
      {
        type: "ul",
        items: [
          "Tối thiểu mỗi 6 tháng: Kiểm tra nhớt, nước bình, áp suất lốp.",
          "Hàng năm: Thay nhớt (dù chưa đủ km), kiểm tra hệ thống điện, acquy.",
          "Mỗi 2 năm: Kiểm tra dầu phanh, dầu trợ lực, chất lỏng làm mát.",
        ],
      },
      { type: "h2", text: "Xe thành phố và xe đường dài — khác nhau như thế nào?" },
      {
        type: "p",
        text: "Xe đi nhiều trong thành phố (kẹt xe, tăng giảm tốc liên tục) thực ra mài mòn động cơ nhiều hơn xe đường dài. Điều kiện đường phố khiến nhiệt độ động cơ dao động liên tục và nhớt nhanh xuống cấp hơn. Với xe chủ yếu đi trong đô thị, nên rút ngắn chu kỳ thay nhớt khoảng 20–30% so với khuyến nghị.",
      },
      { type: "h2", text: "Lời khuyên từ Thành Nam Oto" },
      {
        type: "p",
        text: "Đừng chờ xe có vấn đề mới đưa vào gara. Bảo dưỡng định kỳ giúp phát hiện sớm các hư hỏng nhỏ trước khi chúng trở thành vấn đề tốn kém. Một buổi kiểm tra 30 phút có thể giúp bạn tránh được chi phí sửa chữa lớn về sau.",
      },
      {
        type: "note",
        text: "Tại Thành Nam Oto (Xuân Lộc, Đồng Nai), chúng tôi nhắc lịch bảo dưỡng tự động qua Zalo sau mỗi lần bạn đưa xe vào. Gọi 0388 476 247 để đặt lịch kiểm tra miễn phí.",
      },
    ],
  },
  {
    slug: "5-dau-hieu-xe-can-bao-duong-gap",
    title: "5 dấu hiệu cho thấy xe ô tô cần bảo dưỡng gấp",
    description:
      "Xe rung, đèn cảnh báo bật, hao xăng bất thường — đây là 5 dấu hiệu rõ ràng nhất cho thấy xe đang cần bảo dưỡng hoặc sửa chữa ngay.",
    category: "Kinh nghiệm",
    categoryColor: "amber",
    readTime: "4 phút",
    date: "2026-02-20",
    excerpt:
      "Xe rung kỳ lạ? Đèn check engine bật? Đừng bỏ qua. Đây là 5 tín hiệu phổ biến nhất cảnh báo xe đang cần được chăm sóc ngay.",
    content: [
      {
        type: "p",
        text: "Xe ô tô luôn phát ra tín hiệu khi có vấn đề — vấn đề là chúng ta có chú ý không. Dưới đây là 5 dấu hiệu phổ biến nhất mà chủ xe thường bỏ qua, dẫn đến hỏng hóc nặng hơn và chi phí sửa chữa tốn kém hơn.",
      },
      { type: "h2", text: "1. Đèn cảnh báo trên đồng hồ bật sáng" },
      {
        type: "p",
        text: "Check engine, đèn nhớt, đèn ắc quy, đèn nhiệt độ — bất kỳ đèn nào sáng lên đều là thông báo từ xe rằng có điều gì đó cần kiểm tra. Đặc biệt, đèn check engine có thể liên quan đến hàng chục mã lỗi khác nhau, từ cảm biến oxy đến hệ thống phun nhiên liệu. Cần kết nối máy đọc lỗi để xác định chính xác.",
      },
      { type: "h2", text: "2. Tiếng kêu hoặc rung lạ" },
      {
        type: "p",
        text: "Tiếng kêu \"cục cục\" khi qua ổ gà có thể là gioăng cao su mòn. Tiếng rít khi phanh là má phanh cần thay. Tiếng rú từ cabin khi tăng tốc có thể là vấn đề hộp số hoặc trục các-đăng. Đừng bao giờ coi thường tiếng kêu lạ — chúng thường là dấu hiệu sớm của các hư hỏng nghiêm trọng.",
      },
      { type: "h2", text: "3. Xe hao xăng đột ngột tăng mạnh" },
      {
        type: "p",
        text: "Nếu bạn để ý xăng cạn nhanh hơn bình thường dù cách lái không đổi, đây là dấu hiệu đáng lo. Nguyên nhân phổ biến: lọc gió bẩn, bugi mòn, cảm biến oxy lỗi, hoặc vấn đề với hệ thống phun xăng điện tử. Hao nhiên liệu tăng 15–20% so với bình thường là con số cần chú ý.",
      },
      { type: "h2", text: "4. Phanh ăn không đều hoặc cảm giác mềm bất thường" },
      {
        type: "p",
        text: "Phanh cần đạp sâu hơn bình thường, hoặc xe bị lệch sang một bên khi phanh gấp — đây là dấu hiệu nguy hiểm nhất trong danh sách này. Có thể do má phanh mòn không đều, dầu phanh thiếu, hoặc xi lanh phanh bị rò rỉ. Hệ thống phanh ảnh hưởng trực tiếp đến an toàn — cần kiểm tra ngay lập tức.",
      },
      { type: "h2", text: "5. Nhớt máy đen đặc hoặc có cặn" },
      {
        type: "p",
        text: "Kiểm tra nhớt định kỳ bằng que thăm dầu. Nhớt mới có màu vàng nâu trong suốt. Nhớt đen đặc, đục như bùn, hoặc có bọt trắng (dấu hiệu lẫn nước) đều cho thấy xe đang có vấn đề cần xử lý ngay — không chỉ là thay nhớt đơn thuần.",
      },
      {
        type: "note",
        text: "Gặp bất kỳ dấu hiệu nào trên đây? Đừng chờ thêm. Gọi Thành Nam Oto: 0388 476 247. Chúng tôi kết nối máy đọc lỗi và kiểm tra toàn bộ miễn phí — báo giá rõ ràng trước khi sửa bất kỳ hạng mục nào.",
      },
    ],
  },
  {
    slug: "khi-nao-can-thay-nhot-hop-so",
    title: "Khi nào cần thay nhớt hộp số? Dấu hiệu và chu kỳ chuẩn",
    description:
      "Nhớt hộp số ít được chú ý hơn nhớt máy nhưng quan trọng không kém. Biết khi nào cần thay để tránh hỏng hộp số — chi phí sửa chữa lên đến hàng chục triệu.",
    category: "Bảo dưỡng",
    categoryColor: "sky",
    readTime: "5 phút",
    date: "2026-02-10",
    excerpt:
      "Hộp số hỏng là một trong những sửa chữa tốn kém nhất. Biết khi nào cần thay nhớt hộp số có thể giúp bạn tránh chi phí lên đến 20–50 triệu đồng.",
    content: [
      {
        type: "p",
        text: "Nhiều chủ xe chăm thay nhớt máy đều đặn nhưng lại hoàn toàn quên mất nhớt hộp số. Đây là sai lầm phổ biến, vì hộp số hỏng thuộc nhóm sửa chữa đắt nhất trên xe ô tô — chi phí có thể từ 15 đến 50 triệu đồng tùy xe và mức độ hư hỏng.",
      },
      { type: "h2", text: "Hộp số sàn và số tự động — khác nhau như thế nào?" },
      {
        type: "p",
        text: "Hộp số sàn (MT) và hộp số tự động (AT) dùng hai loại nhớt khác nhau với chu kỳ thay khác nhau. Không được thay lẫn — đây là lỗi nghiêm trọng có thể gây hỏng hộp số ngay lập tức.",
      },
      {
        type: "ul",
        items: [
          "Hộp số sàn: Thay nhớt mỗi 40.000–60.000 km hoặc khi nhớt bị đen đặc.",
          "Hộp số tự động: Thay dầu ATF mỗi 40.000–60.000 km. Một số xe hiện đại claim \"lifetime fluid\" — nhưng thực tế vẫn nên thay sau 80.000–100.000 km.",
          "Hộp số CVT (vô cấp): Thay dầu CVT mỗi 40.000–50.000 km. CVT nhạy cảm hơn với chất lượng dầu.",
        ],
      },
      { type: "h2", text: "Dấu hiệu nhớt hộp số cần thay" },
      {
        type: "ul",
        items: [
          "Hộp số vào số giật, không mượt — đặc biệt khi trời lạnh.",
          "Tiếng ồn khi ở số N hoặc P (hộp số AT).",
          "Xe trượt số hoặc delay khi tăng tốc (AT/CVT).",
          "Dầu hộp số có màu đen hoặc mùi khét.",
          "Rò rỉ dầu quanh khu vực hộp số (vệt dầu trên sàn gara).",
        ],
      },
      { type: "h2", text: "Quy trình thay đúng chuẩn" },
      {
        type: "p",
        text: "Khác với thay nhớt máy đơn giản, thay dầu hộp số AT thường cần máy trao đổi dầu (flush machine) để thay toàn bộ dầu trong hệ thống, không chỉ phần xả ra được. Thay \"xả và đổ\" thông thường chỉ thay được khoảng 40–50% lượng dầu. Đây là lý do cần đưa xe vào gara có thiết bị đúng.",
      },
      { type: "h2", text: "Tại sao không nên bỏ qua?" },
      {
        type: "p",
        text: "Hộp số hoạt động trong điều kiện nhiệt độ và áp suất cao. Nhớt bị suy giảm không còn bảo vệ các bánh răng và vòng bi bên trong — dẫn đến mài mòn, trượt, và cuối cùng là hỏng hộp số hoàn toàn. Chi phí thay nhớt hộp số định kỳ chỉ vài trăm nghìn đến vài triệu, trong khi đại tu hộp số có thể gấp 10–20 lần.",
      },
      {
        type: "note",
        text: "Thành Nam Oto thực hiện thay dầu hộp số cho xe số tự động, số sàn, và CVT. Kiểm tra và báo giá miễn phí. Gọi 0388 476 247 hoặc ghé trực tiếp tại Trần Nhân Tông, Khu Phố 8, Xuân Lộc, Đồng Nai.",
      },
    ],
  },
  {
    slug: "dau-hieu-thuoc-lai-bi-hong",
    title: "Dấu hiệu thước lái bị hỏng và cách xử lý kịp thời",
    description:
      "Vô lăng nặng, xe bị lệch hướng, hoặc tiếng ồn khi đánh lái — đây có thể là dấu hiệu thước lái đang có vấn đề. Biết cách nhận biết sớm để tránh nguy hiểm.",
    category: "Sửa chữa",
    categoryColor: "emerald",
    readTime: "4 phút",
    date: "2026-01-25",
    excerpt:
      "Vô lăng nặng tay hoặc xe không đi thẳng? Đây có thể là hệ thống lái đang có vấn đề — ảnh hưởng trực tiếp đến an toàn lái xe.",
    content: [
      {
        type: "p",
        text: "Hệ thống lái là bộ phận quan trọng nhất ảnh hưởng đến khả năng kiểm soát xe. Khi thước lái hoặc hệ thống trợ lực gặp vấn đề, khả năng điều khiển xe bị suy giảm đáng kể — đây là vấn đề an toàn cần xử lý ngay, không nên để chờ.",
      },
      { type: "h2", text: "Các dấu hiệu thường gặp" },
      {
        type: "ul",
        items: [
          "Vô lăng nặng tay bất thường — đặc biệt khi vào cua hay đánh lái ở tốc độ chậm.",
          "Xe không đi thẳng, cứ bị kéo về một bên khi chạy trên đường bằng phẳng.",
          "Tiếng ồn \"gõ\" hoặc \"cọ\" khi xoay vô lăng — nhất là ở vị trí khóa.",
          "Vô lăng rung khi chạy tốc độ cao.",
          "Dầu trợ lực bị rò rỉ (vệt dầu dưới xe, gần khu vực vô lăng).",
          "Vị trí trung tâm vô lăng bị lệch khi xe đi thẳng.",
        ],
      },
      { type: "h2", text: "Nguyên nhân phổ biến" },
      {
        type: "ul",
        items: [
          "Dầu trợ lực thiếu hoặc bị rò rỉ (xe dùng trợ lực thủy lực).",
          "Bơm trợ lực lái yếu hoặc hỏng.",
          "Thước lái mòn hoặc bị tổn thương do va chạm.",
          "Motor trợ lực điện (EPS) lỗi — phổ biến trên xe đời mới.",
          "Gioăng cao su lái khô nứt, để nước và bụi vào bên trong.",
        ],
      },
      { type: "h2", text: "Phân biệt trợ lực thủy lực và điện (EPS)" },
      {
        type: "p",
        text: "Xe đời cũ (trước 2015) thường dùng trợ lực thủy lực (có bình dầu trợ lực). Xe đời mới hầu hết dùng trợ lực điện (EPS) — không có bình dầu. Cách kiểm tra và sửa chữa khác nhau hoàn toàn. Đừng tự thêm dầu trợ lực vào xe dùng EPS — không có tác dụng và có thể gây nhầm lẫn khi chẩn đoán lỗi.",
      },
      { type: "h2", text: "Khi nào cần đi gara ngay?" },
      {
        type: "p",
        text: "Nếu vô lăng đột ngột trở nên rất nặng hoặc mất khả năng kiểm soát hướng đi — dừng xe ngay lập tức và gọi cứu hộ. Đây là tình huống nguy hiểm, không nên cố lái tiếp. Với các triệu chứng nhẹ hơn (vô lăng hơi nặng, tiếng kêu nhẹ), vẫn nên đưa xe vào kiểm tra trong tuần, không để quá 2–3 tuần.",
      },
      {
        type: "note",
        text: "Thành Nam Oto có máy đọc lỗi EPS và thiết bị kiểm tra hệ thống lái. Chẩn đoán miễn phí — báo giá trước khi sửa. Gọi 0388 476 247.",
      },
    ],
  },
  {
    slug: "kinh-nghiem-chon-mau-son-xe",
    title: "Kinh nghiệm chọn màu sơn xe: đẹp, hợp mệnh và bền màu lâu",
    description:
      "Chọn màu sơn xe không chỉ theo sở thích — còn ảnh hưởng đến giá bán lại và chi phí bảo trì. Hướng dẫn từ thợ sơn nhiều năm kinh nghiệm tại Xuân Lộc.",
    category: "Sơn xe",
    categoryColor: "amber",
    readTime: "6 phút",
    date: "2026-01-15",
    excerpt:
      "Sơn đổi màu xe là quyết định quan trọng. Màu nào dễ bảo trì? Màu nào khó pha? Màu nào giữ giá trị xe tốt nhất? Thợ sơn Thành Nam chia sẻ từ kinh nghiệm thực tế.",
    content: [
      {
        type: "p",
        text: "Sau nhiều năm làm nghề sơn xe tại Xuân Lộc, câu hỏi phổ biến nhất chúng tôi nhận được là: \"Nên chọn màu gì cho xe?\" Câu trả lời không chỉ đơn giản là \"màu nào đẹp\" — còn phụ thuộc vào cách bạn dùng xe, mức độ chăm sóc, và kế hoạch bán lại trong tương lai.",
      },
      { type: "h2", text: "Màu nào dễ bảo trì nhất?" },
      {
        type: "p",
        text: "Màu trắng, bạc, và xám là top 3 màu dễ chăm sóc nhất. Những màu này ít thể hiện bụi bẩn, ít bị phai màu do ánh nắng, và đặc biệt quan trọng — dễ sơn dặm khi có trầy xước nhẹ mà không lộ vết vá.",
      },
      {
        type: "ul",
        items: [
          "Trắng: Dễ dặm, ít thể hiện bụi nhỏ, nhưng dễ bẩn with bùn đất.",
          "Bạc/Xám: Rất dễ sơn dặm, che được nhiều loại vết trầy nhỏ.",
          "Đen: Sang trọng nhưng thể hiện rõ mọi vết xước, bụi, vân tay. Khó dặm chính xác.",
          "Đỏ/Cam/Vàng: Dễ bị phai màu sau 3–5 năm ngoài nắng. Khó pha màu dặm.",
        ],
      },
      { type: "h2", text: "Màu sơn và giá trị bán lại" },
      {
        type: "p",
        text: "Theo kinh nghiệm thị trường xe cũ tại Việt Nam, xe màu trắng và màu bạc thường bán lại dễ hơn và giữ giá tốt hơn. Xe màu độc lạ (xanh lá, tím, cam neon) có thể đẹp nhưng thu hẹp đáng kể số người mua tiềm năng khi bạn muốn sang tay.",
      },
      { type: "h2", text: "Sơn đổi màu — những điều cần biết trước" },
      {
        type: "ul",
        items: [
          "Đổi màu hoàn toàn cần sơn cả phần bên trong cánh cửa, nẹp, và các góc khuất — nếu chỉ sơn ngoài, sẽ lộ màu cũ khi mở cửa.",
          "Giấy tờ xe: Cần đăng ký lại màu xe tại phòng CSGT nếu đổi sang màu khác hẳn.",
          "Màu đặc biệt (metallic, pearl, matte) khó dặm hơn — cần thợ có kinh nghiệm with màu đó.",
          "Thời gian sơn đổi màu toàn bộ thường 5–10 ngày làm việc, không phải 1–2 ngày.",
        ],
      },
      { type: "h2", text: "Mẹo chọn màu hợp mệnh theo quan niệm dân gian" },
      {
        type: "p",
        text: "Nhiều người Việt vẫn chọn màu xe theo ngũ hành. Tham khảo phổ biến: Mệnh Thổ hợp vàng/nâu. Mệnh Kim hợp trắng/bạc. Mệnh Thủy hợp đen/xanh đen. Mệnh Mộc hợp xanh lá. Mệnh Hỏa hợp đỏ/cam. Tuy nhiên, hãy đặt tính thực dụng (dễ chăm sóc, giữ giá trị) lên đầu — màu sắc là thứ yếu.",
      },
      { type: "h2", text: "Tư vấn trước khi quyết định" },
      {
        type: "p",
        text: "Tại Thành Nam Oto, chúng tôi luôn khuyến khích khách hàng xem thực tế màu sơn trên xe hoặc bảng màu trước khi quyết định — màu trên điện thoại và màu thực tế ngoài nắng có thể rất khác nhau. Chúng tôi cũng cung cấp tư vấn miễn phí về màu nào phù hợp with dòng xe và nhu cầu sử dụng.",
      },
      {
        type: "note",
        text: "Muốn sơn đổi màu hoặc sơn dặm xe tại Xuân Lộc? Mang xe đến hoặc gửi ảnh qua Zalo để được tư vấn và báo giá miễn phí. Thành Nam Oto: 0388 476 247.",
      },
    ],
  },
]

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}

export function getArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug)
}
