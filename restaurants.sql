CREATE TABLE restaurants(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL CHECK (price_range >= 1 and price_range <= 5)
);


INSERT INTO restaurants (name, location, price_range) VALUES ('Burger Palace', 'California', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Pizza Heaven', 'New York', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Taco Hut', 'Texas', 1);
INSERT INTO restaurants (name, location, price_range) VALUES ('Sushi Junction', 'Florida', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('BBQ Barn', 'Georgia', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Diner Delight', 'Illinois', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Seafood Shack', 'Louisiana', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Pasta Paradise', 'Massachusetts', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Steakhouse Supreme', 'Nevada', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Vegetarian Villa', 'Oregon', 2);

