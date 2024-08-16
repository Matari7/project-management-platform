# Usamos una imagen base oficial de Python
FROM python:3.10-slim

# Establecemos el directorio de trabajo en el contenedor
WORKDIR /app

# Copiamos los archivos de requisitos del proyecto
COPY requirements.txt .

# Instalamos las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copiamos todo el contenido del proyecto al contenedor
COPY . .

# Exponemos el puerto que usará la aplicación
EXPOSE 4004

# Comando para ejecutar la aplicación
CMD ["python", "app.py"]
