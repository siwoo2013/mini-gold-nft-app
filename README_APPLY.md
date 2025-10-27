# MINI GOLD — Phone Input & Mock Verification Patch (v1)

## 파일 구성(추가)

- `blueprints/phone.py`
- `templates/phone_form.html`
- `templates/phone_verify.html`
- `migrations/001_create_users.sql`

- `models/db.py` (SQLite 헬퍼 / 기존 DB가 없을 때만 사용)


## 적용 방법
1. 위 폴더/파일들을 **프로젝트 루트**에 그대로 복사/덮어쓰기 합니다.

2. Flask 진입파일(예: `app.py`)에 아래 2줄을 추가합니다:

```python
from blueprints.phone import bp_phone
app.register_blueprint(bp_phone)
```

   - 만약 `app = Flask(__name__)` 선언 이전에는 import만 하고, 앱 생성 이후에 register를 호출하세요.

3. 세션 사용을 위해 `SECRET_KEY` 환경변수 또는 `app.secret_key`가 설정되어 있어야 합니다.

4. DB 사용 시:
   - SQLite를 쓸 경우 `models/db.py`의 `DATABASE` 경로를 원하는 파일명으로 바꾸세요(기본 `app.db`).
   - 앱 시작 전에 `migrations/001_create_users.sql`을 실행해 `users` 테이블을 생성하세요.
   - 기존 DB 레이어가 있다면 `blueprints/phone.py`의 DB 저장 부분을 해당 레이어로 교체하세요.

5. 실행 경로
   - 전화번호 입력: `/phone`
   - 인증코드 확인: `/phone/verify`


## 주의 사항
- 현재는 **모의 인증**입니다. 실제 SMS를 붙일 때는 `blueprints/phone.py`의 `# TODO: send_sms(...)` 부분에 API 호출을 넣으세요.
- 한국 번호는 `010-XXXX-XXXX` → `+8210XXXXXXXX` 형식으로 정규화됩니다.
- 개인정보 처리방침/동의 UI는 실제 운영 전에 반드시 추가하세요.
