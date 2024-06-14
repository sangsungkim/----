function showPostForm() {
    document.getElementById('postForm').style.display = 'block';
}

function hidePostForm() {
    document.getElementById('postForm').style.display = 'none';
}

function loadNotices() {
    var defaultNotices = [
        { text: "게시판 관리 사용법", author: "관리자" },
        { text: "두 번째 공지사항", author: "관리자" },
        { text: "세 번째 공지사항", author: "관리자" },
        { text: "네 번째 공지사항", author: "관리자" },
        { text: "다섯 번째 공지사항", author: "관리자" }
    ];
    var notices = JSON.parse(localStorage.getItem('notices')) || defaultNotices;
    if (!localStorage.getItem('notices')) {
        localStorage.setItem('notices', JSON.stringify(notices));
    }
    var noticeList = document.getElementById('noticeList');
    noticeList.innerHTML = '';
    notices.forEach(function(notice, index) {
        var newNotice = document.createElement('li');
        var author = notice.author ? "작성자: " + notice.author : "작성자: 관리자";
        newNotice.textContent = (index + 1) + ". " + notice.text + " " + author;

        if (index >= defaultNotices.length) {
            var deleteButton = document.createElement('button');
            deleteButton.textContent = '삭제';
            deleteButton.onclick = function() {
                removeNotice(index);
            };
            newNotice.appendChild(deleteButton);
        }

        noticeList.appendChild(newNotice);
    });
}

function addNotice() {
    var text = document.getElementById('postText').value;
    var author = document.getElementById('postAuthor').value || '관리자';
    var notices = JSON.parse(localStorage.getItem('notices')) || [];
    notices.push({ text: text, author: author });
    localStorage.setItem('notices', JSON.stringify(notices));
    hidePostForm();
    loadNotices();
}

function removeNotice(index) {
    var notices = JSON.parse(localStorage.getItem('notices'));
    notices.splice(index, 1);
    localStorage.setItem('notices', JSON.stringify(notices));
    loadNotices();
}

window.onload = function() {
    loadNotices();
};
