<?php

class FileModel {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function saveFileDetails($fileName, $fileType, $fileSize, $projectId) {
        $stmt = $this->pdo->prepare("INSERT INTO files (file_name, file_type, file_size, project_id) VALUES (?, ?, ?, ?)");
        return $stmt->execute([$fileName, $fileType, $fileSize, $projectId]);
    }
}
