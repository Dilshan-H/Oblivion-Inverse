from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, PasswordField
from wtforms.validators import DataRequired


class GenerateTrackingLink(FlaskForm):
    email_title = StringField("Title", validators=[DataRequired()])
    submit = SubmitField("GENERATE")


class LoginForm(FlaskForm):
    username = StringField("Username", validators=[DataRequired()])
    password = PasswordField("Password", validators=[DataRequired()])
    login = SubmitField("LOGIN")
