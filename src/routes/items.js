const { Router } = require("express");

const {
  getItems,
  createItem,
  getItem,
  updateItem,
} = require("../controllers/items");

const router = Router();

router.get("/", getItems);
router.get("/:itemId", getItem);
router.post("/", createItem);
router.put("/:itemId", updateItem);

module.exports = router;
