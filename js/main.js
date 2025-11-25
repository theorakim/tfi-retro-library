// 책 데이터
const books = {
    1: {
        title: '타임라인 회고',
        date: '2024년 11월',
        participants: '3명 참석',
        method: '시간 순서 기반 회고',
        link: 'retro-pages/timeline.html'
    },
    2: {
        title: '4L 회고',
        date: '2024년 12월',
        participants: '3명 참석',
        method: '첫 구조화된 접근',
        link: 'retro-pages/4l.html'
    },
    3: {
        title: 'KPT+ 회고',
        date: '2025년 1월',
        participants: '4명 참석',
        method: '감사와 지속, 도전과 배움, 함께 성장',
        link: 'retro-pages/kpt.html'
    },
    4: {
        title: '히어로즈 저니 회고',
        date: '2025년 2월',
        participants: '4명 참석',
        method: '스토리텔링 기반 회고',
        link: 'retro-pages/hero.html'
    },
    5: {
        title: '임팩트 여정맵 회고',
        date: '2025년 3월',
        participants: '3명 참석',
        method: '시각적 여정 중심 회고',
        link: 'retro-pages/journey.html'
    },
    6: {
        title: '마무리와 시작',
        date: '2025년 5월',
        participants: '3명 참석',
        method: '전환점 중심 회고',
        link: 'retro-pages/closing.html'
    },
    7: {
        title: '4L 회고: 두 번째 에디션',
        date: '2025년 6월',
        participants: '5명 참석',
        method: '좋았던 것, 배운 것, 부족한 것, 바라는 것',
        link: 'retro-pages/4l.html'
    },
    8: {
        title: '사업별 회고',
        date: '2025년 7월, 9월',
        participants: '5명 참석',
        method: '2회 진행(워크샵 포함)',
        link: 'retro-pages/business.html'
    },
    9: {
        title: '따로 또 같이',
        date: '2025년 9월',
        participants: '5명 참석',
        method: '팀 맞춤 회고',
        link: 'retro-pages/together.html'
    },
    10: {
        title: '⭐ 서로 돌아보기',
        date: '2025년 10월',
        participants: '5명 참석',
        method: '상호 피드백 회고',
        link: 'retros/2025oct.html'
    }
};

let currentBookId = null;

// 책 선택
function selectBook(element) {
    const bookId = element.getAttribute('data-id');
    currentBookId = bookId;

    const book = books[bookId];
    if (!book) return;

    // 모달 내용 업데이트
    document.getElementById('coverTitle').textContent = book.title;
    document.getElementById('coverDate').textContent = book.date;
    document.getElementById('coverParticipants').textContent = book.participants;
    document.getElementById('coverMethod').textContent = book.method;

    // 모달 열기
    document.getElementById('bookModal').classList.add('active');
}

// 모달 닫기
function closeModal() {
    document.getElementById('bookModal').classList.remove('active');
    currentBookId = null;
}

// 책 펼쳐보기
function openBook() {
    if (currentBookId && books[currentBookId]) {
        window.location.href = books[currentBookId].link;
    }
}

// 서랍 토글
function toggleDrawer() {
    const drawer = document.getElementById('drawerContent');
    drawer.classList.toggle('open');
}

// 랜덤 뽑기
function randomBook() {
    const bookIds = Object.keys(books);
    const randomId = bookIds[Math.floor(Math.random() * bookIds.length)];
    const bookElement = document.querySelector(`[data-id="${randomId}"]`);

    if (bookElement) {
        // 책으로 스크롤
        bookElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // 살짝 강조
        bookElement.style.transform = 'translateY(-8px) scale(1.05)';
        setTimeout(() => {
            bookElement.style.transform = '';
        }, 1000);

        // 1초 후 모달 열기
        setTimeout(() => {
            selectBook(bookElement);
        }, 500);
    }
}

// 검색
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const allBooks = document.querySelectorAll('.book');

        allBooks.forEach(book => {
            const bookId = book.getAttribute('data-id');
            const bookData = books[bookId];

            if (!bookData) return;

            const searchText = `${bookData.title} ${bookData.date} ${bookData.method}`.toLowerCase();

            if (searchText.includes(query)) {
                book.style.display = 'block';
                book.style.opacity = '1';
            } else {
                book.style.opacity = '0.2';
            }
        });

        // 검색어가 비어있으면 모두 복원
        if (query === '') {
            allBooks.forEach(book => {
                book.style.display = 'block';
                book.style.opacity = '1';
            });
        }
    });
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
