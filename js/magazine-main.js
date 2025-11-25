// 방문자 카운터 기능
function initVisitorCounter() {
    // localStorage에서 현재 방문자 수 가져오기
    let visitorCount = localStorage.getItem('tfi-archive-visitors');

    if (visitorCount === null) {
        // 처음 방문자라면 1337부터 시작 (기존 고정값 유지)
        visitorCount = 1337;
    } else {
        // 기존 방문자 수에 1 추가
        visitorCount = parseInt(visitorCount) + 1;
    }

    // localStorage에 새로운 방문자 수 저장
    localStorage.setItem('tfi-archive-visitors', visitorCount);

    // 6자리 포맷으로 표시 (앞에 0 채우기)
    const formattedCount = visitorCount.toString().padStart(6, '0');
    const counterElement = document.getElementById('visitor-count');
    if (counterElement) {
        counterElement.textContent = formattedCount;
    }
}

// 언어 관리 시스템
let currentLanguage = 'ko'; // 기본값을 한글로 설정

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ko' ? 'en' : 'ko';
    updateLanguageDisplay();
    localStorage.setItem('preferred-language', currentLanguage);
}

function updateLanguageDisplay() {
    const elements = document.querySelectorAll('[data-ko][data-en]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        if (text) {
            element.innerHTML = text;
        }
    });

    // 토글 버튼 텍스트 업데이트
    const toggleButton = document.getElementById('lang-toggle-text');
    if (toggleButton) {
        toggleButton.textContent = currentLanguage === 'ko' ? 'EN' : '한국어';
    }

    // body에 언어 속성 설정 (폰트 적용을 위해)
    document.body.setAttribute('data-lang', currentLanguage);
    document.documentElement.setAttribute('lang', currentLanguage);
}

function initLanguage() {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && (savedLanguage === 'ko' || savedLanguage === 'en')) {
        currentLanguage = savedLanguage;
    }
    updateLanguageDisplay();
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    initVisitorCounter();
    initLanguage();
});