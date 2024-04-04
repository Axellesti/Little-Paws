const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const animalControllers = require("./controllers/animalControllers");
const userControllers = require("./controllers/userControllers");
const authControllers = require("./controllers/authControllers");

const authMiddlewares = require("./services/auth");

// Roads to animals
router.get("/animals", animalControllers.browse);
router.get("/animals/:id/", animalControllers.read);
router.post("/animals", authMiddlewares.verifyUserToken, animalControllers.add);
router.put("/animals/:id/", animalControllers.update);
router.delete("/animals/:id/", animalControllers.destroy);

router.get("/users/:id/animals", animalControllers.getUserAnimals);

// Roads to users
router.get("/users", userControllers.browse);
router.get("/users/:id/", userControllers.read);
router.post("/users", authMiddlewares.hashPassword, userControllers.add);
router.put("/users/:id/", authMiddlewares.hashPassword, userControllers.update);
router.put(
  "/profile",
  authMiddlewares.verifyUserToken,
  userControllers.updateProfile
);
router.delete("/users/:id/", userControllers.destroy);

// Route to login
router.post("/login", authControllers.login);

/* ************************************************************************* */

module.exports = router;
