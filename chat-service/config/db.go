package config

import (
    "database/sql"
    _ "github.com/go-sql-driver/mysql"
    "log"
)

var DB *sql.DB

func Connect() {
    dsn := "matari_test:UniversidadCentral123*@tcp(mysql-matari.alwaysdata.net:3306)/matari_users_db"
    var err error
    DB, err = sql.Open("mysql", dsn)
    if err != nil {
        log.Fatal("Failed to connect to database:", err)
    }

    err = DB.Ping()
    if err != nil {
        log.Fatal("Failed to ping database:", err)
    }

    log.Println("Database connection established")
}
