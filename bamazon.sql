CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
item_id VARCHAR(50) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100),
price DECIMAL(10) NOT NULL,
stock_quantity INTEGER(10) NOT NULL
);
