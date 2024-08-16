package main

import (
    "log"
    "net/http"
    "chat-service/chat"
    "chat-service/config"
)

func main() {
    config.Connect()

    hub := chat.NewHub()
    go hub.Run()

    http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
        chat.ServeWs(hub, w, r)
    })

    log.Println("Chat server started on :8080")
    err := http.ListenAndServe(":8080", nil)
    if err != nil {
        log.Fatal("ListenAndServe: ", err)
    }
}
