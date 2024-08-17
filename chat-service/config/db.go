package config

import (
    "database/sql" // Importing the SQL package for database operations
    _ "github.com/go-sql-driver/mysql" // Importing the MySQL driver package for SQL, with a blank identifier to ensure it is linked properly
    "log" // Importing the log package for logging errors and messages
)

var DB *sql.DB // Global variable to hold the database connection pool

// Connect initializes a connection to the MySQL database and assigns it to the global DB variable.
// It uses a Data Source Name (DSN) to specify the connection details including username, password, host, port, and database name.
func Connect() {
    dsn := "matari_test:UniversidadCentral123*@tcp(mysql-matari.alwaysdata.net:3306)/matari_users_db" // Define the DSN string with connection details
    var err error // Variable to hold any error encountered during the connection process
    
    // Attempt to open a connection to the database using the MySQL driver
    DB, err = sql.Open("mysql", dsn)
    if err != nil {
        log.Fatal("Failed to connect to database:", err) // Log a fatal error and exit the application if the connection fails
    }

    // Ping the database to verify that the connection is valid and reachable
    err = DB.Ping()
    if err != nil {
        log.Fatal("Failed to ping database:", err) // Log a fatal error and exit the application if the ping fails
    }

    log.Println("Database connection established") // Log a success message indicating that the connection is established
}
