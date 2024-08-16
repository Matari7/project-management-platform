from flask import Flask
from flask_cors import CORS
from config.db import init_db
from controllers.user_controller import user_bp

app = Flask(__name__)
CORS(app)

# Inicializa la base de datos
init_db(app)

# Registra las rutas del controlador
app.register_blueprint(user_bp)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4004)
