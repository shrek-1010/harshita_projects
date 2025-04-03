CREATE DATABASE blood_bank;
USE blood_bank;

CREATE TABLE donors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    phone VARCHAR(15),
    email VARCHAR(100),
    blood_group VARCHAR(10),
    city VARCHAR(100),
    address TEXT
);
