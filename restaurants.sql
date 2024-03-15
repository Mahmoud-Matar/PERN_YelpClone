CREATE TABLE restaurants(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL CHECK (price_range >= 1 and price_range <= 5)
);


INSERT INTO restaurants (name, location, price_range) VALUES ('Hilpert LLC', 'Gombe', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Thompson, Luettgen and Wilderman', 'Sōja', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Bashirian, Hickle and Hessel', 'Partille', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Morar-Wintheiser', 'Boac', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Hermann LLC', 'Zhuzuo', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Spinka, Tillman and Parisian', 'Le Kremlin-Bicêtre', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Abbott, Hessel and Tremblay', 'Krajan', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Herman Group', 'Temryuk', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Cronin-Kunde', 'Kubangkondanglapangan', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Dicki-Bogan', 'Toroy', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Feil-Goodwin', 'Loma', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Senger Group', 'Novopokrovka', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Purdy, Hessel and Funk', 'Nueve de Julio', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Green-Conroy', 'Nogueira', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Kilback-Cole', 'Choloma', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Torphy-Gottlieb', 'Bunga Mas', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Lockman, Cummings and Jast', 'Frydek', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Koss-Rowe', 'Tambakan', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Huel-Turcotte', 'Gunungsubang', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Altenwerth LLC', 'Ximei', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Gislason, Rippin and Upton', 'Paccha', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Schamberger-Wiza', 'Lisiy Nos', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Mitchell, Erdman and Schultz', 'San Jose', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Kassulke-Kling', 'Los Charrúas', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Mueller LLC', 'Cockburn Town', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Bauch Group', 'Chagoda', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Becker-Batz', 'Nacala', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Muller, Armstrong and Schamberger', 'Damu', 1);
INSERT INTO restaurants (name, location, price_range) VALUES ('Hermiston and Sons', 'Kalahang', 5);
INSERT INTO restaurants (name, location, price_range) VALUES ('Hansen LLC', 'Votorantim', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Fadel Group', 'Pilar do Sul', 1);
INSERT INTO restaurants (name, location, price_range) VALUES ('Hills, D''Amore and Spencer', 'Dazu', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Schmitt Group', 'Volokolamsk', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Stokes-Franecki', 'Jaciara', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Mohr, Emard and Heaney', 'New Kingston', 1);
INSERT INTO restaurants (name, location, price_range) VALUES ('Mertz Group', 'Vitez', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Lueilwitz, Turner and Lind', 'Santa Cruz del Sur', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Swift Group', 'Sarpang', 5);
INSERT INTO restaurants (name, location, price_range) VALUES ('Haag, Schoen and Wolf', 'Bazar-Korgon', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Kozey-Wisozk', 'Corani', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Bernhard-Donnelly', 'Margasari', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Kirlin-Lang', 'Ermelo', 1);
INSERT INTO restaurants (name, location, price_range) VALUES ('Ankunding Inc', 'Tegina', 1);
INSERT INTO restaurants (name, location, price_range) VALUES ('Dach, Osinski and Bins', 'Haizigou', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Kutch, Stiedemann and D''Amore', 'Grigiškės', 1);
INSERT INTO restaurants (name, location, price_range) VALUES ('Parisian, Roob and Welch', 'Asímion', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Willms LLC', 'Ścinawa', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('McKenzie-Gottlieb', 'Nanjing', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Kilback and Sons', 'Aveleda', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Ebert LLC', 'Driefontein', 5);
INSERT INTO restaurants (name, location, price_range) VALUES ('Littel, Predovic and Mills', 'Calle Blancos', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Graham-Feest', 'Sunne', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Marks, Buckridge and Dickens', 'Kawasaki', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Carter-Dickens', 'Alquízar', 5);
INSERT INTO restaurants (name, location, price_range) VALUES ('Marvin Group', 'Colombes', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Lubowitz, Heidenreich and Botsford', 'Yamaguchi-shi', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Okuneva-Bernier', 'Szemud', 1);
INSERT INTO restaurants (name, location, price_range) VALUES ('Kirlin, Marks and VonRueden', 'Heping', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Prosacco-McCullough', 'Obodivka', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Bartoletti LLC', 'Xinghua', 5);
INSERT INTO restaurants (name, location, price_range) VALUES ('Bayer Group', 'Ajaccio', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Olson, Hegmann and Treutel', 'North Cowichan', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Johnston, Douglas and Satterfield', 'Conceição da Abóboda', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Gutkowski, Schinner and Kuphal', 'Krajanbonjor', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Heller Group', 'Itapemirim', 1);
INSERT INTO restaurants (name, location, price_range) VALUES ('Armstrong Inc', 'Maria', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Wyman and Sons', 'Springfield', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Barton Inc', 'Sarbīsheh', 5);
INSERT INTO restaurants (name, location, price_range) VALUES ('Gusikowski and Sons', 'Kutapanjang', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Macejkovic, Lockman and Hermiston', 'Ekibastuz', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Graham, Lind and Simonis', 'Rydułtowy', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Kirlin, Torp and Towne', 'Nabire', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Kulas and Sons', 'Sandachō', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Walker Inc', 'Santa Maria', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Kessler LLC', 'Leeuwarden', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Nader-Moen', 'Xiabuji', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Gutkowski-Nicolas', 'Karangdalam', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Schmitt Inc', 'Chernoyerkovskaya', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Hirthe Group', 'Centenary', 5);
INSERT INTO restaurants (name, location, price_range) VALUES ('Senger, Considine and Predovic', 'Rodionovo-Nesvetayskaya', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Boyle-Ruecker', 'Sokolovo', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Becker-Hane', 'Quesada', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Wehner Group', 'Pueblo Nuevo', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Larson-Dietrich', 'Paris 03', 1);
INSERT INTO restaurants (name, location, price_range) VALUES ('Haley and Sons', 'Tayāsīr', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Little-DuBuque', 'Hargeysa', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Hamill and Sons', 'Isaka', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Reinger-Padberg', 'Xinning', 5);
INSERT INTO restaurants (name, location, price_range) VALUES ('McCullough-Howe', 'Limanowa', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Grant, Renner and Schaden', 'Algarvia', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('O''Keefe, Rowe and Torp', 'Shorko', 5);
INSERT INTO restaurants (name, location, price_range) VALUES ('Jacobson Inc', 'Birnin Kebbi', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Weimann, Murray and Reinger', 'Międzybrodzie Bialskie', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Schimmel and Sons', 'Botigues', 5);
INSERT INTO restaurants (name, location, price_range) VALUES ('Corwin-Marquardt', 'Prakhon Chai', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('Konopelski-Douglas', 'Puente Alto', 4);
INSERT INTO restaurants (name, location, price_range) VALUES ('Williamson Inc', 'São José do Rio Pardo', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('King, Spinka and Wolff', 'La Guadalupe', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Okuneva-Kuhn', 'Shalqīya', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('Padberg, Ernser and Bogisich', 'Udënisht', 3);