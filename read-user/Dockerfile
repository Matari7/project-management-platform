# Usar una imagen oficial de Maven para compilar la aplicación
FROM maven:3.8.1-openjdk-17 AS build

# Setear el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo pom.xml y descargar las dependencias
COPY pom.xml .

# Descargar las dependencias especificadas en el pom.xml
RUN mvn dependency:go-offline -B

# Copiar todo el contenido del proyecto
COPY . .

# Compilar el proyecto y empaquetarlo como un archivo JAR
RUN mvn clean package -DskipTests

# Usar una imagen oficial de OpenJDK como imagen base para ejecutar la aplicación
FROM openjdk:17-jdk-slim

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo JAR desde la imagen de compilación
COPY --from=build /app/target/read-user-1.0-SNAPSHOT.jar app.jar

# Exponer el puerto en el que la aplicación se ejecutará
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]
