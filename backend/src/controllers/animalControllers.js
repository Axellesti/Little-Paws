const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const animals = await tables.animal.readAll();
    res.json(animals);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  const { id } = req.params;
  try {
    const animal = await tables.animal.read(id);
    res.json(animal);
  } catch (err) {
    next(err);
  }
};

const getUserAnimals = async (req, res, next) => {
  const { id } = req.params;
  console.info("ID PARAMS", id);
  try {
    const userAnimals = await tables.animal.getUserAnimals(id);
    res.json(userAnimals);
    console.info("je reçois ici mes animaux:", userAnimals);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  console.info("Data received from frontend:", req.body);

  const animalInfos = {
    category: req.body.category,
    name: req.body.name,
    race: req.body.race,
    age: req.body.age,
    type: req.body.type,
    place: req.body.place,
    picture: req.body.picture,
    user_id: req.userId,
  };

  try {
    const result = await tables.animal.create(animalInfos);
    console.info(result);
    res
      .status(200)
      .json({ msg: "Animal added with success !", status: result });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const animalInfos = {
    category: req.body.category,
    name: req.body.name,
    race: req.body.race,
    age: req.body.age,
    type: req.body.type,
    place: req.body.place,
    picture: req.body.picture,
    id: req.params.id,
  };

  try {
    const result = await tables.animal.update(animalInfos);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "Animal not found" });
    } else {
      res.json({ msg: "Successfully modified animal" });
    }
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await tables.animal.destroy(req.params.id);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "Animal not found" });
    } else {
      res.json({ msg: "Animal successfully deleted" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
  update,
  destroy,
  getUserAnimals,
};
