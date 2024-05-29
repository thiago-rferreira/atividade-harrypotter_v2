-- Criação do banco de dados 
CREATE DATABASE spadium;

-- Conecta ao banco de dados 
\c spadium;

-- Create the Restaurants table
CREATE TABLE Restaurants (
    RestaurantID SERIAL PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Location VARCHAR(100) NOT NULL,
    PriceLevel INT CHECK (PriceLevel BETWEEN 1 AND 4),
    CuisineTypeID INT NOT NULL,
    ChefName VARCHAR(100),
    Description TEXT,
    OpeningDays VARCHAR(50),
    PaymentMethods VARCHAR(100),
    Rating INT CHECK (Rating BETWEEN 1 AND 3),
    FoundationDate DATE,
    MenuPDF VARCHAR(255),
    Photos VARCHAR(255)[],
    FOREIGN KEY (CuisineTypeID) REFERENCES CuisineTypes(CuisineTypeID)
);

-- Create the Users table with user types and additional fields
CREATE TABLE Users (
    UserID SERIAL PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Pass VARCHAR(100) NOT NULL,
    UserType VARCHAR(20) NOT NULL CHECK (UserType IN ('Admin', 'Regular')),
    Bio TEXT
);

-- Create the CuisineTypes table
CREATE TABLE CuisineTypes (
    CuisineTypeID SERIAL PRIMARY KEY,
    CuisineName VARCHAR(50) NOT NULL
);

-- Create the Favorites table to manage user favorite restaurants
CREATE TABLE Favorites (
    FavoriteID SERIAL PRIMARY KEY,
    UserID INT NOT NULL,
    RestaurantID INT NOT NULL,
    DateAdded TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (RestaurantID) REFERENCES Restaurants(RestaurantID)
);

-- Create the Reviews table to manage user reviews
CREATE TABLE Reviews (
    ReviewID SERIAL PRIMARY KEY,
    UserID INT NOT NULL,
    RestaurantID INT NOT NULL,
    Rating INT CHECK (Rating BETWEEN 1 AND 5),
    ReviewText TEXT,
    DateAdded TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Likes INT DEFAULT 0,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (RestaurantID) REFERENCES Restaurants(RestaurantID)
);

-- Create the Contato table to manage user contacts
CREATE TABLE Contato (
    ContatoID SERIAL PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Telefone VARCHAR(11) NOT NULL,
    Mensagem TEXT NOT NULL
);