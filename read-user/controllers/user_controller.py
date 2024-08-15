from flask import Blueprint, jsonify
from services.user_service import get_all_users

user_bp = Blueprint('user_bp', __name__)

@user_bp.route('/users', methods=['GET'])
def get_users():
    try:
        users = get_all_users()
        return jsonify(users), 200
    except Exception as e:
        return jsonify({'message': 'Error fetching users', 'error': str(e)}), 500
