from flask import Flask
from flask_cors import CORS
from config.db import init_db
from controllers.user_controller import user_bp

# Create a new Flask application instance
app = Flask(__name__)

# Enable Cross-Origin Resource Sharing (CORS) for the application
CORS(app)

# Initialize the database connection with the application
init_db(app)

# Register the Blueprint for user-related routes
app.register_blueprint(user_bp)

if __name__ == '__main__':
    # Run the Flask application with debug mode enabled, listening on all interfaces and port 4004
    app.run(debug=True, host='0.0.0.0', port=4004)
