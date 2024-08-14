import express from "express";
import cors from "cors";  // Importa el paquete cors
import client from "./client.js";

const app = express();

// Habilita CORS para todas las rutas
app.use(cors());

app.get("/api/tasks", (req, res) => {
    client.GetTasks({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.error(err);
            res.status(500).send({
                msg: "Error fetching tasks",
            });
        }
    });
});

app.listen(5555, () => {
    console.log("Server started on port 5555");
});
