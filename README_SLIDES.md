
# 슬라이드 배너 — 이미지 폴더 + 링크 지정 방식

## 1) 폴더 만들기
프로젝트 루트에 `slide` 폴더를 만들고 이미지 파일을 넣으세요.
예시: `slide/slide1.jpg`, `slide/slide2.jpg`, `slide/slide3.jpg`, ...

## 2) 링크/이미지 지정
`index.html` 안쪽 스크립트의 `SLIDES` 배열만 수정하면 됩니다.
```js
const SLIDES = [
  { src: 'slide/slide1.jpg', href: '/event',  alt: '이벤트' },
  { src: 'slide/slide2.jpg', href: '/invest', alt: '투자'  },
  // 외부 URL도 가능
  { src: 'slide/slide3.jpg', href: 'https://example.com', alt: '외부' }
];
```

## 3) 적용
- ZIP을 풀고 `index.html`을 프로젝트 루트에 덮어쓰기 → git add/commit/push
- `slide` 폴더도 저장소에 포함해서 같이 푸시하세요.
  ```powershell
  mkdir slide
  # 이미지 넣기
  git add index.html slide/*
  git commit -m "슬라이드 이미지/링크 적용"
  git push origin main
  ```
