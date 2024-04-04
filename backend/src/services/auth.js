const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const hashedPassword = await argon2.hash(password, hashingOptions);

    req.body.hashedPassword = hashedPassword;
    delete req.body.password;

    next();
  } catch (error) {
    next(error);
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.auth;
    await jwt.verify(token, process.env.APP_SECRET);
    next();
  } catch (error) {
    res.sendStatus(401);
  }
};

const verifyUserToken = (req, res, next) => {
  const infos = {
    idUser: req.body.idUser,
  };

  console.info("Les infos : ", infos);

  req.userId = parseInt(infos.idUser, 10);

  console.info("REQ USER", req.userId);

  const token = req.cookies.auth;

  try {
    const decodedToken = jwt.verify(token, process.env.APP_SECRET);
    console.info("DECODED TOKEN", decodedToken.sub);
    console.info("TYPAGE ID DU TOKEN", typeof decodedToken.sub);
    console.info("TYPAGE DU idUSER du REQ", typeof req.userId);
    if (decodedToken.sub === req.userId) {
      console.info("Ok utilisateur vérifié");
      next();
    } else {
      console.info("DEPUIS AUTH : erreur user non valide");
    }
  } catch (error) {
    console.error("Token verification failed:", error);
    next(error);
  }
};

module.exports = { hashPassword, verifyToken, verifyUserToken };
