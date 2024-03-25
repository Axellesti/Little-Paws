const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const animalControllers = require("./controllers/animalControllers");
const userControllers = require("./controllers/userControllers");

const authMiddlewares = require("./services/auth");

// Route to get a list of items

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
// Route to add a new item
router.post("/items", itemControllers.add);

// Roads to animals
router.get("/animals", animalControllers.browse);
router.get("/animals/:id/", animalControllers.read);
router.post("/animals", animalControllers.add);
router.put("/animals/:id/", animalControllers.update);
router.delete("/animals/:id/", animalControllers.destroy);

// Roads to users
router.get("/users", userControllers.browse);
router.get("/users/:id/", userControllers.read);
router.post("/users", authMiddlewares.hashPassword, userControllers.add);
router.put("/users/:id/", userControllers.update);
router.delete("/users/:id/", userControllers.destroy);

/* ************************************************************************* */

module.exports = router;
