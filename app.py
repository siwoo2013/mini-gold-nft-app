import os
from flask import Flask, render_template, send_from_directory
from blueprints.phone import bp_phone

def create_app():
    app = Flask(__name__, static_folder="static", template_folder="templates")
    app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY", "dev-secret-change-me")

    # Blueprints
    app.register_blueprint(bp_phone)

    @app.route("/")
    def index():
        # Serve the static landing page
        return send_from_directory('.', 'index.html')


    @app.route('/event')
    def event():
        return send_from_directory('.', 'event.html')

    @app.route('/invest')
    def invest():
        return send_from_directory('.', 'invest.html')

    @app.route('/service')
    def service():
        return send_from_directory('.', 'service.html')

    @app.route('/my')
    def my():
        return send_from_directory('.', 'my.html')

    return app

app = create_app()