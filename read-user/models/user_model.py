from config.db import db

class User(db.Model):
    """
    Represents a User in the database.

    Attributes:
        id (int): The primary key of the user.
        username (str): The username of the user.
        email (str): The email address of the user.
        password_hash (str): The hashed password of the user.
    """

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        """
        Convert the User instance to a dictionary.

        Returns:
            dict: A dictionary representation of the User instance.
        """
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
