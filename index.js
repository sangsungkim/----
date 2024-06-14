function changeImage() {
    var images = ["media/potato1.jpg", "media/potato2.jpg", "media/potato3.jpg"];
    var currentIndex = 0;
    var imageElement = document.getElementById("potatoImage");

    setInterval(function () {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }, 3000); 
}

window.onload = function () {
    changeImage();
    loadNotices();
};

function loadNotices() {
    var defaultNotices = [
        { title: "게시판 관리 사용법", content: "공지사항 내용입니다.", author: "관리자" },
        { title: "게시판 이용 법", content: "공지사항 내용입니다.", author: "관리자" }
    ];

    var notices = JSON.parse(localStorage.getItem('notices'));
    if (!notices) {
        notices = defaultNotices;
        localStorage.setItem('notices', JSON.stringify(notices)); 
    }

    var noticeList = document.getElementById('noticeList');
    noticeList.innerHTML = '';

    notices.forEach(function (notice, index) {
        var newNotice = document.createElement('li');
        newNotice.style.textAlign = "left";

        var titleElement = document.createElement('span');
        titleElement.textContent = notice.title + " - ";
        newNotice.appendChild(titleElement);

        var authorElement = document.createElement('span');
        authorElement.textContent = "작성자: " + notice.author + " | ";
        newNotice.appendChild(authorElement);

        var deleteButton = document.createElement('button');
        deleteButton.textContent = "삭제";
        deleteButton.onclick = function () {
            deleteNotice(index); 
        };
        newNotice.appendChild(deleteButton); 

        newNotice.style.cursor = "pointer";
        newNotice.onclick = function () {
            showNoticeDetail(notice.title, notice.author, notice.date, notice.content); 
        };
        noticeList.appendChild(newNotice);
    });
}

function deleteNotice(index) {
    var notices = JSON.parse(localStorage.getItem('notices'));
    notices.splice(index, 1); 
    localStorage.setItem('notices', JSON.stringify(notices)); 
    loadNotices(); 

    document.getElementById('noticeDetail').style.display = 'none';
}

function showNoticeDetail(title, author, date, content) {
    window.location.href = 'notice-detail.html?title=' + encodeURIComponent(title) + '&author=' + encodeURIComponent(author) + '&date=' + encodeURIComponent(date) + '&content=' + encodeURIComponent(content);
}

function goBack() {
    window.history.back();
}
