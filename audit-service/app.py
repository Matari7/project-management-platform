from flask import Flask
from audit_routes import audit_blueprint

app = Flask(__name__)
app.register_blueprint(audit_blueprint)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
