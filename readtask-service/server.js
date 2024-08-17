import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const PROTO_PATH = "./proto/task.proto";

async function main() {
    // Load and parse the .proto file
    const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
        keepCase: true,
        longs: String,
        enums: String,
        arrays: true,
    });

    // Load the TaskService from the proto file
    const taskProto = grpc.loadPackageDefinition(packageDefinition).TaskService;

    const server = new grpc.Server();

    // Create a MySQL connection
    const connection = await mysql.createConnection({
        host: process.env.TASK_DB_HOST,
        user: process.env.TASK_DB_USER,
        password: process.env.TASK_DB_PASSWORD,
        database: process.env.TASK_DB_NAME,
    });

    // Implement the GetTasks RPC method
    server.addService(taskProto.service, {
        GetTasks: async (_, callback) => {
            try {
                const [rows] = await connection.query("SELECT * FROM tasks");
                callback(null, { tasks: rows });
            } catch (error) {
                console.error(error);
                callback({
                    code: grpc.status.INTERNAL,
                    details: "Error fetching tasks",
                });
            }
        },
    });

    // Start the gRPC server
    server.bindAsync("127.0.0.1:30043", grpc.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log("Server started on 127.0.0.1:30043");
    });
}

main();
