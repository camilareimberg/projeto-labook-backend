-- Active: 1684448632561@@127.0.0.1@3306
CREATE TABLE users( 
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    name TEXT NOT NULL, 
    email TEXT UNIQUE NOT NULL, 
    password TEXT NOT NULL, 
    role TEXT NOT NULL, 
    created_at TEXT DEFAULT (DATETIME()) NOT NULL );


INSERT INTO users(id,name,email, password, role) 
VALUES ("c90","joana", "joana@email.com", "12345", "NORMAL"), 
("c91","joão", "joão@email.com", "12345", "NORMAL"), 
("c92","maria", "maria@email.com", "12345", "NORMAL"), 
("c93","roberta", "roberta@email.com", "12345", "ADM");

CREATE TABLE post( 
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    creator_id TEXT NOT NULL , 
    content TEXT NOT NULL, likes INTEGER NOT NULL, 
    dislikes INTEGER NOT NULL, 
    created_at TEXT DEFAULT (DATETIME()) NOT NULL, 
    update_at TEXT DEFAULT (DATETIME()) NOT NULL, 
    FOREIGN KEY (creator_id) REFERENCES users(id) ON UPDATE CASCADE );
