from models.user_model import User

def get_all_users():
    return [user.to_dict() for user in User.query.all()]
