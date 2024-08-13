from pymongo import MongoClient

# Reemplaza con tu cadena de conexión de MongoDB Atlas
mongo_uri = "mongodb+srv://matari_test:UniversidadCentral123*@cluster0.5lzjk.mongodb.net/"
client = MongoClient(mongo_uri)

# Conexión a la base de datos de auditoría
db = client.audit_db
