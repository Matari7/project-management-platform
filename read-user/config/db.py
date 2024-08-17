from flask_sqlalchemy import SQLAlchemy
import os

# Create an instance of SQLAlchemy
db = SQLAlchemy()

def init_db(app):
    """
    Initialize the database configuration for the Flask application.
    
    Args:
        app (Flask): The Flask application instance to configure.
    """
    # Configure the database URI for SQLAlchemy
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://matari_test:UniversidadCentral123*@mysql-matari.alwaysdata.net/matari_users_db'
    
    # Disable SQLAlchemy event system to avoid overhead
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    # Initialize SQLAlchemy with the Flask app
    db.init_app(app)
