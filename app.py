# pylint: disable=wildcard-import, unused-wildcard-import, wrong-import-position, import-error

"""
Oblivion-Inverse - A Simple E-mail Tracking Solution.

Oblivion-Inverse is a simple e-mail tracking solution built with Flask and Firebase.
It allows you to generate a unique tracking images for your e-mails. It allows you to
track when your e-mails are opened and further information about the device and browser
used to open the e-mail.

@Author: Dilshan-H (GitHub: dilshan-h)
@License: MIT
@URL: https://github.com/Dilshan-H/Oblivion-Inverse
"""

import os

import firebase_admin
from dotenv import load_dotenv
from firebase_admin import auth, credentials
from flask import Flask, flash, redirect, request, session, url_for

load_dotenv()

cred = credentials.Certificate("credentials.json")
firebase_admin.initialize_app(
    cred,
    {"databaseURL": os.environ["FIREBASE_DB_URL"]},
)

app = Flask(__name__, static_url_path="/static", static_folder="static")

app.config["DEBUG"] = False
app.config["SECRET_KEY"] = os.environ["SECRET_KEY"]


@app.before_request
def validate_session():
    """Validate each request with session cookie and firebase auth"""
    # check if user is visiting login page
    if request.path == "/login" or request.path == "/track":
        return None

    # read session cookie
    session_cookie = request.cookies.get("secure-session")
    if not session_cookie:
        # Session cookie is unavailable. Force user to login.
        return redirect(url_for("login"), 303)

    try:
        decoded_claims = auth.verify_session_cookie(session_cookie, check_revoked=True)
        session["uid"] = decoded_claims["uid"]
        return None
    except auth.ExpiredSessionCookieError:
        # Session cookie has been revoked. Force user to login.
        flash("Session expired. Please login again.")
        return redirect(url_for("login"))
    except auth.InvalidSessionCookieError:
        # Session cookie is invalid, expired or revoked. Force user to login.
        flash("Please login to continue...")
        return redirect(url_for("login"), 303)


# import routes after app initialized
from routes import *

if __name__ == "__main__":
    if os.environ["FLASK_ENV"] == "development":
        app.run(debug=True)
    else:
        app.run(debug=False)
