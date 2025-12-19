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


