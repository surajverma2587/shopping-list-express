const { Router } = require("express");

const {
  renderHomePage,
  renderCreatePage,
  renderEditPage,
} = require("../controllers/views");

const router = Router();

router.get("/", renderHomePage);
router.get("/create", renderCreatePage);
router.get("/edit/:id", renderEditPage);

module.exports = router;
