const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmailWithPassword(req.body.email);

    if (user.length === 0) {
      res.sendStatus(422);
    }

    const verified = await argon2.verify(
      user[0].hashed_password,
      req.body.password
    );

    if (verified === true) {
      const token = await jwt.sign(
        {
          sub: user[0].id,
          email: user[0].email,
        },
        process.env.APP_SECRET,
        {
          expiresIn: "2h",
        }
      );
      res
        .cookie("auth", token, {
          httpOnly: true,
          sameSite: "Lax",
        })
        .json({
          msg: "Connexion réussie",
          id: user[0].id,
          email: user[0].email,
          nickname: user[0].username,
          token,
        });
    } else {
      res.sendStatus(422);
    }
  } catch (error) {
    next(error);
  }
};
module.exports = { login };
