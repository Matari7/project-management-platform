package models

import (
    "log"
    "chat-service/config"
)

type User struct {
    ID       int    `json:"id"`
    Username string `json:"username"`
    Email    string `json:"email"`
}

func GetUserByID(id int) (*User, error) {
    var user User
    err := config.DB.QueryRow("SELECT id, username, email FROM users WHERE id = ?", id).Scan(&user.ID, &user.Username, &user.Email)
    if err != nil {
        log.Println("Error fetching user by ID:", err)
        return nil, err
    }
    return &user, nil
}
