let currentCard = 0;

// Mảng từ vựng
const flashcards = [
    /* ===== Kanji bài 1 (10 từ) ===== */
    { question: "学生", answer: "Học sinh / sinh viên – がくせい", example: "私は日本語学校の学生です。 (Tôi là học viên trường tiếng Nhật.)" },
    { question: "学校", answer: "Trường học – がっこう", example: "日本語学校で勉強します。 (Tôi học ở trường tiếng Nhật.)" },
    { question: "仕事", answer: "Công việc – しごと", example: "仕事がたくさんあります。 (Tôi có nhiều việc.)" },
    { question: "生活", answer: "Cuộc sống / sinh hoạt – せいかつ", example: "日本での生活に慣れました。 (Tôi đã quen cuộc sống ở Nhật.)" },
    { question: "元気", answer: "Khỏe / tinh thần tốt – げんき", example: "おかげさまで元気です。 (Nhờ bạn, tôi vẫn khỏe.)" },
    { question: "忙しい", answer: "Bận – いそがしい", example: "最近、とても忙しいです。 (Dạo này tôi rất bận.)" },
    { question: "去年", answer: "Năm ngoái – きょねん", example: "去年、日本へ行きました。 (Năm ngoái tôi đi Nhật.)" },
    { question: "先週", answer: "Tuần trước – せんしゅう", example: "先週、テストがありました。 (Tuần trước có bài kiểm tra.)" },
    { question: "作る", answer: "Làm / nấu – つくる", example: "母は毎日料理を作ります。 (Mẹ tôi nấu ăn mỗi ngày.)" },
    { question: "働く", answer: "Làm việc – はたらく", example: "日本で働きたいです。 (Tôi muốn làm việc ở Nhật.)" },

    /* ===== Kanji bài 2 (10 từ) ===== */
    { question: "人", answer: "Người – ひと", example: "あの人はとても親切です。 (Người kia rất tốt.)" },
    { question: "～人", answer: "Số người – にん / Quốc tịch – じん", example: "家族は4人です／韓国人です。 (Gia đình 4 người / Người Hàn.)" },
    { question: "英語", answer: "Tiếng Anh – えいご", example: "英語を話します。 (Tôi nói tiếng Anh.)" },
    { question: "音楽", answer: "Âm nhạc – おんがく", example: "音楽を聞くのが好きです。 (Tôi thích nghe nhạc.)" },
    { question: "習う", answer: "Học (được dạy) – ならう", example: "先生に日本語を習います。 (Tôi học tiếng Nhật.)" },
    { question: "話す", answer: "Nói – はなす", example: "友だちと話します。 (Tôi nói chuyện với bạn.)" },
    { question: "出かける", answer: "Ra ngoài – でかける", example: "週末に出かけます。 (Cuối tuần ra ngoài.)" },
    { question: "家族", answer: "Gia đình – かぞく", example: "家族は4人です。 (Gia đình 4 người.)" },
    { question: "犬", answer: "Chó – いぬ", example: "犬を飼っています。 (Tôi nuôi chó.)" },
    { question: "夕方", answer: "Chiều tối – ゆうがた", example: "夕方に散歩します。 (Chiều tối đi dạo.)" },

    /* ===== Kanji bài 3 (9 từ) ===== */
    { question: "季節", answer: "Mùa – きせつ", example: "日本には四つの季節があります。 (Nhật có 4 mùa.)" },
    { question: "春", answer: "Mùa xuân – はる", example: "春は花がきれいです。 (Xuân hoa đẹp.)" },
    { question: "夏", answer: "Mùa hè – なつ", example: "夏は暑いです。 (Hè nóng.)" },
    { question: "秋", answer: "Mùa thu – あき", example: "秋は涼しいです。 (Thu mát.)" },
    { question: "冬", answer: "Mùa đông – ふゆ", example: "冬は寒いです。 (Đông lạnh.)" },
    { question: "花", answer: "Hoa – はな", example: "花が咲いています。 (Hoa nở.)" },
    { question: "同じ", answer: "Giống nhau – おなじ", example: "同じクラスです。 (Cùng lớp.)" },
    { question: "寒い", answer: "Lạnh – さむい", example: "今日は寒いです。 (Hôm nay lạnh.)" },
    { question: "暑い", answer: "Nóng – あつい", example: "今日は暑いです。 (Hôm nay nóng.)" },

    /* ===== Kanji bài 4 (12 từ) ===== */
    { question: "四季", answer: "Bốn mùa – しき", example: "日本の四季はきれいです。 (Bốn mùa đẹp.)" },
    { question: "天気", answer: "Thời tiết – てんき", example: "天気がいいです。 (Thời tiết đẹp.)" },
    { question: "雨", answer: "Mưa – あめ", example: "雨が降っています。 (Trời mưa.)" },
    { question: "晴れ", answer: "Nắng – はれ", example: "今日は晴れです。 (Hôm nay nắng.)" },
    { question: "風", answer: "Gió – かぜ", example: "風が強いです。 (Gió mạnh.)" },
    { question: "雪", answer: "Tuyết – ゆき", example: "雪が降りました。 (Tuyết rơi.)" },
    { question: "今", answer: "Bây giờ – いま", example: "今、忙しいです。 (Bây giờ bận.)" },
    { question: "今日", answer: "Hôm nay – きょう", example: "今日は休みです。 (Hôm nay nghỉ.)" },
    { question: "毎日", answer: "Mỗi ngày – まいにち", example: "毎日勉強します。 (Ngày nào cũng học.)" },
    { question: "昨日", answer: "Hôm qua – きのう", example: "昨日は雨でした。 (Hôm qua mưa.)" },
    { question: "強い", answer: "Mạnh – つよい", example: "風が強いです。 (Gió mạnh.)" },
    { question: "曇り", answer: "Nhiều mây – くもり", example: "今日は曇りです。 (Hôm nay nhiều mây.)" },

    /* ===== Kanji bài 5 (10 từ) ===== */
    { question: "町", answer: "Thị trấn – まち", example: "この町は静かです。 (Thị trấn yên tĩnh.)" },
    { question: "店", answer: "Cửa hàng – みせ", example: "店に入ります。 (Vào cửa hàng.)" },
    { question: "静か", answer: "Yên tĩnh – しずか", example: "ここは静かです。 (Ở đây yên tĩnh.)" },
    { question: "有名", answer: "Nổi tiếng – ゆうめい", example: "有名な町です。 (Thị trấn nổi tiếng.)" },
    { question: "多い", answer: "Nhiều – おおい", example: "人が多いです。 (Đông người.)" },
    { question: "少ない", answer: "Ít – すくない", example: "人が少ないです。 (Ít người.)" },
    { question: "遠い", answer: "Xa – とおい", example: "駅は遠いです。 (Ga xa.)" },
    { question: "便利", answer: "Tiện lợi – べんり", example: "ここは便利です。 (Ở đây tiện.)" },
    { question: "不便", answer: "Bất tiện – ふべん", example: "不便な場所です。 (Nơi bất tiện.)" },
    { question: "食堂", answer: "Quán ăn – しょくどう", example: "食堂で食べます。 (Ăn ở quán.)" },

    /* ===== Kanji bài 6 (10 từ) ===== */
    { question: "道", answer: "Con đường – みち", example: "この道です。 (Đường này.)" },
    { question: "右", answer: "Phải – みぎ", example: "右に曲がります。 (Rẽ phải.)" },
    { question: "左", answer: "Trái – ひだり", example: "左にあります。 (Ở bên trái.)" },
    { question: "近く", answer: "Gần – ちかく", example: "駅の近くです。 (Gần ga.)" },
    { question: "車", answer: "Ô tô – くるま", example: "車で行きます。 (Đi ô tô.)" },
    { question: "送る", answer: "Đưa / gửi – おくる", example: "友だちを送ります。 (Đưa bạn.)" },
    { question: "お寺", answer: "Chùa – おてら", example: "古いお寺です。 (Chùa cổ.)" },
    { question: "公園", answer: "Công viên – こうえん", example: "公園で遊びます。 (Chơi ở công viên.)" },
    { question: "銀行", answer: "Ngân hàng – ぎんこう", example: "銀行へ行きます。 (Đi ngân hàng.)" },
    { question: "神社", answer: "Đền – じんじゃ", example: "神社で祈ります。 (Cầu nguyện.)" },

    /* ===== Kanji bài 7 (10 từ) ===== */
    { question: "時間", answer: "Thời gian – じかん", example: "時間がありません。 (Không có thời gian.)" },
    { question: "場所", answer: "Địa điểm – ばしょ", example: "場所を決めます。 (Quyết định địa điểm.)" },
    { question: "駅", answer: "Nhà ga – えき", example: "駅で待ちます。 (Đợi ở ga.)" },
    { question: "電車", answer: "Tàu điện – でんしゃ", example: "電車に乗ります。 (Đi tàu.)" },
    { question: "待つ", answer: "Đợi – まつ", example: "少し待ってください。 (Đợi chút.)" },
    { question: "止まる", answer: "Dừng – とまる", example: "電車が止まります。 (Tàu dừng.)" },
    { question: "着く", answer: "Đến nơi – つく", example: "駅に着きます。 (Đến ga.)" },
    { question: "急ぐ", answer: "Vội – いそぐ", example: "急ぎます。 (Vội.)" },
    { question: "門", answer: "Cổng – もん", example: "門の前です。 (Trước cổng.)" },
    { question: "受付", answer: "Lễ tân – うけつけ", example: "受付で聞きます。 (Hỏi lễ tân.)" },

    /* ===== Kanji bài 8 (9 từ) ===== */
    { question: "お金", answer: "Tiền – おかね", example: "お金を払います。 (Trả tiền.)" },
    { question: "試合", answer: "Trận đấu – しあい", example: "試合を見ます。 (Xem trận.)" },
    { question: "楽しい", answer: "Vui – たのしい", example: "とても楽しいです。 (Rất vui.)" },
    { question: "難しい", answer: "Khó – むずかしい", example: "難しい問題です。 (Câu khó.)" },
    { question: "登る", answer: "Leo – のぼる", example: "山に登ります。 (Leo núi.)" },
    { question: "食事", answer: "Bữa ăn – しょくじ", example: "食事します。 (Ăn cơm.)" },
    { question: "博物館", answer: "Bảo tàng – はくぶつかん", example: "博物館へ行きます。 (Đi bảo tàng.)" },
    { question: "動物園", answer: "Sở thú – どうぶつえん", example: "動物園に行きます。 (Đi sở thú.)" },
    { question: "～店", answer: "Cửa hàng ~ – ～てん", example: "ラーメン店です。 (Tiệm ramen.)" },

    /* ===== Kanji bài 9 (10 từ) ===== */
    { question: "高校", answer: "Cấp 3 – こうこう", example: "高校に通っています。 (Học cấp 3.)" },
    { question: "言う", answer: "Nói – いう", example: "大切なことを言います。 (Nói điều quan trọng.)" },
    { question: "書く", answer: "Viết – かく", example: "漢字を書きます。 (Viết kanji.)" },
    { question: "貸す", answer: "Cho mượn – かす", example: "本を貸します。 (Cho mượn sách.)" },
    { question: "教える", answer: "Dạy – おしえる", example: "日本語を教えます。 (Dạy tiếng Nhật.)" },
    { question: "大学", answer: "Đại học – だいがく", example: "大学で勉強します。 (Học đại học.)" },
    { question: "漢字", answer: "Chữ Hán – かんじ", example: "漢字を練習します。 (Luyện kanji.)" },
    { question: "練習", answer: "Luyện tập – れんしゅう", example: "毎日練習します。 (Luyện mỗi ngày.)" },
    { question: "無料", answer: "Miễn phí – むりょう", example: "無料です。 (Miễn phí.)" },
    { question: "説明する", answer: "Giải thích – せつめいする", example: "文法を説明します。 (Giải thích ngữ pháp.)" },

    /* ===== BÀI 10 (9 từ) ===== */
    { question: "午前", answer: "Buổi sáng / AM – ごぜん", example: "午前9時に会社へ行きます。 (Tôi đi làm lúc 9 giờ sáng.)", note: "Bài 10 – 9 từ" },
    { question: "午後", answer: "Buổi chiều / PM – ごご", example: "午後は会議があります。 (Buổi chiều có họp.)", note: "Bài 10 – 9 từ" },
    { question: "教科書", answer: "Sách giáo khoa – きょうかしょ", example: "教科書を持ってきてください。 (Hãy mang sách giáo khoa.)", note: "Bài 10 – 9 từ" },
    { question: "教室", answer: "Phòng học – きょうしつ", example: "教室で勉強します。 (Học trong lớp.)", note: "Bài 10 – 9 từ" },
    { question: "先生", answer: "Giáo viên – せんせい", example: "先生に質問します。 (Hỏi giáo viên.)", note: "Bài 10 – 9 từ" },
    { question: "全部", answer: "Toàn bộ – ぜんぶ", example: "全部終わりました。 (Xong hết rồi.)", note: "Bài 10 – 9 từ" },
    { question: "～回", answer: "~ lần – かい", example: "日本へ3回行きました。 (Đã đi Nhật 3 lần.)", note: "Bài 10 – 9 từ" },
    { question: "参加する", answer: "Tham gia – さんかする", example: "イベントに参加します。 (Tham gia sự kiện.)", note: "Bài 10 – 9 từ" },
    { question: "用意する", answer: "Chuẩn bị – よういする", example: "資料を用意します。 (Chuẩn bị tài liệu.)", note: "Bài 10 – 9 từ" },

    /* ===== BÀI 11 (10 từ) ===== */
    { question: "飲み物", answer: "Đồ uống – のみもの", example: "冷たい飲み物が好きです。 (Tôi thích đồ uống lạnh.)", note: "Bài 11 – 10 từ" },
    { question: "お茶", answer: "Trà – おちゃ", example: "お茶を飲みます。 (Uống trà.)", note: "Bài 11 – 10 từ" },
    { question: "お酒", answer: "Rượu – おさけ", example: "お酒を少し飲みます。 (Tôi uống rượu chút thôi.)", note: "Bài 11 – 10 từ" },
    { question: "材料", answer: "Nguyên liệu – ざいりょう", example: "材料を買います。 (Mua nguyên liệu.)", note: "Bài 11 – 10 từ" },
    { question: "野菜", answer: "Rau – やさい", example: "野菜をたくさん食べます。 (Ăn nhiều rau.)", note: "Bài 11 – 10 từ" },
    { question: "牛肉", answer: "Thịt bò – ぎゅうにく", example: "牛肉が好きです。 (Tôi thích thịt bò.)", note: "Bài 11 – 10 từ" },
    { question: "豚肉", answer: "Thịt heo – ぶたにく", example: "豚肉で料理します。 (Nấu ăn bằng thịt heo.)", note: "Bài 11 – 10 từ" },
    { question: "皿", answer: "Cái đĩa – さら", example: "皿を洗います。 (Rửa đĩa.)", note: "Bài 11 – 10 từ" },
    { question: "売る", answer: "Bán – うる", example: "店で野菜を売ります。 (Bán rau ở cửa hàng.)", note: "Bài 11 – 10 từ" },
    { question: "持って行く", answer: "Mang đi – もっていく", example: "弁当を持って行きます。 (Mang cơm hộp đi.)", note: "Bài 11 – 10 từ" },

    /* ===== BÀI 12 (9 từ) ===== */
    { question: "卵", answer: "Trứng – たまご", example: "卵を使います。 (Dùng trứng.)", note: "Bài 12 – 9 từ" },
    { question: "料理", answer: "Món ăn / nấu ăn – りょうり", example: "料理が上手です。 (Nấu ăn giỏi.)", note: "Bài 12 – 9 từ" },
    { question: "お湯", answer: "Nước nóng – おゆ", example: "お湯を入れます。 (Cho nước nóng vào.)", note: "Bài 12 – 9 từ" },
    { question: "調理方法", answer: "Cách nấu – ちょうりほうほう", example: "調理方法を調べます。 (Tìm cách nấu.)", note: "Bài 12 – 9 từ" },
    { question: "少し", answer: "Một chút – すこし", example: "少し辛いです。 (Hơi cay.)", note: "Bài 12 – 9 từ" },
    { question: "味", answer: "Vị – あじ", example: "この料理は味がいいです。 (Món này ngon.)", note: "Bài 12 – 9 từ" },
    { question: "甘い", answer: "Ngọt – あまい", example: "このケーキは甘いです。 (Bánh này ngọt.)", note: "Bài 12 – 9 từ" },
    { question: "辛い", answer: "Cay – からい", example: "この料理は辛いです。 (Món này cay.)", note: "Bài 12 – 9 từ" },
    { question: "苦手（な）", answer: "Không giỏi / không thích – にがて", example: "辛い物は苦手です。 (Tôi không ăn được đồ cay.)", note: "Bài 12 – 9 từ" },

    /* ===== BÀI 13 (11 từ) ===== */
    { question: "コピー機", answer: "Máy photocopy – コピーき", example: "コピー機を使います。 (Dùng máy photo.)", note: "Bài 13 – 11 từ" },
    { question: "数字", answer: "Số – すうじ", example: "数字を入力します。 (Nhập số.)", note: "Bài 13 – 11 từ" },
    { question: "電気", answer: "Điện – でんき", example: "電気を消します。 (Tắt điện.)", note: "Bài 13 – 11 từ" },
    { question: "音", answer: "Âm thanh – おと", example: "音が大きいです。 (Âm thanh to.)", note: "Bài 13 – 11 từ" },
    { question: "机", answer: "Cái bàn – つくえ", example: "机の上に本があります。 (Có sách trên bàn.)", note: "Bài 13 – 11 từ" },
    { question: "都合", answer: "Sự tiện / hoàn cảnh – つごう", example: "都合がいいです。 (Thuận tiện.)", note: "Bài 13 – 11 từ" },
    { question: "悪い", answer: "Xấu / không tốt – わるい", example: "調子が悪いです。 (Tình trạng không tốt.)", note: "Bài 13 – 11 từ" },
    { question: "動く", answer: "Chạy / hoạt động – うごく", example: "機械が動きません。 (Máy không chạy.)", note: "Bài 13 – 11 từ" },
    { question: "使う", answer: "Dùng – つかう", example: "パソコンを使います。 (Dùng máy tính.)", note: "Bài 13 – 11 từ" },
    { question: "終わる", answer: "Kết thúc – おわる", example: "仕事が終わりました。 (Công việc xong rồi.)", note: "Bài 13 – 11 từ" },
    { question: "お願いします", answer: "Nhờ / làm ơn – おねがいします", example: "よろしくお願いします。 (Nhờ anh/chị.)", note: "Bài 13 – 11 từ" },

    /* ===== BÀI 14 (10 từ) ===== */
    { question: "用事", answer: "Việc bận / việc riêng – ようじ", example: "今日は用事があります。 (Hôm nay tôi có việc.)", note: "Bài 14 – 10 từ" },
    { question: "氏名", answer: "Họ và tên – しめい", example: "氏名を書いてください。 (Vui lòng ghi họ tên.)", note: "Bài 14 – 10 từ" },
    { question: "理由", answer: "Lý do – りゆう", example: "理由を説明します。 (Tôi giải thích lý do.)", note: "Bài 14 – 10 từ" },
    { question: "連絡先", answer: "Thông tin liên lạc – れんらくさき", example: "連絡先を教えてください。 (Vui lòng cho tôi thông tin liên lạc.)", note: "Bài 14 – 10 từ" },
    { question: "別に", answer: "Không có gì đặc biệt – べつに", example: "別に問題ありません。 (Không có vấn đề gì.)", note: "Bài 14 – 10 từ" },
    { question: "早く", answer: "Sớm / nhanh – はやく", example: "早く帰ります。 (Tôi về sớm.)", note: "Bài 14 – 10 từ" },
    { question: "吸う", answer: "Hút (thuốc) – すう", example: "たばこを吸います。 (Hút thuốc.)", note: "Bài 14 – 10 từ" },
    { question: "取る", answer: "Lấy – とる", example: "休みを取ります。 (Tôi xin nghỉ.)", note: "Bài 14 – 10 từ" },
    { question: "帰る", answer: "Về – かえる", example: "家に帰ります。 (Tôi về nhà.)", note: "Bài 14 – 10 từ" },
    { question: "伝える", answer: "Truyền đạt / báo lại – つたえる", example: "先生に伝えます。 (Tôi báo lại cho thầy.)", note: "Bài 14 – 10 từ" },

    /* ===== BÀI 15 (11 từ) ===== */
    { question: "熱", answer: "Sốt – ねつ", example: "熱があります。 (Tôi bị sốt.)", note: "Bài 15 – 11 từ" },
    { question: "薬", answer: "Thuốc – くすり", example: "薬を飲みます。 (Uống thuốc.)", note: "Bài 15 – 11 từ" },
    { question: "病気", answer: "Bệnh – びょうき", example: "病気で会社を休みます。 (Nghỉ làm vì bệnh.)", note: "Bài 15 – 11 từ" },
    { question: "病院", answer: "Bệnh viện – びょういん", example: "病院へ行きます。 (Tôi đi bệnh viện.)", note: "Bài 15 – 11 từ" },
    { question: "医者", answer: "Bác sĩ – いしゃ", example: "医者に診てもらいます。 (Được bác sĩ khám.)", note: "Bài 15 – 11 từ" },
    { question: "住所", answer: "Địa chỉ – じゅうしょ", example: "住所を書きます。 (Ghi địa chỉ.)", note: "Bài 15 – 11 từ" },
    { question: "～才", answer: "~ tuổi – さい", example: "私は30才です。 (Tôi 30 tuổi.)", note: "Bài 15 – 11 từ" },
    { question: "痛い", answer: "Đau – いたい", example: "頭が痛いです。 (Tôi đau đầu.)", note: "Bài 15 – 11 từ" },
    { question: "眠い", answer: "Buồn ngủ – ねむい", example: "とても眠いです。 (Rất buồn ngủ.)", note: "Bài 15 – 11 từ" },
    { question: "寝る", answer: "Ngủ – ねる", example: "早く寝ます。 (Tôi ngủ sớm.)", note: "Bài 15 – 11 từ" },
    { question: "記入する", answer: "Điền (đơn) – きにゅうする", example: "申込書に記入します。 (Điền đơn đăng ký.)", note: "Bài 15 – 11 từ" },

    /* ===== BÀI 16 (12 từ) ===== */
    { question: "体", answer: "Cơ thể – からだ", example: "体の調子が悪いです。 (Cơ thể không khỏe.)", note: "Bài 16 – 12 từ" },
    { question: "顔", answer: "Mặt – かお", example: "顔を洗います。 (Rửa mặt.)", note: "Bài 16 – 12 từ" },
    { question: "目", answer: "Mắt – め", example: "目が疲れました。 (Mắt mỏi.)", note: "Bài 16 – 12 từ" },
    { question: "耳", answer: "Tai – みみ", example: "耳が痛いです。 (Đau tai.)", note: "Bài 16 – 12 từ" },
    { question: "口", answer: "Miệng – くち", example: "口を開けてください。 (Hãy mở miệng.)", note: "Bài 16 – 12 từ" },
    { question: "頭", answer: "Đầu – あたま", example: "頭が痛いです。 (Đau đầu.)", note: "Bài 16 – 12 từ" },
    { question: "足", answer: "Chân – あし", example: "足が疲れました。 (Mỏi chân.)", note: "Bài 16 – 12 từ" },
    { question: "手", answer: "Tay – て", example: "手を洗います。 (Rửa tay.)", note: "Bài 16 – 12 từ" },
    { question: "起きる", answer: "Thức dậy – おきる", example: "6時に起きます。 (Tôi dậy lúc 6 giờ.)", note: "Bài 16 – 12 từ" },
    { question: "歩く", answer: "Đi bộ – あるく", example: "毎日歩きます。 (Mỗi ngày tôi đi bộ.)", note: "Bài 16 – 12 từ" },
    { question: "走る", answer: "Chạy – はしる", example: "公園で走ります。 (Chạy ở công viên.)", note: "Bài 16 – 12 từ" },
    { question: "運動する", answer: "Tập thể dục – うんどうする", example: "毎朝運動します。 (Mỗi sáng tôi tập thể dục.)", note: "Bài 16 – 12 từ" },

    /* ===== BÀI 17 (10 từ) ===== */
    { question: "お父さん", answer: "Bố – おとうさん", example: "お父さんは会社員です。 (Bố tôi là nhân viên công ty.)", note: "Bài 17 – 10 từ" },
    { question: "お母さん", answer: "Mẹ – おかあさん", example: "お母さんは料理が上手です。 (Mẹ tôi nấu ăn giỏi.)", note: "Bài 17 – 10 từ" },
    { question: "兄", answer: "Anh trai – あに", example: "兄は日本に住んでいます。 (Anh trai tôi sống ở Nhật.)", note: "Bài 17 – 10 từ" },
    { question: "姉", answer: "Chị gái – あね", example: "姉は先生です。 (Chị tôi là giáo viên.)", note: "Bài 17 – 10 từ" },
    { question: "お姉さん", answer: "Chị gái (gọi người khác) – おねえさん", example: "お姉さんはとても親切です。 (Chị ấy rất tốt.)", note: "Bài 17 – 10 từ" },
    { question: "弟", answer: "Em trai – おとうと", example: "弟は学生です。 (Em trai tôi là sinh viên.)", note: "Bài 17 – 10 từ" },
    { question: "妹", answer: "Em gái – いもうと", example: "妹は高校生です。 (Em gái tôi học cấp 3.)", note: "Bài 17 – 10 từ" },
    { question: "夫", answer: "Chồng – おっと", example: "夫は会社で働いています。 (Chồng tôi làm ở công ty.)", note: "Bài 17 – 10 từ" },
    { question: "妻", answer: "Vợ – つま", example: "妻と買い物に行きます。 (Tôi đi mua sắm với vợ.)", note: "Bài 17 – 10 từ" },
    { question: "両親", answer: "Bố mẹ – りょうしん", example: "両親は元気です。 (Bố mẹ tôi khỏe.)", note: "Bài 17 – 10 từ" },

    /* ===== BÀI 18 (10 từ) ===== */
    { question: "男の子", answer: "Bé trai – おとこのこ", example: "男の子が遊んでいます。 (Bé trai đang chơi.)", note: "Bài 18 – 10 từ" },
    { question: "女の子", answer: "Bé gái – おんなのこ", example: "女の子が笑っています。 (Bé gái đang cười.)", note: "Bài 18 – 10 từ" },
    { question: "誕生日", answer: "Sinh nhật – たんじょうび", example: "今日は誕生日です。 (Hôm nay là sinh nhật.)", note: "Bài 18 – 10 từ" },
    { question: "結婚", answer: "Kết hôn – けっこん", example: "来年、結婚します。 (Năm sau tôi kết hôn.)", note: "Bài 18 – 10 từ" },
    { question: "時計", answer: "Đồng hồ – とけい", example: "新しい時計を買いました。 (Tôi mua đồng hồ mới.)", note: "Bài 18 – 10 từ" },
    { question: "幸せ（な）", answer: "Hạnh phúc – しあわせ", example: "家族と一緒で幸せです。 (Ở bên gia đình tôi hạnh phúc.)", note: "Bài 18 – 10 từ" },
    { question: "生まれる", answer: "Sinh ra – うまれる", example: "日本で生まれました。 (Tôi sinh ra ở Nhật.)", note: "Bài 18 – 10 từ" },
    { question: "思う", answer: "Nghĩ / cho rằng – おもう", example: "いいと思います。 (Tôi nghĩ là tốt.)", note: "Bài 18 – 10 từ" },
    { question: "選ぶ", answer: "Chọn – えらぶ", example: "好きな色を選びます。 (Chọn màu mình thích.)", note: "Bài 18 – 10 từ" },
    { question: "合格する", answer: "Đỗ / đạt – ごうかくする", example: "試験に合格しました。 (Đã đỗ kỳ thi.)", note: "Bài 18 – 10 từ" }

];

const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const example = document.getElementById('example');
const prevBtn = document.querySelector('.prev-button');
const progressEl = document.getElementById('progress');


// Gọi hàm khởi tạo khi tải trang
window.onload = initFlashcard;

// Khởi tạo thẻ đầu tiên
function initFlashcard() {
    // Hiển thị nội dung ban đầu
    questionEl.textContent = flashcards[currentCard].question;
    answerEl.textContent = flashcards[currentCard].answer;
    example.textContent = flashcards[currentCard].example;

    // Xóa hiệu ứng cũ
    questionEl.classList.remove('visible');
    answerEl.classList.add('hidden');
    answerEl.classList.remove('visible');
    example.classList.add('hidden');
    example.classList.remove('visible');

    // Thêm hiệu ứng hiển thị
    setTimeout(() => {
        questionEl.classList.add('visible');
    }, 10);

    updateUI();
}

// Hiển thị câu trả lời với hiệu ứng mượt
function showAnswer() {
    answerEl.classList.remove('hidden'); // Hiển thị câu trả lời
    example.classList.remove('hidden'); // Hiển thị example
    setTimeout(() => {
        answerEl.classList.add('visible');  // Thêm hiệu ứng mượt
        example.classList.add('visible');  // Thêm hiệu ứng mượt
    }, 10);
}

// Chuyển sang thẻ tiếp theo
function nextCard() {
    currentCard = (currentCard + 1) % flashcards.length; // Lặp lại từ đầu nếu hết mảng

    // Ẩn câu hỏi và câu trả lời cũ
    questionEl.classList.remove('visible');
    answerEl.classList.add('hidden');
    answerEl.classList.remove('visible');
    example.classList.add('hidden');
    example.classList.remove('visible');

    setTimeout(() => {
        // Hiển thị nội dung mới
        questionEl.textContent = flashcards[currentCard].question;
        answerEl.textContent = flashcards[currentCard].answer;
        example.textContent = flashcards[currentCard].example;

        // Thêm hiệu ứng hiển thị
        questionEl.classList.add('visible');
        updateUI();
    }, 300);
}

// Quay về thẻ trước đó
function prevCard() {
    // Nếu đang ở thẻ đầu tiên thì không làm gì
    if (currentCard === 0) return;

    currentCard--;

    // Reset trạng thái card
    questionEl.classList.remove('visible');
    answerEl.classList.add('hidden');
    answerEl.classList.remove('visible');
    example.classList.add('hidden');
    example.classList.remove('visible');

    setTimeout(() => {
        // Cập nhật nội dung
        questionEl.textContent = flashcards[currentCard].question;
        answerEl.textContent = flashcards[currentCard].answer;
        example.textContent = flashcards[currentCard].example;

        // Hiện câu hỏi
        questionEl.classList.add('visible');
        updateUI();
    }, 300);
}

function updateUI() {
    // Cập nhật progress: 12 / 80
    progressEl.textContent = `Từ thứ ${currentCard + 1} / ${flashcards.length}`;

    // Disable nút "Từ trước đó" nếu ở thẻ đầu
    prevBtn.disabled = currentCard === 0;
    prevBtn.style.opacity = currentCard === 0 ? '0.5' : '1';
    prevBtn.style.cursor = currentCard === 0 ? 'not-allowed' : 'pointer';
}




