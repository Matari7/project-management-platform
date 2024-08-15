from flask import Flask
from flask_jwt_extended import JWTManager
from config.db import init_db
from flask_cors import CORS
from auth import auth_bp

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'tu_secreto_aqui'  # Cambia esto por tu clave secreta
jwt = JWTManager(app)

CORS(app)

# Inicializa la base de datos
init_db(app)

# Registro del Blueprint para las rutas de autenticación
app.register_blueprint(auth_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
