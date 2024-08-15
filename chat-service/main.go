package main

import (
    "log"
    "net/http"
    "chat-service/chat"
    "chat-service/config"
    "github.com/prometheus/client_golang/prometheus"
    "github.com/prometheus/client_golang/prometheus/promhttp"
)

func main() {
    config.Connect()

    hub := chat.NewHub()
    go hub.Run()

    // Collect default metrics
    prometheus.MustRegister(prometheus.NewGoCollector())
    prometheus.MustRegister(prometheus.NewProcessCollector(prometheus.ProcessCollectorOpts{}))

    // Serve WebSocket connections
    http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
        chat.ServeWs(hub, w, r)
    })

    // Expose the registered metrics via HTTP on /metrics
    http.Handle("/metrics", promhttp.Handler())
    
    log.Println("Chat server started on :8080")
    err := http.ListenAndServe(":8080", nil)
    if err != nil {
        log.Fatal("ListenAndServe: ", err)
    }
}
