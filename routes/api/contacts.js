const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/contacts");
const { authenticate, validation, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contact");

router.get("/", authenticate, controllers.getAll);

router.get("/:contactId", isValidId, controllers.getById);

router.post(
  "/",
  authenticate,
  validation(schemas.contactAddScheme),
  controllers.add
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validation(schemas.updateFavorite),
  controllers.updateFavorite
);

router.delete("/:contactId", isValidId, controllers.deleteById);

router.put(
  "/:contactId",
  isValidId,
  validation(schemas.contactAddScheme),
  controllers.updateById
);

module.exports = router;
