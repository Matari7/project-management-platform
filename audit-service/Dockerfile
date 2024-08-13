# Imagen base de Python
FROM python:3.9-slim

# Directorio de trabajo
WORKDIR /app

# Copia los archivos requirements.txt y app.py al contenedor
COPY requirements.txt .
COPY . .

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Expone el puerto en el que correrá la app
EXPOSE 5000

# Comando para ejecutar la app
CMD ["python", "app.py"]
