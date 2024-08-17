from models.user_model import User

def get_all_users():
    """
    Fetches all users from the database and converts them to dictionaries.

    Returns:
        list: A list of dictionaries, each representing a user.
    """
    return [user.to_dict() for user in User.query.all()]
