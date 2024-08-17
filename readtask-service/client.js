import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

// Path to the .proto file
const PROTO_PATH = "./proto/task.proto";

// Load and parse the .proto file
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,      // Preserve case of field names
    longs: String,       // Convert long values to strings
    enums: String,       // Convert enums to strings
    arrays: true,        // Handle repeated fields as arrays
});

// Load the gRPC service definition from the parsed .proto file
const TaskService = grpc.loadPackageDefinition(packageDefinition).TaskService;

// Create a gRPC client for the TaskService with an insecure connection
const client = new TaskService("localhost:30043", grpc.credentials.createInsecure());

// Export the client for use in other parts of the application
export default client;
