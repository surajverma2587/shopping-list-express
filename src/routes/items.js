const { Router } = require("express");

const {
  getItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
} = require("../controllers/items");

const router = Router();

router.get("/", getItems);
router.get("/:itemId", getItem);
router.post("/", createItem);
router.put("/:itemId", updateItem);
router.delete("/:itemId", deleteItem);

module.exports = router;
