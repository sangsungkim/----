// 게시물 작성 폼 보이기 함수
function showPostForm() {
    document.getElementById('postForm').style.display = 'block';
}

// 게시물 작성 폼 숨기기 함수
function hidePostForm() {
    document.getElementById('postForm').style.display = 'none';
}

// 공지사항 로드 함수
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

        // 삭제 버튼 추가 (디폴트 공지사항에는 삭제 버튼 추가 안 함)
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

// 공지사항 추가 함수
function addNotice() {
    var text = document.getElementById('postText').value;
    var author = document.getElementById('postAuthor').value || '관리자';
    var notices = JSON.parse(localStorage.getItem('notices')) || [];
    notices.push({ text: text, author: author });
    localStorage.setItem('notices', JSON.stringify(notices));
    hidePostForm();
    loadNotices();
}

// 공지사항 삭제 함수
function removeNotice(index) {
    var notices = JSON.parse(localStorage.getItem('notices'));
    notices.splice(index, 1);
    localStorage.setItem('notices', JSON.stringify(notices));
    loadNotices();
}

// 페이지가 로드될 때 공지사항 로드 함수 실행
window.onload = function() {
    loadNotices();
};
