DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

INSERT INTO users (username, password) VALUES ("admin", "passme");
INSERT INTO users (username, password) VALUES ("employee", "passme");