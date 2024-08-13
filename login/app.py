from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token
from config.db import db, init_db
from models.user import User
from werkzeug.security import check_password_hash
from flask_cors import CORS

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'tu_secreto_aqui'  # Cambia esto por tu clave secreta
jwt = JWTManager(app)

CORS(app)

# Inicializa la base de datos
init_db(app)


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    # Verifica que el usuario existe
    user = User.query.filter_by(email=email).first()
    if user and user.password_hash == password:  # Comparación directa
        # Crea un token de acceso
        access_token = create_access_token(identity={'id': user.id, 'email': user.email})
        return jsonify(token=access_token), 200
    else:
        return jsonify(message="Invalid email or password"), 401


if __name__ == '__main__':
    app.run(debug=True)
