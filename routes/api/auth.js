const express = require("express");

const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { registerJoiSchema, loginJoiShema } = require("../../schemas");
const { auth: ctrl } = require("../../controllers");

const router = express.Router();

router.post(
  "/register",
  validation(registerJoiSchema),
  ctrlWrapper(ctrl.register)
);
router.post("/login", validation(loginJoiShema), ctrlWrapper(ctrl.login));
router.get("./logout", auth, ctrlWrapper(ctrl.logout));
router.patch("/subscription", auth, ctrlWrapper(ctrl.subscriptionUpdate));

module.exports = router;
