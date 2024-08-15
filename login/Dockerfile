# Usar una imagen oficial de Python como imagen base
FROM python:3.10-slim

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo requirements.txt y el archivo de configuración de la base de datos
COPY requirements.txt .

# Instalar las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el resto de la aplicación en el contenedor
COPY . .

# Exponer el puerto en el que Flask correrá
EXPOSE 5000

# Comando para correr la aplicación
CMD ["python", "app.py"]
