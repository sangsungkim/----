function goBack() {
    window.history.back(); 
}

window.onload = function() {
    showNoticeDetail();
}

function showNoticeDetail() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var title = urlParams.get('title');
    var author = urlParams.get('author');
    var date = urlParams.get('date');
    var content = urlParams.get('content');

    document.getElementById('noticeTitle').textContent = title; 
    document.getElementById('noticeAuthor').textContent = "작성자: " + author + " | 작성 시간: " + date; 
    document.getElementById('noticeContent').textContent = content; 
}
