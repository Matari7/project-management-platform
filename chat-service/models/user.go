package models

import (
    "log"              // Importing the log package for logging errors and messages
    "chat-service/config" // Importing the config package to access the database connection
)

// User represents the structure of a user entity in the application
type User struct {
    ID       int    `json:"id"`       // ID is the unique identifier for the user
    Username string `json:"username"` // Username is the name used by the user to log in
    Email    string `json:"email"`    // Email is the user's email address
}

// GetUserByID fetches a user from the database based on the provided user ID.
// It returns a pointer to a User struct and an error if something goes wrong during the database query.
func GetUserByID(id int) (*User, error) {
    var user User // Declare a variable of type User to hold the retrieved data

    // Execute a SQL query to fetch the user's ID, username, and email based on the provided ID
    err := config.DB.QueryRow("SELECT id, username, email FROM users WHERE id = ?", id).Scan(&user.ID, &user.Username, &user.Email)
    
    // If an error occurs during the query, log the error and return nil along with the error
    if err != nil {
        log.Println("Error fetching user by ID:", err)
        return nil, err
    }
    
    // If the query is successful, return a pointer to the User struct with the retrieved data and nil for the error
    return &user, nil
}
