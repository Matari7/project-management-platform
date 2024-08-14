<?php

require_once '../models/FileModel.php';

class FileController {
    private $fileModel;
    private $pdo;
    private $projectsPdo;

    public function __construct($pdo, $projectsPdo) {
        $this->pdo = $pdo;
        $this->projectsPdo = $projectsPdo;
        $this->fileModel = new FileModel($pdo);
    }

    private function projectExists($projectId) {
        $stmt = $this->projectsPdo->prepare("SELECT COUNT(*) FROM projects WHERE id = ?");
        $stmt->execute([$projectId]);
        return $stmt->fetchColumn() > 0;
    }

    public function uploadFile() {
        echo json_encode(['message' => 'Starting uploadFile method']);

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $projectId = $_POST['project_id'];
echo json_encode(['message' => 'Received Project ID', 'projectId' => $projectId]); // Antes de verificar si existe el proyecto


            if (!$this->projectExists($projectId)) {
                echo json_encode(['message' => 'Project ID does not exist in the projects database.']);
                return;
            }

            if (isset($_FILES['file'])) {
                $fileName = $_FILES['file']['name'];
                $fileType = $_FILES['file']['type'];
                $fileSize = $_FILES['file']['size'];
                $fileTmpName = $_FILES['file']['tmp_name'];

                echo json_encode(['message' => 'File received', 'fileName' => $fileName, 'fileType' => $fileType, 'fileSize' => $fileSize]); // Antes de guardar en la base de datos


                try {
                    // Guarda detalles del archivo en la base de datos
                    if ($this->fileModel->saveFileDetails($fileName, $fileType, $fileSize, $projectId)) {
                        $uploadDir = __DIR__ . '/../uploads/';
                        if (!file_exists($uploadDir)) {
                            mkdir($uploadDir, 0777, true);
                        }
                        if (move_uploaded_file($fileTmpName, $uploadDir . $fileName)) {
                            echo json_encode(['message' => 'File uploaded and details saved to database.']);
                        } else {
                            echo json_encode(['message' => 'Failed to move uploaded file.']);
                        }
                    } else {
                        echo json_encode(['message' => 'Failed to save file details to database.']);
                    }
                } catch (PDOException $e) {
                    if ($e->getCode() === '23000') { // Código de error SQLSTATE para violación de clave foránea
                        echo json_encode(['message' => 'Error: Project ID does not exist.']);
                    } else {
                        echo json_encode(['message' => 'Database error: ' . $e->getMessage()]);
                    }
                }
            } else {
                echo json_encode(['message' => 'No file uploaded.']);
            }
        } else {
            echo json_encode(['message' => 'Invalid request method.']);
        }
    }
}
