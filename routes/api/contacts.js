const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/contacts");
const { validation, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contact");

router.get("/", controllers.getAll);

router.get("/:contactId", isValidId, controllers.getById);

router.post("/", validation(schemas.contactAddScheme), controllers.add);

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
