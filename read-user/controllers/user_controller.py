from flask import Blueprint, jsonify
from services.user_service import get_all_users

# Create a new Blueprint for user-related routes
user_bp = Blueprint('user_bp', __name__)

@user_bp.route('/users', methods=['GET'])
def get_users():
    """
    Handle GET requests to fetch all users.
    
    Returns:
        Response: A JSON response containing the list of users or an error message.
    """
    try:
        # Fetch all users from the user service
        users = get_all_users()
        
        # Return the list of users as a JSON response with a 200 status code
        return jsonify(users), 200
    except Exception as e:
        # Return an error message as a JSON response with a 500 status code
        return jsonify({'message': 'Error fetching users', 'error': str(e)}), 500
