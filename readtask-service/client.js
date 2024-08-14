import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const PROTO_PATH = "./proto/task.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
});

const TaskService = grpc.loadPackageDefinition(packageDefinition).TaskService;

const client = new TaskService("localhost:30043", grpc.credentials.createInsecure());

export default client;
