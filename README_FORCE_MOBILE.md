
# Static Site — 데스크톱에서도 '모바일 전용 UI' 보이게 패치

## 무엇이 달라지나
- 데스크톱에서 `viewport`를 430px로 강제 설정하여, 반응형 '모바일 레이아웃'이 그대로 적용됩니다.
- `.mobile-only`는 PC에서도 `display:block`이 되도록 CSS를 추가했습니다.
- `.desktop-only`는 PC에서 숨김 처리됩니다.

## 설치 방법
1) 이 ZIP을 풀고 `index.html`을 프로젝트 루트에 덮어쓰기 합니다.
   - 예: `C:\mini-gold-nft-app\index.html`
2) git add/commit/push 후 Render 재배포.

## 사용 팁
- 폰 전용으로 숨겨두었던 요소에 `class="mobile-only"`를 달아두면 데스크톱에서도 보입니다.
- 반대로 데스크톱만 보이게 하려면 `class="desktop-only"`를 사용하세요.
