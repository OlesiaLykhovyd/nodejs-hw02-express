const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/auth");
const { validation } = require("../../middlewares");
const { schemas } = require("../../models/user");

router.post("/register", validation(schemas.register), controllers.register);

module.exports = router;
