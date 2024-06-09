// notice-detail.js

// 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동하는 함수
function goBack() {
    window.history.back(); // 브라우저의 이전 페이지로 이동
}

// 페이지가 로드될 때 실행되는 함수
window.onload = function() {
    showNoticeDetail();
}

// 공지사항 제목과 내용을 표시하는 함수
function showNoticeDetail() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var title = urlParams.get('title');
    var author = urlParams.get('author');
    var date = urlParams.get('date');
    var content = urlParams.get('content');

    document.getElementById('noticeTitle').textContent = title; // 제목 설정
    document.getElementById('noticeAuthor').textContent = "작성자: " + author + " | 작성 시간: " + date; // 작성자와 작성 시간 설정
    document.getElementById('noticeContent').textContent = content; // 내용 설정
}
