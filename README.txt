MINI GOLD NFT — Sticky Header Patch Kit
=======================================

이 키트는 기존 페이지 구조를 유지하면서, 상단(로고/아이콘 + NFT 요약)을
모든 페이지에서 '고정 헤더'로 만드는 최소 변경 패치입니다.

구성
----
/common/header.html      ← 공통 헤더 조각 (로고 클릭 시 /index.html 이동)
/css/sticky-header.css   ← 고정 헤더 & 본문 여백 스타일
/js/sticky-header.js     ← 각 페이지에서 header.html을 주입하는 스크립트
/sample/…                ← 동작 예시용 페이지(참고용). 실제 배포엔 필요 없음.

적용 방법 (기존 파일 최대한 보존)
------------------------------
1) 이 폴더 3개를 프로젝트 루트에 추가 복사합니다.
   - /common
   - /css (안에 sticky-header.css가 들어갑니다)
   - /js  (안에 sticky-header.js가 들어갑니다)

2) 모든 페이지( index.html, /event/index.html, /invest/index.html, /service/index.html 등 )
   의 <head>에 아래 두 줄을 추가합니다.
   (이미 main.css 같은 전역 CSS가 있다면 그 아래 쪽에 붙여도 됨)
   
   <link rel="stylesheet" href="/css/sticky-header.css" />

3) 각 페이지의 <body> 바로 안쪽 최상단에 아래 2줄을 추가합니다.
   (data-levels-up은 폴더 깊이에 따라 설정)
   
   루트 페이지:    <div id="app-header"></div>
                   <script src="/js/sticky-header.js" data-levels-up="0"></script>
   
   서브 페이지:    <div id="app-header"></div>
                   <script src="/js/sticky-header.js" data-levels-up="1"></script>

4) 기존 상단 블록(로고/아이콘 + NFT 요약 카드)은 삭제하지 마세요.
   - sticky-header.js가 /common/header.html을 주입하여 새 상단을 표시합니다.
   - 기존 상단 블록은 주석 처리하거나 필요 시 보관해두세요.

5) 헤더 높이와 본문 여백이 살짝 안 맞으면 /css/sticky-header.css 안의
   .body-spacer { padding-top: ... } 값을 조정하세요. (160~220px 권장)

참고: /sample/ 폴더는 동작 예시입니다. 배포에는 포함하지 않아도 됩니다.
