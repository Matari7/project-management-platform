package main

import (
    "log"                   // Importing the log package for logging errors and messages
    "net/http"              // Importing the net/http package to handle HTTP requests and responses
    "chat-service/chat"     // Importing the chat package which contains the chat hub and WebSocket functionality
    "chat-service/config"   // Importing the config package to manage the database connection
)

// main is the entry point of the chat service application.
// It initializes the database connection, starts the chat hub, and sets up the HTTP server to handle WebSocket connections.
func main() {
    // Establish a connection to the database
    config.Connect()

    // Create a new instance of the chat hub, which manages WebSocket connections
    hub := chat.NewHub()
    go hub.Run()  // Run the chat hub in a separate goroutine

    // Set up an HTTP handler for the WebSocket endpoint
    http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
        chat.ServeWs(hub, w, r)  // Serve the WebSocket connection using the chat hub
    })

    // Log that the chat server has started and is listening on port 8080
    log.Println("Chat server started on :8080")
    
    // Start the HTTP server on port 8080 and log any errors if the server fails to start
    err := http.ListenAndServe(":8080", nil)
    if err != nil {
        log.Fatal("ListenAndServe: ", err)
    }
}
