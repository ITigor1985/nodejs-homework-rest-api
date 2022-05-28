const { NotFound } = require("http-errors");
const { Contact } = require("../../models");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw new NotFound("Not found");
  }
  res.json({
    status: "success",
    message: "contact deleted",
    code: 200,
    data: { result },
  });
};
module.exports = removeById;
