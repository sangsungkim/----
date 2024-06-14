function saveNotice() {
    var titleInput = document.getElementById('titleInput');
    var noticeInput = document.getElementById('noticeInput');
    var authorInput = document.getElementById('authorInput');
    var titleText = titleInput.value.trim(); 
    var noticeText = noticeInput.value.trim();
    var authorText = authorInput.value.trim();

    if (titleText && noticeText && authorText) { 
        var notices = JSON.parse(localStorage.getItem('notices')) || [];
        notices.push({ title: titleText, content: noticeText, author: authorText });
        localStorage.setItem('notices', JSON.stringify(notices));
        location.href = 'index.html';
    } else {
        alert('공지사항 제목, 내용, 작성자 이름을 모두 입력하세요.');
    }
}


function cancel() {
    location.href = 'index.html';
}
