<?php

require_once '../controllers/FileController.php';

[$filesPdo, $projectsPdo] = require_once '../config/db.php';
$fileController = new FileController($filesPdo, $projectsPdo);

if ($_SERVER['REQUEST_URI'] === '/api/files/upload') {
    $fileController->uploadFile();
}
