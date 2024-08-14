<?php

require 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

try {
    // Conexión a la base de datos de archivos
    $filesPdo = new PDO(
        'mysql:host=' . $_ENV['FILE_DB_HOST'] . ';dbname=' . $_ENV['FILE_DB_NAME'],
        $_ENV['FILE_DB_USER'],
        $_ENV['FILE_DB_PASSWORD']
    );
    $filesPdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Conexión a la base de datos de proyectos
    $projectsPdo = new PDO(
        'mysql:host=' . $_ENV['PROJECT_DB_HOST'] . ';dbname=' . $_ENV['PROJECT_DB_NAME'],
        $_ENV['PROJECT_DB_USER'],
        $_ENV['PROJECT_DB_PASSWORD']
    );
    $projectsPdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connected to both MySQL databases successfully.";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    die();
}

return [$filesPdo, $projectsPdo];
