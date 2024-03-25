-- Création de la table pictures
create table picture (
  id INT primary key auto_increment not null,
  path varchar(255) not null
);

-- Création de la table user
create table user (
  id INT primary key auto_increment not null,
  email varchar(255) not null,
  password varchar(255) not null,
  username varchar(100) not null,
);

-- Création de la table animals
create table animal (
  id INT primary key auto_increment not null, 
  category varchar(100) not null,
  name varchar(100) not null,
  race varchar(255) not null,
  age INT not null,
  type varchar(100) not null,
  place VARCHAR(100) not null,
  id_picture int not null,
  constraint fk_animal_picture
  foreign key (id_picture) references picture(id),
);

-- Création des users
INSERT INTO user (email, username, password) VALUES 
('axo@gmail.com', "Axoloto", 'axo'),
('gaia@gmail.com', "Gaiou", "gaia"),
('yoko@gmail.com', "Yokoko", "yoko"),
('plume@gmail.com', "Plumeau", "plume"),
('buck@gmail.com', "Bucky", "buck");

-- Création des pictures
INSERT INTO picture (path) VALUES
('/yoko.jpeg'),
('/gaia.jpg'),
('/nenette.jpg'),
('/Boulette.jpeg'),
('/diabolo.jpg'),
('/Buck.jpg'),
('/Pumba.jpg'),
('/Lilou.jpg'),
('/Bella.jpg'),
('/Cleo.jpg'),
('/Oscar.jpg'),
('/Nala.jpg'),
('/Luna.jpg'),
('/Coco.jpg'),
('/Daisy.jpg'),
('/Nika.jpg'),
('/Shadow.jpg');


-- Création des animaux
INSERT INTO animal (category, name, race, age, type, place, id_picture) VALUES
('Chien', 'Yoko', 'Shiba Inu', 4, 'Femelle', 'Lille', 1, 2),
('Chien', 'Gaïa', 'Berger Australien', 2, 'Femelle', 'Bordeaux', 2, 1),
('Chat', 'Nenette', 'Chat de gouttiere', 8, 'Femelle', 'Strasbourg', 3, 5),
('Chat', 'Boulette', 'Chat de gouttier', 7, 'Femelle', 'Lyon', 4, 3),
('Chat', 'Diabolo', 'Siamois', 6, 'Mâle', 'Bordeaux', 5),
('Chien', 'Buck', 'Boxer', 10, 'Mâle', 'Marseille', 6, 4),
('Chien', 'Pumba', 'American Staffordshire Terrier', 6, 'Mâle', 'Montpellier', 7),
('Chien', 'Lilou', 'Golden Retriever', 6, 'Femelle', 'Toulon', 8),
('Chien', 'Bella', 'Labrador Retriever', 3, 'Fmelle', 'Clermont-Ferrand', 9),
('Chat', 'Cleo', 'Sacré de Birmanie', 2, 'Femelle', 'Paris', 10),
('Chat', 'Oscar', 'American Shorthair', 4, 'Mâle', 'Lille', 11),
('Chat', 'Nala', 'Chartreux', 5, 'Femelle', 'Paris', 12),
('Chien', 'Luna', 'Berger Allemand', 5, 'Femelle', 'Bordeaux', 13),
('Chien', 'Coco', 'Bulldog Français', 4, 'Mâle', 'Montpellier', 14),
('Chien', 'Daisy', 'Caniche', 2, 'Femelle', 'Clermont-Ferrand', 15),
('Chien', 'Nika', 'Beagle', 6, 'Femelle', 'Toulon', 16),
('Chien', 'Shadow', 'Akita Inu', 8, 'Mâle', 'Paris', 17);