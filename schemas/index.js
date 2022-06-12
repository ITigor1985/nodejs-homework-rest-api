const { contactShema } = require("./contact");
const { favoriteJoiSchema } = require("./contact");
const { registerJoiSchema } = require("./user");
const { loginJoiShema } = require("./user");

module.exports = {
  contactShema,
  favoriteJoiSchema,
  registerJoiSchema,
  loginJoiShema,
};
