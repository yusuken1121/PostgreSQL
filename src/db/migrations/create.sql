DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS cartItems CASCADE;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  price INT NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(50) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE cartItems(
  userId INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  productId INT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  quantity INT,
  UNIQUE (userId, productId)
);