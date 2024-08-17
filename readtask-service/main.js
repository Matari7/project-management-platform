import express from "express";
import cors from "cors";  
import client from "./client.js"; // Import the gRPC client

const app = express();

app.use(cors()); // Enable CORS for all routes

// Define a route to fetch tasks
app.get("/api/tasks", (req, res) => {
    client.GetTasks({}, (err, data) => {
        if (!err) {
            res.send(data); // Send the retrieved tasks
        } else {
            console.error(err); // Log the error
            res.status(500).send({
                msg: "Error fetching tasks",
            }); // Send error response
        }
    });
});

// Start the server on port 4025
app.listen(4025, () => {
    console.log("Server started on port 4025");
});
