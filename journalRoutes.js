const router = require("express").Router();
const { getAll, create, remove } = require("../controllers/journalController");
const auth = require("../middleware/authMiddleware");

router.get("/", auth, getAll);
router.post("/", auth, create);
router.delete("/:id", auth, remove);

module.exports = router;
