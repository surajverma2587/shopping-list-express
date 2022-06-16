const { Router } = require("express");

const { getItems, createItem } = require("../controllers/items");

const router = Router();

router.get("/", getItems);
router.post("/", createItem);

module.exports = router;
