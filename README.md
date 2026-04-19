# Portfolio — Vite + React

[포트폴리오 사이트](https://hwara-dev.kr)

## 아키텍처

CloudFlare -> AWS S3 정적 웹사이트 호스팅

## 환경 구성

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev

# 3. 빌드 (배포용)
npm run build
```

## 프로젝트 구조

```
src/
├── main.jsx              # 앱 진입점
├── App.jsx               # 루트 컴포넌트 (페이지 라우팅)
├── data/
│   └── index.js  
├── styles/
│   └── global.css        # 디자인 토큰 + 기본 스타일
└── components/
    ├── Nav.jsx / Nav.css
    ├── Logo.jsx
    ├── ThemeToggle.jsx
    ├── Footer.jsx / Footer.css
    ├── ProjectCard.jsx / ProjectCard.css
    ├── HomePage.jsx / HomePage.css
    ├── AboutPage.jsx / AboutPage.css
    └── ProjectsPage.jsx / ProjectsPage.css
```
