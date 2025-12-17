# 📚 TFI Retrospective Archive

Team Tech for Impact의 회고 아카이브 라이브러리

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://theorakim.github.io/tfi-retro-library/)

## 소개

테크포임팩트 팀이 2024년 11월부터 2025년 12월까지 진행한 회고들을 정리한 웹 아카이브입니다. 팀의 성장 과정과 다양한 회고 방법론을 한눈에 볼 수 있습니다.

### 주요 기능

- 🗂️ **연도별 아카이브**: 2024-2025년 회고들을 연도별로 정리
- 🔍 **검색 기능**: 회고 제목, 날짜, 방법론으로 빠르게 찾기
- 🎲 **랜덤 선택**: 무작위로 회고 하나를 추천받기
- 📖 **방법론 매뉴얼**: 8가지 회고 방법론 상세 가이드
- 🐰 **포포 소개**: AI 팀원이 관찰한 팀 문화와 회고 여정

## 기술 스택

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Design System**: Modern Archive - 타이포그래피 중심의 깔끔한 아카이브 디자인
- **Markdown Rendering**: Marked.js
- **Fonts**: System fonts (최적화된 성능)

## 프로젝트 구조

```
tfi-retro-library/
├── index.html              # 메인 페이지 (아카이브)
├── popo.html               # 포포와 팀 소개
├── manuals.html            # 회고 매뉴얼 목록
├── manual-detail.html      # 매뉴얼 상세 페이지
├── css/
│   └── modern-archive.css  # 통합 디자인 시스템
├── js/
│   └── main.js             # 메인 JavaScript 로직
├── retros/                 # 회고 결과물 (HTML 슬라이드)
├── retro-pages/            # 개별 회고 상세 페이지
└── method/                 # 회고 방법론 매뉴얼 (Markdown)
    ├── 4l-retrospective.md
    ├── kpt-plus-retrospective.md
    ├── together-apart.md
    ├── business-retrospective.md
    ├── impact-journey-map.md
    ├── timeline-retrospective.md
    ├── endings-and-beginnings.md
    └── heros-journey.md
```

## 디자인 철학

**Modern Archive Design System**

- **타이포그래피 우선**: 깔끔한 시스템 폰트로 가독성 극대화
- **다크 모드**: 눈이 편안한 다크 베이스 (#0A0A0A)
- **액센트 컬러**: 따뜻한 옐로우 (#fede00)로 포인트
- **카드 기반 레이아웃**: 모던하고 정돈된 그리드 시스템
- **반응형 디자인**: 모바일부터 데스크톱까지 최적화

### 디자인 토큰

```css
Primary Background: #0A0A0A
Surface: #111111
Accent: #fede00
Text Primary: #fffef7
Text Secondary: #9ca3af
```

## 로컬 실행

```bash
# 저장소 클론
git clone https://github.com/theorakim/tfi-retro-library.git

# 폴더로 이동
cd tfi-retro-library

# 간단한 로컬 서버 실행 (방법 1)
python -m http.server 8000

# 또는 브라우저에서 직접 열기 (방법 2)
open index.html  # macOS
start index.html  # Windows
```

브라우저에서 `http://localhost:8000` 접속

## 회고 목록

### 2024년 (2회)
1. **타임라인 회고** (2024.11) - 시간 순서 기반 회고 · 3명 참석
2. **4L 회고** (2024.12) - 첫 구조화된 접근 · 3명 참석

### 2025년 (9회)
3. **KPT+ 회고** (2025.01) - 감사와 지속, 도전과 배움, 함께 성장 · 4명 참석
4. **히어로즈 저니** (2025.02) - 스토리텔링 기반 회고 · 4명 참석
5. **임팩트 여정맵** (2025.03) - 시각적 여정 중심 회고 · 3명 참석
6. **마무리와 시작** (2025.05) - 전환점 중심 회고 · 3명 참석
7. **4L 회고: 2nd Edition** (2025.06) - 좋았던 것, 배운 것, 부족한 것, 바라는 것 · 5명 참석
8. **사업별 회고** (2025.07, 09) - 2회 진행 (워크샵 포함) · 5명 참석
9. **따로 또 같이** (2025.09) - 팀 맞춤 회고 · 5명 참석
10. **서로 돌아보기** (2025.10) - 상호 피드백 회고 · 5명 참석
11. **연말 회고** (2025.12) - 한 해를 마무리하며 · 5명 참석

**총 11회의 회고 | 3명 → 5명으로 팀 성장**

## 회고 방법론 매뉴얼

8가지 검증된 회고 방법론 가이드 제공:

1. **4L 회고** - Liked, Learned, Lacked, Longed for
2. **KPT+ 회고** - Keep, Problem, Try + 확장
3. **따로 또 같이** - 개인과 팀의 균형
4. **사업별 회고** - 프로젝트/사업 단위 리뷰
5. **임팩트 여정맵** - 시각적 임팩트 추적
6. **타임라인 회고** - 시간 순서 기반 회고
7. **마무리와 시작** - 전환점 인식과 다음 단계
8. **히어로즈 저니** - 스토리텔링 기반 회고

각 매뉴얼은 목적, 진행 방법, 소요 시간, 준비물 등을 상세히 안내합니다.

## 특징

### 🎯 팀 성장의 기록
- 2024년 11월: 3명으로 시작
- 2025년 12월: 5명으로 성장
- 11회의 다양한 회고 방법론 실험

### 📈 다양한 회고 방식
- 구조화된 프레임워크 (4L, KPT+)
- 창의적 접근 (히어로즈 저니, 임팩트 여정맵)
- 관계 중심 (서로 돌아보기, 따로 또 같이)
- 시간 기반 (타임라인, 마무리와 시작)

### 🤖 AI 팀원 포포
- 회고 진행 보조
- 팀 문화 관찰 및 기록
- 아카이브 큐레이팅

## 배포

GitHub Pages를 통해 자동 배포됩니다.

```bash
# main 브랜치에 푸시하면 자동 배포
git push origin main
```

## 기여

팀 내부 프로젝트이지만, 회고 방법론에 대한 피드백은 언제나 환영합니다!

### 새로운 회고 추가하기

1. `retros/` 폴더에 회고 결과물 HTML 추가
2. `retro-pages/` 폴더에 상세 페이지 추가
3. `js/main.js`의 `books` 객체에 새 회고 정보 추가
4. `index.html`에 새 아카이브 아이템 추가

## 라이선스

© 2024-2025 Kakao Impact - Team Tech for Impact

## 제작

- **큐레이팅**: 포포 (AI 팀원)
- **편집 및 디자인**: 테일러
- **팀**: Team Tech for Impact

## 연락처

- **Email**: taylor.7@kakaoimpact.org
- **Repository**: [github.com/theorakim/tfi-retro-library](https://github.com/theorakim/tfi-retro-library)
