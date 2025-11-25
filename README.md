# 📚 TFI Retro Library

Team Tech for Impact의 회고 아카이브 도서관

## 소개

테크포임팩트 팀이 2024년 11월부터 진행한 11번의 회고를 책장 라이브러리 형태로 구현한 웹사이트입니다.

### 주요 기능

- 📖 **책장 인터페이스**: 연도별로 정리된 회고들을 책장에서 꺼내보는 듯한 경험
- 🔍 **검색 기능**: 회고 제목, 날짜, 방법론으로 빠르게 찾기
- 🎲 **랜덤 뽑기**: 무작위로 회고 하나를 추천
- 📖 **매뉴얼 서랍**: 8가지 회고 방법론 가이드
- 🐰 **포포의 노트**: AI 팀원이 관찰한 팀 문화 형성 과정

## 기술 스택

- HTML5
- CSS3 (Modern Vintage Library 스타일)
- Vanilla JavaScript
- Google Fonts (Merriweather)

## 프로젝트 구조

```
tfi-retro-library/
├── index.html              # 메인 페이지 (책장 라이브러리)
├── popo.html               # 포포와 아카이브 소개
├── manuals.html            # 매뉴얼 목록
├── manual-detail.html      # 매뉴얼 상세
├── css/
│   ├── style.css          # 메인 스타일
│   └── popo.css           # 포포 페이지 스타일
├── js/
│   └── main.js            # 메인 JavaScript
├── retros/                # 회고 슬라이드
├── retro-pages/           # 회고 상세 페이지
└── method/                # 매뉴얼 마크다운 파일들
```

## 디자인 철학

**Modern Vintage Library** - 미니멀리즘의 깔끔함과 빈티지 도서관의 따뜻함을 결합

- 컬러: 차분한 보라(#6441a5) + 크림 아이보리 배경(#fcf7f0)
- 타이포그래피: Merriweather (제목) + system-ui (본문)
- 최소한의 애니메이션, 최대한의 가독성

## 로컬 실행

```bash
# 저장소 클론
git clone https://github.com/YOUR_USERNAME/tfi-retro-library.git

# 폴더로 이동
cd tfi-retro-library

# 브라우저에서 index.html 열기
open index.html  # macOS
# 또는 start index.html  # Windows
```

## 회고 목록

### 2024
1. 타임라인 회고 (2024.11)
2. 4L 회고 (2024.12)

### 2025
3. KPT+ 회고 (2025.01)
4. 히어로즈 저니 회고 (2025.02)
5. 임팩트 여정맵 회고 (2025.03)
6. 마무리와 시작 (2025.05)
7. 4L 회고: 두 번째 에디션 (2025.06)
8. 사업별 회고 (2025.07-09)
9. 따로 또 같이 (2025.09)
10. ⭐ 서로 돌아보기 (2025.10)

## 매뉴얼

8가지 회고 방법론 가이드 제공:
- 4L 회고
- KPT+ 회고
- 따로 또 같이
- 사업별 회고
- 임팩트 여정맵
- 타임라인 회고
- 마무리와 시작
- 히어로즈 저니

## 기여

팀 내부 프로젝트이지만, 회고 방법론에 대한 피드백은 언제나 환영합니다!

## 라이선스

© 2025 Kakao Impact - Team Tech for Impact

## 연락처

- Email: taylor.7@kakaoimpact.org
- 큐레이팅: 포포 (AI)
- 편집: 테일러
