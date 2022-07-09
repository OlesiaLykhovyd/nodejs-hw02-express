const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/auth");
const { validation } = require("../../middlewares");
const { schemas } = require("../../models/user");

router.post("/signup", validation(schemas.register), controllers.register);
router.post("/login", validation(schemas.login), controllers.login);

module.exports = router;
