-- Création de la table user
create table user (
  id INT primary key auto_increment not null,
  email varchar(255) not null,
  hashed_password varchar(255) not null,
  username varchar(100) not null
);

-- Création des users
INSERT INTO user (email, hashed_password, username) VALUES 
('axo@gmail.com', '$argon2id$v=19$m=19456,t=2,p=1$upauSebysKdYF+oXYeoDYA$CFmdc98oeuc7V8gNarUaiFzLV1vsziRZTAD47OUFPo0', "Axoloto"),
('gaia@gmail.com', "$argon2id$v=19$m=19456,t=2,p=1$yPewnjVIIccdCEzomFqo2A$N/IoXPe9jMo8GMtW7cnH2s4df7bvOACNHjYnK2cnMdE", "Gaiou"),
('yoko@gmail.com', "$argon2id$v=19$m=19456,t=2,p=1$tLLC9UP1QkGrT3+fJxn4bw$jPIsosfM8wnhaimQ1noqQENGNjaH7z851YnRJCjkH+k", "Yokoko"),
('plume@gmail.com', "$argon2id$v=19$m=19456,t=2,p=1$V1Gj8ZhMzlM3ziamhsfG5Q$Q4107oOd12pAQIp2x1icLswhLGj2kRQ+insh9yOda0Y", "Plumeau"),
('buck@gmail.com', "$argon2id$v=19$m=19456,t=2,p=1$XQSECxfZ5B3tRjfDDiEa8Q$XUncXh1F70YzwxZe4p6ju4oMd48jQCqSeT4EFSPxkoM", "Bucky"),
('Coucou@gmail.com', "$argon2id$v=19$m=19456,t=2,p=1$A9C+ZTWfggxMxsaWcVw9fQ$gnKx5P1XToBer8hHj7b2hrQWcFaOIjkfwfoxwBblqWQ", "Hello"),
('Eric@gmail.com', "$argon2id$v=19$m=19456,t=2,p=1$oqaqrVhsY8hG3PepuI2yag$ceJJqIT6mamY4Lzj6eV8ud+vhKYTxWltQjpKYq26zzg", "Eric"),
('Lucas@gmail.com', "$argon2id$v=19$m=19456,t=2,p=1$6bfD0GcZstcFQWUmnXYoAg$538WbnTse+acleISs7/pIh/58shOhV3aAf+p/HBm6IA", "Lucas"),
('Axelle@gmail.com', "$argon2id$v=19$m=19456,t=2,p=1$qQyCI2SwmwBmGstI2X7p2w$ic02KXA+wf8dobKq/HAba64dW0MwC2XZFtW7n9fU9S0", "Axelle"),
('Margot@gmail.com', "$argon2id$v=19$m=19456,t=2,p=1$SruxG7IDWzOEF5FcI6EHCA$rZWTDUBxADUtWypT5uT/6bEroj9QerCCrr5OQGsqAe8", "Margot"),
('Thibault@gmail.com', "$argon2id$v=19$m=19456,t=2,p=1$PmQT2nMGAkQQrsYvcod26w$38A18heMz4sRcyJ56Umb3IEKMHQtVKnAleycllxdxeA", "Thibault"),
('Lila@gmail.com', "$argon2id$v=19$m=19456,t=2,p=1$xhCcfhmK0PouAVy7OLjEXA$aiwMTv7yQRmfiN6eTZqTXwIyTrRH8KETFWwfKG7UQQQ", "Lila"),
('John@gmail.com', "$argon2id$v=19$m=19456,t=2,p=1$AjLjUckVHj0m3Ml0L9yD6g$iMR5X8LvCid4KakBuSoMXjRlWrofY04Gi7K6dJNQIQo", "John"),
('Farah@gmail.com', "$argon2id$v=19$m=19456,t=2,p=1$zcXBPSO4G9WpiQN/W5IHUA$rq6wFzxu3De92k/hESKG/YBpgl1mMo6rbz/ms1cODeQ", "Farah"),
('Christrophe@gmail.com', "$argon2id$v=19$m=19456,t=2,p=1$DxuxHMABd5FDGaOSORXNyg$vwQGPg5Uw+Tovdx3zIYriUp4RtdOa5bX/RKWumFxCyk", "Christrophe"),
('Marine@gmail.com', "$argon2id$v=19$m=19456,t=2,p=1$eWgcJuRf8JO+Ep0spsP7gw$JG9e7eZ2SkHhEUSZRcbeqdgVVhcjvtJHenZo8akawuw", "Marine");

-- Création de la table animals
create table animal (
  id INT primary key auto_increment not null, 
  category varchar(100) not null,
  name varchar(100) not null,
  race varchar(255) not null,
  age INT not null,
  type varchar(100) not null,
  place VARCHAR(100) not null,
  picture varchar(255) not null,
  user_id INT not null,
  constraint fk_animal_user
  foreign key (user_id) REFERENCES user(id)
);

-- Création des animaux
INSERT INTO animal (category, name, race, age, type, place, picture, user_id) VALUES
('Chien', 'Yoko', 'Shiba Inu', 4, 'Femelle', 'Lille', 'https://i.ibb.co/8Kg9Z9n/yoko.jpg', 10),
('Chien', 'Gaïa', 'Berger Australien', 2, 'Femelle', 'Bordeaux', 'https://i.ibb.co/8B8KL1w/gaia.jpg', 11),
('Chat', 'Nenette', 'Chat de gouttiere', 8, 'Femelle', 'Strasbourg', 'https://i.ibb.co/4mp9STq/nenette.jpg', 3),
('Chat', 'Boulette', 'Chat de gouttier', 7, 'Femelle', 'Lyon', 'https://i.ibb.co/CM12f49/boulette2.jpg', 4),
('Chat', 'Diabolo', 'Siamois', 6, 'Mâle', 'Bordeaux', 'https://i.ibb.co/CbkX6bZ/diabolo.jpg', 5),
('Chien', 'Buck', 'Boxer', 10, 'Mâle', 'Marseille', 'https://i.ibb.co/Dwh0fc4/Buck.jpg', 6),
('Chien', 'Pumba', 'American Staffordshire Terrier', 6, 'Mâle', 'Montpellier', 'https://i.ibb.co/M555HJk/Pumba.jpg', 7),
('Chien', 'Lilou', 'Golden Retriever', 6, 'Femelle', 'Toulon', 'https://i.ibb.co/WnT27cK/Lilou.jpg', 16),
('Chien', 'Bella', 'Labrador Retriever', 3, 'Fmelle', 'Clermont-Ferrand', 'https://i.ibb.co/NswWZJ0/Bella.jpg', 16),
('Chat', 'Cleo', 'Sacré de Birmanie', 2, 'Femelle', 'Paris', 'https://i.ibb.co/5B36Lx0/Cleo.jpg', 15),
('Chat', 'Oscar', 'American Shorthair', 4, 'Mâle', 'Lille', 'https://i.ibb.co/3sjPm6B/Oscar.jpg', 14),
('Chat', 'Nala', 'Chartreux', 5, 'Femelle', 'Paris', 'https://i.ibb.co/yWRjR2V/Nala.jpg', 13),
('Chien', 'Luna', 'Berger Allemand', 5, 'Femelle', 'Bordeaux', 'https://i.ibb.co/QrhhbLY/Luna.jpg', 12),
('Chien', 'Coco', 'Bulldog Français', 4, 'Mâle', 'Montpellier', 'https://i.ibb.co/zFcgZvx/Coco.jpg', 14),
('Chien', 'Daisy', 'Caniche', 2, 'Femelle', 'Clermont-Ferrand', 'https://i.ibb.co/j838Prf/Daisy.jpg', 1),
('Chien', 'Nika', 'Beagle', 6, 'Femelle', 'Toulon', 'https://i.ibb.co/ZhtdZ5N/Nika.jpg', 9),
('Chien', 'Shadow', 'Akita Inu', 8, 'Mâle', 'Paris', 'https://i.ibb.co/89SYzRf/Shadow.jpg', 8);