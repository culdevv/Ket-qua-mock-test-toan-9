/* ==========================================
HỆ THỐNG TRA CỨU KẾT QUẢ THI
========================================== */

/* ==========================================
DỮ LIỆU HỌC SINH

MUỐN THÊM HỌC SINH:
Copy một khối dữ liệu bên dưới và thay đổi
mã số, tên, điểm và nhận xét.
========================================== */

const students = {
    "20233513": {
        name: "Nguyễn Văn A",
        score: 8.5,
        comment: "Em có kết quả học tập tốt. Cần tiếp tục phát huy khả năng và duy trì tinh thần học tập."
    },

    "20233514": {
        name: "Trần Văn B",
        score: 7.25,
        comment: "Em đã nắm được kiến thức cơ bản. Cần dành thêm thời gian luyện tập các bài tập nâng cao."
    },

    "20233515": {
        name: "Lê Văn C",
        score: 9.0,
        comment: "Em có kết quả rất tốt. Bài làm chính xác và trình bày rõ ràng. Tiếp tục phát huy."
    },

    "20233516": {
        name: "Phạm Văn D",
        score: 6.5,
        comment: "Em đã hoàn thành các yêu cầu cơ bản. Cần ôn tập thêm và luyện tập thường xuyên hơn."
    }
};

/* ==========================================
LẤY CÁC PHẦN TỬ TRONG HTML
========================================== */

const studentIdInput = document.getElementById("studentId");
const searchButton = document.getElementById("searchButton");
const searchSection = document.getElementById("searchSection");
const resultSection = document.getElementById("resultSection");
const errorMessage = document.getElementById("errorMessage");
const studentName = document.getElementById("studentName");
const resultStudentId = document.getElementById("resultStudentId");
const studentScore = document.getElementById("studentScore");
const studentRank = document.getElementById("studentRank");
const teacherComment = document.getElementById("teacherComment");
const backButton = document.getElementById("backButton");

/* ==========================================
KIỂM TRA FILE JAVASCRIPT
========================================== */

console.log("Hệ thống tra cứu kết quả đã được tải.");

/* ==========================================
HÀM XẾP LOẠI
========================================== */

function getRank(score) {
    if (score >= 9) {
        return "Xuất sắc";
    }

    if (score >= 8) {
        return "Giỏi";
    }

    if (score >= 6.5) {
        return "Khá";
    }

    if (score >= 5) {
        return "Trung bình";
    }

    return "Cần cố gắng";
}

/* ==========================================
HÀM TRA CỨU KẾT QUẢ
========================================== */

function searchResult() {
    /* Lấy mã học sinh */
    const studentId = studentIdInput.value.trim();

    /* Xóa thông báo lỗi cũ */
    errorMessage.textContent = "";

    /* Kiểm tra chưa nhập mã */
    if (studentId === "") {
        errorMessage.textContent = "Vui lòng nhập mã số học sinh.";
        return;
    }

    /* Tìm học sinh */
    const student = students[studentId];

    /* Nếu không tìm thấy */
    if (!student) {
        errorMessage.textContent = "Không tìm thấy kết quả của mã học sinh: " + studentId;
        return;
    }

    /* Hiển thị dữ liệu */
    studentName.textContent = student.name;
    resultStudentId.textContent = studentId;
    studentScore.textContent = student.score;
    studentRank.textContent = getRank(student.score);
    teacherComment.textContent = student.comment;

    /* Ẩn màn hình tra cứu */
    searchSection.classList.add("hidden");

    /* Hiển thị màn hình kết quả */
    resultSection.classList.remove("hidden");

    /* Cuộn lên đầu trang */
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* ==========================================
SỰ KIỆN BẤM NÚT TRA CỨU
========================================== */

searchButton.addEventListener("click", searchResult);

/* ==========================================
NHẤN ENTER ĐỂ TRA CỨU
========================================== */

studentIdInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchResult();
    }
});

/* ==========================================
QUAY LẠI MÀN HÌNH TRA CỨU
========================================== */

backButton.addEventListener("click", function() {
    /* Ẩn kết quả */
    resultSection.classList.add("hidden");

    /* Hiển thị trang tra cứu */
    searchSection.classList.remove("hidden");

    /* Xóa dữ liệu cũ */
    studentIdInput.value = "";
    errorMessage.textContent = "";

    /* Đưa con trỏ vào ô nhập */
    studentIdInput.focus();
});
