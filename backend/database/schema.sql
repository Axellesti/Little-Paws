-- Création de la table user
create table user (
  id INT primary key auto_increment not null,
  email varchar(255) not null,
  password varchar(255) not null,
  username varchar(100) not null
);

-- Création de la table animals

create table animal (
  id INT primary key auto_increment not null, 
  category varchar(100) not null,
  name varchar(100) not null,
  race varchar(255) not null,
  age INT not null,
  type varchar(100) not null,
  place VARCHAR(100) not null
);

-- Création de la table articles



-- Création des users
INSERT INTO user (email, username, password) VALUES 
('axo@gmail.com', "Axoloto", 'axo'),
('gaia@gmail.com', "Gaiou", "gaia"),
('yoko@gmail.com', "Yokoko", "yoko"),
('plume@gmail.com', "Plumeau", "plume"),
('buck@gmail.com', "Bucky", "buck");


-- Création des animaux
INSERT INTO animal (category, name, race, age, type, place) VALUES
('Chien', 'Yoko', 'Shiba Inu', 4, 'Femelle', 'Lille'),
('Chien', 'Gaïa', 'Berger Australien', 2, 'Femelle', 'Bordeaux'),
('Chat', 'Nenette', 'Chat de gouttiere', 8, 'Femelle', 'Strasbourg'),
('Chat', 'Boulette', 'Chat de gouttier', 7, 'Femelle', 'Lyon'),
('Chat', 'Diabolo', 'Siamois', 6, 'Mâle', 'Bordeaux'),
('Chien', 'Buck', 'Boxer', 10, 'Mâle', 'Marseille'),
('Chien', 'Pumba', 'American Staffordshire Terrier', 6, 'Mâle', 'Montpellier'),
('Chien', 'Lilou', 'Golden Retriever', 6, 'Femelle', 'Toulon'),
('Chien', 'Bella', 'Labrador Retriever', 3, 'Fmelle', 'Clermont-Ferrand'),
('Chat', 'Cleo', 'Sacré de Birmanie', 2, 'Femelle', 'Paris'),
('Chat', 'Oscar', 'American Shorthair', 4, 'Mâle', 'Lille'),
('Chat', 'Nala', 'Chartreux', 5, 'Femelle', 'Paris'),
('Chien', 'Luna', 'Berger Allemand', 5, 'Femelle', 'Bordeaux'),
('Chien', 'Coco', 'Bulldog Français', 4, 'Mâle', 'Montpellier'),
('Chien', 'Daisy', 'Caniche', 2, 'Femelle', 'Clermont-Ferrand'),
('Chien', 'Nika', 'Beagle', 6, 'Femelle', 'Toulon'),
('Chien', 'Shadow', 'Akita Inu', 8, 'Mâle', 'Paris');


