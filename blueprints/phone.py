from flask import Blueprint, render_template, request, redirect, url_for, flash, session
from datetime import datetime
import re, random

bp_phone = Blueprint("phone", __name__)

def normalize_kr_phone(raw: str) -> str:
    digits = re.sub(r"\D", "", raw or "")
    if not digits:
        return ""
    if digits.startswith("82"):
        return "+" + digits
    if digits.startswith("0"):
        return "+82" + digits[1:]
    if not digits.startswith("+"):
        return "+" + digits
    return digits

def is_valid_kr_phone(n: str) -> bool:
    return bool(re.fullmatch(r"\+8210\d{8}", n))

@bp_phone.get("/phone")
def phone_form():
    return render_template("phone_form.html")

@bp_phone.post("/phone")
def phone_submit():
    raw = request.form.get("phone", "")
    phone = normalize_kr_phone(raw)
    if not is_valid_kr_phone(phone):
        flash("전화번호 형식이 올바르지 않습니다. 예) 010-1234-5678", "error")
        return redirect(url_for("phone.phone_form"))

    code = f"{random.randint(0, 999999):06d}"
    session["phone_pending"] = phone
    session["phone_code"] = code
    session["phone_code_at"] = datetime.utcnow().isoformat()

    flash("인증코드를 전송했습니다. (테스트 모드: 화면에서 코드 입력만 하세요)", "info")
    return redirect(url_for("phone.phone_verify_form"))

@bp_phone.get("/phone/verify")
def phone_verify_form():
    phone = session.get("phone_pending")
    return render_template("phone_verify.html", phone=phone)

@bp_phone.post("/phone/verify")
def phone_verify_submit():
    input_code = (request.form.get("code", "") or "").strip()
    real_code = session.get("phone_code")
    phone = session.get("phone_pending")

    if not (phone and real_code):
        flash("세션이 만료되었습니다. 처음부터 다시 시도해주세요.", "error")
        return redirect(url_for("phone.phone_form"))

    if input_code != real_code:
        flash("인증코드가 일치하지 않습니다.", "error")
        return redirect(url_for("phone.phone_verify_form"))

    # In real app, persist to DB here
    session.pop("phone_code", None)
    session.pop("phone_code_at", None)
    session["phone"] = phone
    session["phone_verified"] = True

    flash("전화번호 인증이 완료되었습니다.", "success")
    return redirect(url_for("index"))