
# MINI GOLD — Static Site 모바일 프레임 패치 (index.html 교체)

Render 서비스가 'Static Site'로 보입니다. Flask 템플릿(base.html)은 사용되지 않으므로
**루트 index.html**에 모바일 폭 고정 스타일을 직접 적용해야 합니다.

## 설치 방법 (윈도우)
1) 이 ZIP을 풀고, `index.html` 파일을 프로젝트 루트(`C:\mini-gold-nft-app\index.html`)에 덮어쓰기 합니다.
2) git add/commit/push 후 Render가 재배포되면, PC 브라우저에서도 폰처럼(최대 430px) 중앙 정렬됩니다.

## 주의
- 기존 index.html의 본문을 `<div class="app">...</div>` 안쪽으로 옮겼습니다.
- CSS 충돌을 피하기 위해 클래스명을 단순하게 했습니다. 필요 시 값은 자유롭게 조정하세요.
