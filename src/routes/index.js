const express = require("express");
const { getHelloWorld, getInstagramCommentsWinner } = require("../controller");
const router = express.Router();

router.get("/pick-winner", getInstagramCommentsWinner);
router.get("/", getHelloWorld);

module.exports = router;
