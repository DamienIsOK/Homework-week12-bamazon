CREATE DATABASE Bamazon;

CREATE TABLE Products (
ItemID INT(9) NOT NULL,
ProductName VARCHAR(50) NOT NULL,
DepartmentName VARCHAR(50) NOT NULL,
Price DECIMEL(3,2) NOT NULL,
StockQuantity INT(3) NOT NULL,
PRIMARY KEY (ItemID)
);