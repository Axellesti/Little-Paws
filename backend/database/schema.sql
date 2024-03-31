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
  place VARCHAR(100) not null,
  picture varchar(255) not null
);

-- Création des users
INSERT INTO user (email, username, password) VALUES 
('axo@gmail.com', "Axoloto", 'axo'),
('gaia@gmail.com', "Gaiou", "gaia"),
('yoko@gmail.com', "Yokoko", "yoko"),
('plume@gmail.com', "Plumeau", "plume"),
('buck@gmail.com', "Bucky", "buck");

-- Création des animaux
INSERT INTO animal (category, name, race, age, type, place, picture) VALUES
('Chien', 'Yoko', 'Shiba Inu', 4, 'Femelle', 'Lille', 'https://i.ibb.co/8Kg9Z9n/yoko.jpg'),
('Chien', 'Gaïa', 'Berger Australien', 2, 'Femelle', 'Bordeaux', 'https://i.ibb.co/8B8KL1w/gaia.jpg'),
('Chat', 'Nenette', 'Chat de gouttiere', 8, 'Femelle', 'Strasbourg', 'https://i.ibb.co/4mp9STq/nenette.jpg'),
('Chat', 'Boulette', 'Chat de gouttier', 7, 'Femelle', 'Lyon', 'https://i.ibb.co/CM12f49/boulette2.jpg'),
('Chat', 'Diabolo', 'Siamois', 6, 'Mâle', 'Bordeaux', 'https://i.ibb.co/CbkX6bZ/diabolo.jpg'),
('Chien', 'Buck', 'Boxer', 10, 'Mâle', 'Marseille', 'https://i.ibb.co/Dwh0fc4/Buck.jpg'),
('Chien', 'Pumba', 'American Staffordshire Terrier', 6, 'Mâle', 'Montpellier', 'https://i.ibb.co/M555HJk/Pumba.jpg'),
('Chien', 'Lilou', 'Golden Retriever', 6, 'Femelle', 'Toulon', 'https://i.ibb.co/WnT27cK/Lilou.jpg'),
('Chien', 'Bella', 'Labrador Retriever', 3, 'Fmelle', 'Clermont-Ferrand', 'https://i.ibb.co/NswWZJ0/Bella.jpg'),
('Chat', 'Cleo', 'Sacré de Birmanie', 2, 'Femelle', 'Paris', 'https://i.ibb.co/5B36Lx0/Cleo.jpg'),
('Chat', 'Oscar', 'American Shorthair', 4, 'Mâle', 'Lille', 'https://i.ibb.co/3sjPm6B/Oscar.jpg'),
('Chat', 'Nala', 'Chartreux', 5, 'Femelle', 'Paris', 'https://i.ibb.co/yWRjR2V/Nala.jpg'),
('Chien', 'Luna', 'Berger Allemand', 5, 'Femelle', 'Bordeaux', 'https://i.ibb.co/QrhhbLY/Luna.jpg'),
('Chien', 'Coco', 'Bulldog Français', 4, 'Mâle', 'Montpellier', 'https://i.ibb.co/zFcgZvx/Coco.jpg'),
('Chien', 'Daisy', 'Caniche', 2, 'Femelle', 'Clermont-Ferrand', 'https://i.ibb.co/j838Prf/Daisy.jpg'),
('Chien', 'Nika', 'Beagle', 6, 'Femelle', 'Toulon', 'https://i.ibb.co/ZhtdZ5N/Nika.jpg'),
('Chien', 'Shadow', 'Akita Inu', 8, 'Mâle', 'Paris', 'https://i.ibb.co/89SYzRf/Shadow.jpg');