<?php

// Permitir acceso desde cualquier origen
header("Access-Control-Allow-Origin: *");

// Permitir los métodos que se van a utilizar
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Permitir los encabezados personalizados
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Manejo de solicitudes OPTIONS (necesario para CORS preflight)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

require 'vendor/autoload.php';
require_once 'config/db.php';
require_once 'routes/FileRoutes.php';

header('Content-Type: application/json');

