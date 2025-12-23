let currentCard = 0;

// Mảng từ vựng
const flashcards = [
    {
        question: "学生",
        answer: "Học sinh / sinh viên – がくせい",
        example: "私は日本語学校の学生です。 (Tôi là học viên trường tiếng Nhật.)"
    },
    {
        question: "仕事",
        answer: "Công việc – しごと",
        example: "仕事がたくさんあります。 (Tôi có nhiều việc.)"
    },
    {
        question: "生活",
        answer: "Cuộc sống / sinh hoạt – せいかつ",
        example: "日本での生活に慣れました。 (Tôi đã quen với cuộc sống ở Nhật.)"
    },
    {
        question: "元気",
        answer: "Khỏe / tinh thần tốt – げんき",
        example: "おかげさまで元気です。 (Nhờ bạn, tôi vẫn khỏe.)"
    },
    {
        question: "忙しい",
        answer: "Bận – いそがしい",
        example: "最近、とても忙しいです。 (Dạo này tôi rất bận.)"
    },
    {
        question: "去年",
        answer: "Năm ngoái – きょねん",
        example: "去年、日本へ行きました。 (Năm ngoái tôi đã đi Nhật.)"
    },
    {
        question: "先週",
        answer: "Tuần trước – せんしゅう",
        example: "先週、テストがありました。 (Tuần trước có bài kiểm tra.)"
    },
    {
        question: "作る",
        answer: "Làm / chế tạo / nấu – つくる",
        example: "母は毎日料理を作ります。 (Mẹ tôi nấu ăn mỗi ngày.)"
    },
    {
        question: "働く",
        answer: "Làm việc – はたらく",
        example: "日本で働きたいです。 (Tôi muốn làm việc ở Nhật.)"
    },
    {
        question: "人",
        answer: "Người – ひと",
        example: "あの人はとても親切です。 (Người kia rất tốt bụng.)"
    },
    {
        question: "英語",
        answer: "Tiếng Anh – えいご",
        example: "英語を話します。 (Tôi nói tiếng Anh.)"
    },
    {
        question: "音楽",
        answer: "Âm nhạc – おんがく",
        example: "音楽を聞くのが好きです。 (Tôi thích nghe nhạc.)"
    },
    {
        question: "習う",
        answer: "Học (được dạy) – ならう",
        example: "先生に日本語を習います。 (Tôi học tiếng Nhật từ thầy cô.)"
    },
    {
        question: "話す",
        answer: "Nói – はなす",
        example: "友だちと日本語で話します。 (Tôi nói chuyện bằng tiếng Nhật với bạn.)"
    },
    {
        question: "出かける",
        answer: "Ra ngoài / đi chơi – でかける",
        example: "週末、家族と出かけます。 (Cuối tuần tôi ra ngoài với gia đình.)"
    },
    {
        question: "家族",
        answer: "Gia đình – かぞく",
        example: "家族は4人です。 (Gia đình tôi có 4 người.)"
    },
    {
        question: "犬",
        answer: "Chó – いぬ",
        example: "犬を飼っています。 (Tôi nuôi chó.)"
    },
    {
        question: "夕方",
        answer: "Chiều tối – ゆうがた",
        example: "夕方、散歩します。 (Chiều tối tôi đi dạo.)"
    },
    {
        question: "季節",
        answer: "Mùa – きせつ",
        example: "日本には四つの季節があります。 (Nhật Bản có bốn mùa.)"
    },
    {
        question: "春",
        answer: "Mùa xuân – はる",
        example: "春は花がきれいです。 (Mùa xuân hoa rất đẹp.)"
    },
    {
        question: "秋",
        answer: "Mùa thu – あき",
        example: "秋は涼しいです。 (Mùa thu mát mẻ.)"
    },
    {
        question: "冬",
        answer: "Mùa đông – ふゆ",
        example: "冬はとても寒いです。 (Mùa đông rất lạnh.)"
    },
    {
        question: "夏",
        answer: "Mùa hè – なつ",
        example: "夏は暑いです。 (Mùa hè nóng.)"
    },
    {
        question: "花",
        answer: "Hoa – はな",
        example: "公園に花がたくさんあります。 (Trong công viên có nhiều hoa.)"
    },
    {
        question: "同じ",
        answer: "Giống nhau – おなじ",
        example: "私たちは同じクラスです。 (Chúng tôi học cùng lớp.)"
    },
    {
        question: "寒い",
        answer: "Lạnh – さむい",
        example: "今日は寒いです。 (Hôm nay trời lạnh.)"
    },
    {
        question: "暑い",
        answer: "Nóng – あつい",
        example: "日本の夏は暑いです。 (Mùa hè ở Nhật rất nóng.)"
    },
    {
        question: "四季",
        answer: "Bốn mùa – しき",
        example: "日本の四季ははっきりしています。 (Bốn mùa ở Nhật rất rõ rệt.)"
    },
    {
        question: "天気",
        answer: "Thời tiết – てんき",
        example: "今日は天気がいいです。 (Hôm nay thời tiết đẹp.)"
    },
    {
        question: "雨",
        answer: "Mưa – あめ",
        example: "雨が降っています。 (Trời đang mưa.)"
    },
    {
        question: "晴れ",
        answer: "Nắng / trời quang – はれ",
        example: "明日は晴れです。 (Ngày mai trời nắng.)"
    },
    {
        question: "風",
        answer: "Gió – かぜ",
        example: "今日は風が強いです。 (Hôm nay gió mạnh.)"
    },
    {
        question: "雪",
        answer: "Tuyết – ゆき",
        example: "雪が降りました。 (Tuyết đã rơi.)"
    },
    {
        question: "今",
        answer: "Bây giờ – いま",
        example: "今、雨が降っています。 (Bây giờ trời đang mưa.)"
    },
    {
        question: "今日",
        answer: "Hôm nay – きょう",
        example: "今日は曇りです。 (Hôm nay trời nhiều mây.)"
    },
    {
        question: "毎日",
        answer: "Mỗi ngày – まいにち",
        example: "毎日天気予報を見ます。 (Mỗi ngày tôi xem dự báo thời tiết.)"
    },
    {
        question: "昨日",
        answer: "Hôm qua – きのう",
        example: "昨日は雨でした。 (Hôm qua trời mưa.)"
    },
    {
        question: "強い",
        answer: "Mạnh – つよい",
        example: "強い風が吹いています。 (Gió mạnh đang thổi.)"
    },
    {
        question: "曇り",
        answer: "Nhiều mây – くもり",
        example: "今日は曇りで寒いです。 (Hôm nay nhiều mây và lạnh.)"
    },
    {
        question: "町",
        answer: "Thị trấn / khu phố – まち",
        example: "この町は静かです。 (Khu phố này yên tĩnh.)"
    },
    {
        question: "店",
        answer: "Cửa hàng – みせ",
        example: "近くに店があります。 (Gần đây có cửa hàng.)"
    },
    {
        question: "静か",
        answer: "Yên tĩnh – しずか",
        example: "ここはとても静かです。 (Ở đây rất yên tĩnh.)"
    },
    {
        question: "有名",
        answer: "Nổi tiếng – ゆうめい",
        example: "この町は温泉で有名です。 (Thị trấn này nổi tiếng về suối nước nóng.)"
    },
    {
        question: "多い",
        answer: "Nhiều – おおい",
        example: "この町は人が多いです。 (Thị trấn này đông người.)"
    },
    {
        question: "少ない",
        answer: "Ít – すくない",
        example: "夜は人が少ないです。 (Buổi tối ít người.)"
    },
    {
        question: "遠い",
        answer: "Xa – とおい",
        example: "駅は少し遠いです。 (Nhà ga hơi xa.)"
    },
    {
        question: "便利",
        answer: "Tiện lợi – べんり",
        example: "ここは交通が便利です。 (Ở đây giao thông tiện lợi.)"
    },
    {
        question: "不便",
        answer: "Bất tiện – ふべん",
        example: "車がないと不便です。 (Không có xe thì bất tiện.)"
    },
    {
        question: "食堂",
        answer: "Quán ăn – しょくどう",
        example: "会社の近くに食堂があります。 (Gần công ty có quán ăn.)"
    },
    {
        question: "道",
        answer: "Con đường – みち",
        example: "この道をまっすぐ行きます。 (Đi thẳng theo con đường này.)"
    },
    {
        question: "右",
        answer: "Phải – みぎ",
        example: "右に曲がってください。 (Hãy rẽ phải.)"
    },
    {
        question: "左",
        answer: "Trái – ひだり",
        example: "左に公園があります。 (Bên trái có công viên.)"
    },
    {
        question: "近く",
        answer: "Gần – ちかく",
        example: "駅の近くです。 (Gần nhà ga.)"
    },
    {
        question: "車",
        answer: "Xe hơi – くるま",
        example: "車で行きます。 (Tôi đi bằng ô tô.)"
    },
    {
        question: "送る",
        answer: "Đưa / tiễn / gửi – おくる",
        example: "駅まで友だちを送ります。 (Tôi đưa bạn đến ga.)"
    },
    {
        question: "お寺",
        answer: "Chùa – おてら",
        example: "山に古いお寺があります。 (Trên núi có ngôi chùa cổ.)"
    },
    {
        question: "公園",
        answer: "Công viên – こうえん",
        example: "公園で散歩します。 (Tôi đi dạo ở công viên.)"
    },
    {
        question: "銀行",
        answer: "Ngân hàng – ぎんこう",
        example: "銀行でお金を下ろします。 (Tôi rút tiền ở ngân hàng.)"
    },
    {
        question: "神社",
        answer: "Đền Thần đạo – じんじゃ",
        example: "神社でお参りします。 (Tôi đi viếng đền.)"
    },
    {
        question: "時間",
        answer: "Thời gian – じかん",
        example: "時間がありません。 (Tôi không có thời gian.)"
    },
    {
        question: "場所",
        answer: "Địa điểm – ばしょ",
        example: "待ち合わせの場所です。 (Đây là địa điểm hẹn.)"
    },
    {
        question: "駅",
        answer: "Nhà ga – えき",
        example: "駅で友だちを待ちます。 (Tôi đợi bạn ở ga.)"
    },
    {
        question: "電車",
        answer: "Tàu điện – でんしゃ",
        example: "電車で会社へ行きます。 (Tôi đi làm bằng tàu điện.)"
    },
    {
        question: "待つ",
        answer: "Đợi – まつ",
        example: "ここで少し待ってください。 (Hãy đợi ở đây một chút.)"
    },
    {
        question: "止まる",
        answer: "Dừng lại – とまる",
        example: "電車が止まりました。 (Tàu đã dừng.)"
    },
    {
        question: "着く",
        answer: "Đến nơi – つく",
        example: "駅に着きました。 (Tôi đã đến ga.)"
    },
    {
        question: "急ぐ",
        answer: "Vội / gấp – いそぐ",
        example: "時間がないので急ぎます。 (Vì không có thời gian nên tôi phải vội.)"
    },
    {
        question: "門",
        answer: "Cổng – もん",
        example: "正門の前で会いましょう。 (Gặp nhau trước cổng chính nhé.)"
    },
    {
        question: "受付",
        answer: "Quầy lễ tân – うけつけ",
        example: "受付で名前を書きます。 (Tôi ghi tên ở quầy lễ tân.)"
    },
    {
        question: "お金",
        answer: "Tiền – おかね",
        example: "お金を払います。 (Tôi trả tiền.)"
    },
    {
        question: "試合",
        answer: "Trận đấu – しあい",
        example: "サッカーの試合を見ます。 (Tôi xem trận bóng đá.)"
    },
    {
        question: "楽しい",
        answer: "Vui – たのしい",
        example: "試合はとても楽しかったです。 (Trận đấu rất vui.)"
    },
    {
        question: "難しい",
        answer: "Khó – むずかしい",
        example: "この問題は難しいです。 (Câu hỏi này khó.)"
    },
    {
        question: "登る",
        answer: "Leo / trèo – のぼる",
        example: "山に登ります。 (Tôi leo núi.)"
    },
    {
        question: "食事",
        answer: "Bữa ăn – しょくじ",
        example: "家族と食事します。 (Tôi ăn cùng gia đình.)"
    },
    {
        question: "博物館",
        answer: "Bảo tàng – はくぶつかん",
        example: "博物館を見学します。 (Tôi tham quan bảo tàng.)"
    },
    {
        question: "動物園",
        answer: "Sở thú – どうぶつえん",
        example: "子供と動物園へ行きます。 (Tôi đi sở thú với con.)"
    },
    {
        question: "～店",
        answer: "Cửa hàng ~ – ～てん",
        example: "この店はラーメン店です。 (Cửa hàng này là tiệm ramen.)"
    },
    {
        question: "高校",
        answer: "Trường cấp 3 – こうこう",
        example: "妹は高校に通っています。 (Em gái tôi đang học cấp 3.)"
    },
    {
        question: "言う",
        answer: "Nói – いう",
        example: "先生が大切なことを言いました。 (Thầy đã nói điều quan trọng.)"
    },
    {
        question: "書く",
        answer: "Viết – かく",
        example: "ノートに漢字を書きます。 (Tôi viết kanji vào vở.)"
    },
    {
        question: "貸す",
        answer: "Cho mượn – かす",
        example: "友だちに本を貸します。 (Tôi cho bạn mượn sách.)"
    },
    {
        question: "教える",
        answer: "Dạy / chỉ – おしえる",
        example: "先生が日本語を教えます。 (Thầy dạy tiếng Nhật.)"
    },
    {
        question: "大学",
        answer: "Đại học – だいがく",
        example: "兄は大学で勉強しています。 (Anh tôi đang học đại học.)"
    },
    {
        question: "漢字",
        answer: "Chữ Hán – かんじ",
        example: "毎日漢字を練習します。 (Mỗi ngày tôi luyện chữ Hán.)"
    },
    {
        question: "練習",
        answer: "Luyện tập – れんしゅう",
        example: "発音を練習します。 (Tôi luyện phát âm.)"
    },
    {
        question: "無料",
        answer: "Miễn phí – むりょう",
        example: "この授業は無料です。 (Buổi học này miễn phí.)"
    },
    {
        question: "説明する",
        answer: "Giải thích – せつめいする",
        example: "先生が文法を説明します。 (Thầy giải thích ngữ pháp.)"
    }
];


const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const example = document.getElementById('example');

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
    }, 300); // Đợi hiệu ứng cũ kết thúc trước khi hiển thị nội dung mới
}


