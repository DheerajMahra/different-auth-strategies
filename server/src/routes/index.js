const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { displayWelcomeMessage } = require("../controllers");

router.get("/", auth, displayWelcomeMessage);

module.exports = router;