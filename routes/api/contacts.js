const express = require("express");
const { validation, ctrlWrapper } = require("../../middlewares");
const { contactShema, favoriteJoiSchema } = require("../../schemas");
const { contacts: ctrl } = require("../../controllers");

const validateMiddleware = validation(contactShema);
const validateFavoriteMiddleware = validation(favoriteJoiSchema);

const router = express.Router();

// request handler functions--------------------------------------

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validateMiddleware, ctrl.add);

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

router.put("/:contactId", validateMiddleware, ctrl.updateById);

router.patch(
  "/:contactId/favorite",
  validateFavoriteMiddleware,
  ctrl.updateStatusContact
);

module.exports = router;
