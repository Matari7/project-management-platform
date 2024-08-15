import express from "express";
import cors from "cors";  
import client from "./client.js";

const app = express();

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

app.listen(4025, () => {
    console.log("Server started on port 4025");
});
