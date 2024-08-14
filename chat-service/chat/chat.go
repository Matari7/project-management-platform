package chat

import (
    "net/http"
    "github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
    CheckOrigin: func(r *http.Request) bool { return true },
}

func ServeWs(hub *Hub, w http.ResponseWriter, r *http.Request) {
    conn, err := upgrader.Upgrade(w, r, nil)
    if err != nil {
        return
    }
    client := &Client{Hub: hub, Conn: conn, Send: make(chan []byte, 256)}
    client.Hub.Register <- client

    go client.WritePump()
    go client.ReadPump()
}
