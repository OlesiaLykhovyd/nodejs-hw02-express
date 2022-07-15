const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/auth");
const { validation, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");

router.post("/signup", validation(schemas.register), controllers.register);
router.post("/login", validation(schemas.login), controllers.login);
router.get("/current", authenticate, controllers.getCurrent);
router.get("/logout", authenticate, controllers.logout);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  controllers.updateAvatar
);

module.exports = router;
