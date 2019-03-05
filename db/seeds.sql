CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

DROP TABLE burgers;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);

SELECT * FROM burgers_db.burgers;

TRUNCATE TABLE burgers_db.burgers;

INSERT INTO burgers_db.burgers (burger_name, devoured,createdAt,updatedAt) 
	VALUES ('Cheese Burger', FALSE, CURDATE(), CURDATE());
INSERT INTO burgers_db.burgers (burger_name, devoured,createdAt,updatedAt) 
	VALUES ('Bacon Burger', FALSE, CURDATE(), CURDATE());
    

DROP DATABASE burgers_db;
