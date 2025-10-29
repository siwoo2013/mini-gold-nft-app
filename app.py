import os
from flask import Flask, render_template
from blueprints.phone import bp_phone

def create_app():
    app = Flask(__name__, static_folder="static", template_folder="templates")
    app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY", "dev-secret-change-me")

    # Blueprints
    app.register_blueprint(bp_phone)

    @app.route("/")
    def index():
        return render_template("index.html")

    return app

app = create_app()