const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const animalControllers = require("./controllers/animalControllers");

// Route to get a list of items

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
// Route to add a new item
router.post("/items", itemControllers.add);

// Roads to get animals
router.get("/animals", animalControllers.browse);
router.get("/animals/:id/", animalControllers.read);

// Roads to add animals
router.post("/animals", animalControllers.add);

// Roads to update animals
router.put("/animals/:id/", animalControllers.update);

// Roads to delete animals
router.delete("/animals/:id/", animalControllers.destroy);

/* ************************************************************************* */

module.exports = router;
