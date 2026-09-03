/* ==========================================
DỮ LIỆU HỌC SINH

CÁCH THÊM HỌC SINH:

"MÃ_HỌC_SINH": {
name: "Họ tên",
score: Điểm,
comment: "Nhận xét"
}

========================================== */

const students = {

```
"20233513": {

    name: "Nguyễn Văn A",

    score: 8.5,

    comment:
        "Em có kết quả học tập tốt. "
        + "Nắm vững kiến thức cơ bản và làm bài khá chính xác. "
        + "Cần tiếp tục phát huy khả năng tư duy và kỹ năng trình bày bài làm."

},


"20233514": {

    name: "Trần Văn B",

    score: 7.25,

    comment:
        "Em đã nắm được phần lớn kiến thức của môn học. "
        + "Cần dành thêm thời gian luyện tập các dạng bài nâng cao."

},


"20233515": {

    name: "Lê Văn C",

    score: 9.0,

    comment:
        "Em có kết quả rất tốt. "
        + "Bài làm chính xác, trình bày rõ ràng và có tư duy tốt."

},


"20233516": {

    name: "Phạm Văn D",

    score: 6.5,

    comment:
        "Em đã hoàn thành các yêu cầu cơ bản. "
        + "Cần ôn tập thêm kiến thức nền tảng và luyện tập thường xuyên hơn."

}
```

};

/* ==========================================
LẤY PHẦN TỬ HTML
========================================== */

const studentIdInput =
document.getElementById("studentId");

const searchButton =
document.getElementById("searchButton");

const errorMessage =
document.getElementById("errorMessage");

const searchSection =
document.getElementById("searchSection");

const resultSection =
document.getElementById("resultSection");

const studentName =
document.getElementById("studentName");

const resultStudentId =
document.getElementById("resultStudentId");

const studentScore =
document.getElementById("studentScore");

const studentRank =
document.getElementById("studentRank");

const teacherComment =
document.getElementById("teacherComment");

const backButton =
document.getElementById("backButton");

/* ==========================================
HÀM XẾP LOẠI
========================================== */

function getRank(score) {

```
if (score >= 9) {

    return "Xuất sắc";

}

else if (score >= 8) {

    return "Giỏi";

}

else if (score >= 6.5) {

    return "Khá";

}

else if (score >= 5) {

    return "Trung bình";

}

else {

    return "Cần cố gắng";

}
```

}

/* ==========================================
TRA CỨU KẾT QUẢ
========================================== */

function searchResult() {

```
/*
   Lấy mã học sinh
   trim() giúp loại bỏ khoảng trắng
*/

const studentId =
    studentIdInput.value.trim();



/*
   Xóa thông báo lỗi cũ
*/

errorMessage.textContent = "";



/*
   Kiểm tra nếu chưa nhập mã
*/

if (studentId === "") {

    errorMessage.textContent =
        "Vui lòng nhập mã số học sinh.";

    return;

}



/*
   Tìm học sinh trong dữ liệu
*/

const student =
    students[studentId];



/*
   Nếu không tìm thấy
*/

if (!student) {

    errorMessage.textContent =
        "Không tìm thấy kết quả của mã học sinh này.";

    return;

}



/*
   Hiển thị dữ liệu
*/

studentName.textContent =
    student.name;


resultStudentId.textContent =
    studentId;


studentScore.textContent =
    student.score;


studentRank.textContent =
    getRank(student.score);


teacherComment.textContent =
    student.comment;



/*
   Ẩn màn hình tìm kiếm
*/

searchSection.classList.add("hidden");



/*
   Hiện màn hình kết quả
*/

resultSection.classList.remove("hidden");



/*
   Cuộn lên đầu màn hình
*/

window.scrollTo({

    top: 0,

    behavior: "smooth"

});
```

}

/* ==========================================
QUAY LẠI TRA CỨU
========================================== */

function goBack() {

```
/*
   Ẩn kết quả
*/

resultSection.classList.add("hidden");



/*
   Hiện màn hình tìm kiếm
*/

searchSection.classList.remove("hidden");



/*
   Xóa mã cũ
*/

studentIdInput.value = "";



/*
   Xóa thông báo lỗi
*/

errorMessage.textContent = "";



/*
   Đặt con trỏ vào ô nhập
*/

setTimeout(() => {

    studentIdInput.focus();

}, 100);
```

}

/* ==========================================
EVENT CLICK
========================================== */

searchButton.addEventListener(

```
"click",

searchResult
```

);

/* ==========================================
NHẤN ENTER ĐỂ TRA CỨU
========================================== */

studentIdInput.addEventListener(

```
"keydown",

function(event) {

    if (event.key === "Enter") {

        searchResult();

    }

}
```

);

/* ==========================================
QUAY LẠI
========================================== */

backButton.addEventListener(

```
"click",

goBack
```

);
