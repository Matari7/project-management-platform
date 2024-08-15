from flask import Flask, Response
from flask_cors import CORS
from config.db import init_db
from controllers.user_controller import user_bp
from prometheus_client import start_http_server, Summary, Counter, Gauge, Histogram, generate_latest, CollectorRegistry, CONTENT_TYPE_LATEST

app = Flask(__name__)
CORS(app)

# Inicializa la base de datos
init_db(app)

# Registra las rutas del controlador
app.register_blueprint(user_bp)

# Crear y registrar métricas para Prometheus
REQUEST_TIME = Summary('request_processing_seconds', 'Time spent processing request')
REQUEST_COUNT = Counter('request_count', 'Total number of requests')
IN_PROGRESS = Gauge('in_progress_requests', 'Number of in-progress requests')
REQUEST_LATENCY = Histogram('request_latency_seconds', 'Request latency')

# Crear un registro para las métricas
registry = CollectorRegistry()

# Configurar endpoint de métricas para Prometheus
@app.route('/metrics')
def metrics():
    return Response(generate_latest(registry), mimetype=CONTENT_TYPE_LATEST)

# Inicializar el servidor Prometheus en un puerto diferente
if __name__ == '__main__':
    # Iniciar servidor Prometheus en el puerto 8000
    start_http_server(8000)
    # Iniciar la aplicación Flask
    app.run(debug=True, host='0.0.0.0', port=4004)
