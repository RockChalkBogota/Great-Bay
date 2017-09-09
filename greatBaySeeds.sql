DROP DATABASE IF EXISTS great_bayDB;
CREATE DATABASE great_bayDB;

USE great_bayDB;

CREATE TABLE items(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  type VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  PRIMARY KEY (id)
);

INSERT INTO items (title, type, price)
VALUES ("Hat", "item", 10.50);

INSERT INTO items (title, type, price)
VALUES ("Lawn mowing", "task", 20);

INSERT INTO items (title, type, price)
VALUES ("Build me a house", "project", 100000);
