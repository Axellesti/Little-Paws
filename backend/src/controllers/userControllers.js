const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const result = await tables.user.readAll();
    res.json(result);
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

const add = async (req, res, next) => {
  const userInfos = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };

  try {
    const result = await tables.user.create(userInfos);
    console.info(result);
    res.json({ msg: "Utilisateur créé avec succès" });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const userInfos = {
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
    id: req.params.id,
  };

  try {
    const result = await tables.user.update(userInfos);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "User introuvable" });
    } else {
      res.json({ msg: "User modifié avec succès" });
    }
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await tables.user.destroy(req.params.id);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "User introuvable" });
    } else {
      res.json({ msg: "User supprimé avec succès" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read, add, update, destroy };
