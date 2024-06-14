// JavaScript로 이미지를 변경하는 함수
function changeImage() {
    var images = ["media/potato1.jpg", "media/potato2.jpg", "media/potato3.jpg"];
    var currentIndex = 0;
    var imageElement = document.getElementById("potatoImage");

    setInterval(function () {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }, 3000); // 3초마다 이미지 변경
}

// 페이지가 로드될 때 실행되는 함수
window.onload = function () {
    changeImage();
    loadNotices();
};

// 공지사항을 로드하고 삭제 버튼을 추가하는 함수
function loadNotices() {
    var defaultNotices = [
        { title: "게시판 관리 사용법", content: "공지사항 내용입니다.", author: "관리자" },
        { title: "게시판 이용 법", content: "공지사항 내용입니다.", author: "관리자" }
    ];

    var notices = JSON.parse(localStorage.getItem('notices'));
    if (!notices) {
        notices = defaultNotices;
        localStorage.setItem('notices', JSON.stringify(notices)); // 기본 공지사항을 로컬 스토리지에 저장
    }

    var noticeList = document.getElementById('noticeList');
    noticeList.innerHTML = '';

    notices.forEach(function (notice, index) {
        var newNotice = document.createElement('li');
        newNotice.style.textAlign = "left"; // 왼쪽 정렬 설정

        var titleElement = document.createElement('span');
        titleElement.textContent = notice.title + " - "; // 제목 표시
        newNotice.appendChild(titleElement);

        var authorElement = document.createElement('span');
        authorElement.textContent = "작성자: " + notice.author + " | "; // 작성자 표시
        newNotice.appendChild(authorElement);

        var deleteButton = document.createElement('button');
        deleteButton.textContent = "삭제";
        deleteButton.onclick = function () {
            deleteNotice(index); // 삭제 버튼 클릭 시 해당 공지사항 삭제
        };
        newNotice.appendChild(deleteButton); // 삭제 버튼 추가

        newNotice.style.cursor = "pointer"; // 마우스 커서를 포인터로 변경하여 클릭 가능함을 나타냄
        newNotice.onclick = function () {
            showNoticeDetail(notice.title, notice.author, notice.date, notice.content); // 공지사항을 클릭하면 해당 내용을 보여주는 함수 호출
        };
        noticeList.appendChild(newNotice); // 공지사항 요소를 공지사항 목록에 추가
    });
}

// 공지사항 삭제 함수
function deleteNotice(index) {
    var notices = JSON.parse(localStorage.getItem('notices'));
    notices.splice(index, 1); // 해당 인덱스의 공지사항 삭제
    localStorage.setItem('notices', JSON.stringify(notices)); // 변경된 공지사항 목록을 로컬 스토리지에 저장
    loadNotices(); // 삭제 후 공지사항 목록을 다시 로드하여 화면에 반영

    // 공지사항 상세 내용 부분 숨기기
    document.getElementById('noticeDetail').style.display = 'none';
}


// 공지사항 클릭 시 해당 공지사항의 내용을 보여주는 함수
function showNoticeDetail(title, author, date, content) {
    // URL에 매개변수로 정보를 전달하여 notice-detail.html로 이동
    window.location.href = 'notice-detail.html?title=' + encodeURIComponent(title) + '&author=' + encodeURIComponent(author) + '&date=' + encodeURIComponent(date) + '&content=' + encodeURIComponent(content);
}

// 뒤로가기 함수
function goBack() {
    window.history.back();
}
