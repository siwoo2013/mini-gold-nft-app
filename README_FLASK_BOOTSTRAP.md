# MINI GOLD — Flask 부트스트랩 + 전화번호 입력(모의 인증)

## 폴더에 `app.py`가 없다면?
이 ZIP을 프로젝트 루트에 풀면 `app.py` 포함한 최소 Flask 구성이 만들어집니다.
Render로 배포하려면:
- Build Command: `pip install -r requirements.txt`
- Start Command: `gunicorn app:app`
- Environment -> `SECRET_KEY` 설정 권장

## 포함 파일
- `app.py` — Flask 진입 파일
- `blueprints/phone.py` — 전화번호 입력/검증(모의 인증)
- `templates/base.html`, `templates/index.html`, `templates/phone_form.html`, `templates/phone_verify.html`
- `migrations/001_create_users.sql` — (선택) DB 테이블 생성용
- `requirements.txt`, `Procfile`

## 로컬 실행
```bash
pip install -r requirements.txt
set FLASK_APP=app.py  # (Windows, PowerShell은 $env:FLASK_APP='app.py')
flask run  # http://127.0.0.1:5000
```

## 경로
- 홈: `/`
- 전화번호: `/phone` → `/phone/verify`

## 주의
- 현재는 **모의 인증**입니다. 실제 SMS 연동은 `blueprints/phone.py`에 API 호출 추가가 필요합니다.