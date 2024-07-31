INSERT INTO
  products(id, title, price, description, category)
VALUES
  (1, 'Product 1', 100, 'Description for 1', 'category 1')
;

INSERT INTO
  products(id, title, price, description, category)
VALUES
  (2, 'Product 2', 100, 'Description for 2', 'category 2')
;

INSERT INTO
  users(email, password)
VALUES
  ('test1@gmail.com', 'password1')
;

INSERT INTO
  cartItems(userId, productId, quantity)
VALUES
  (1, 1, 1)
;

INSERT INTO
  cartItems(userId, productId, quantity)
VALUES
  (1, 2, 1)
;

INSERT INTO
  cartItems(userId, productId, quantity)
VALUES
  (1, 2, 1)
;