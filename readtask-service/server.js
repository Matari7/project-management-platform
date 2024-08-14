import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const PROTO_PATH = "./proto/task.proto";

async function main() {
    const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
        keepCase: true,
        longs: String,
        enums: String,
        arrays: true,
    });

    const taskProto = grpc.loadPackageDefinition(packageDefinition).TaskService;

    const server = new grpc.Server();

    const connection = await mysql.createConnection({
        host: process.env.TASK_DB_HOST,
        user: process.env.TASK_DB_USER,
        password: process.env.TASK_DB_PASSWORD,
        database: process.env.TASK_DB_NAME,
    });

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

    server.bindAsync("127.0.0.1:30043", grpc.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log("Server started on 127.0.0.1:30043");
    });
}

main();
