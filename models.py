from app import db
from flask_login import UserMixin


class TrackData(db.Model):
    __tablename__ = "track_data"
    utmId = db.Column(db.String(40), primary_key=True)
    emailTitle = db.Column(db.String(100), nullable=False)
    generatedDate = db.Column(db.String(100), nullable=False)
    hits = db.relationship("LinkHits")

    def __repr__(self):
        return f"{self.utmId} created on {self.generatedDate}"


class LinkHits(db.Model):
    __tablename__ = "link_hits"
    id = db.Column(db.Integer, primary_key=True)
    ipData = db.Column(db.String(500), nullable=True)
    browserData = db.Column(db.String(200), nullable=True)
    timestamp = db.Column(db.String(100), nullable=True)
    utmId = db.Column(db.String(40), db.ForeignKey("track_data.utmId"))

    def __repr__(self):
        return f"{self.ipData} accessed on {self.timestamp}"


class Users(UserMixin, db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
