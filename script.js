/* ==========================================
HỆ THỐNG TRA CỨU KẾT QUẢ THI
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

/* Lấy các phần tử DOM */
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

/* Hàm tính xếp loại */
function getRank(score) {
    if (score >= 9) return "Xuất sắc";
    if (score >= 8) return "Giỏi";
    if (score >= 6.5) return "Khá";
    if (score >= 5) return "Trung bình";
    return "Cần cố gắng";
}

/* Hàm tra cứu kết quả */
function searchResult() {
    const studentId = studentIdInput.value.trim();
    errorMessage.textContent = "";

    if (studentId === "") {
        errorMessage.textContent = "Vui lòng nhập mã số học sinh.";
        return;
    }

    const student = students[studentId];

    if (!student) {
        errorMessage.textContent = "Không tìm thấy kết quả của mã học sinh: " + studentId;
        return;
    }

    studentName.textContent = student.name;
    resultStudentId.textContent = studentId;
    studentScore.textContent = student.score;
    studentRank.textContent = getRank(student.score);
    teacherComment.textContent = student.comment;

    searchSection.classList.add("hidden");
    resultSection.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* Lắng nghe sự kiện */
searchButton.addEventListener("click", searchResult);

studentIdInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchResult();
    }
});

backButton.addEventListener("click", function() {
    resultSection.classList.add("hidden");
    searchSection.classList.remove("hidden");
    studentIdInput.value = "";
    errorMessage.textContent = "";
    studentIdInput.focus();
});
