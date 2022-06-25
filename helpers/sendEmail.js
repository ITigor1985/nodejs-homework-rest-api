const nodemailer = require("nodemailer");
require("dotenv").config();

const { NODEMAILER_API_KEY } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "tarasoviv@meta.ua",
    pass: NODEMAILER_API_KEY,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "tarasoviv@meta.ua" };

  // eslint-disable-next-line no-useless-catch
  try {
    await transporter.sendEmail(email);
    return true;
  } catch (e) {
    throw e;
  }
};

module.exports = sendEmail;
