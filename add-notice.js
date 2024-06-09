// add-notice.js
// 공지사항을 로컬 스토리지에 저장하는 함수
function saveNotice() {
    var titleInput = document.getElementById('titleInput');
    var noticeInput = document.getElementById('noticeInput');
    var authorInput = document.getElementById('authorInput');
    var titleText = titleInput.value.trim(); // 제목 입력값 가져오기
    var noticeText = noticeInput.value.trim(); // 내용 입력값 가져오기
    var authorText = authorInput.value.trim();

    if (titleText && noticeText && authorText) { // 모든 입력 필드가 비어있지 않을 때
        var notices = JSON.parse(localStorage.getItem('notices')) || [];
        notices.push({ title: titleText, content: noticeText, author: authorText });
        localStorage.setItem('notices', JSON.stringify(notices));
        location.href = 'index.html';
    } else {
        alert('공지사항 제목, 내용, 작성자 이름을 모두 입력하세요.');
    }
}


// 취소 버튼을 누르면 메인 페이지로 돌아가는 함수
function cancel() {
    location.href = 'index.html';
}
