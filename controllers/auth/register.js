const { Conflict } = require("http-errors");
const { v4 } = require("uuid");
const gravatar = require("gravatar");
const sendEmail = require("../../helpers");
const { HOST, PORT = 3000 } = process.env;
// bcrypt = require("bcryptjs");

const { User } = require("../../models");

const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }

  const verificationToken = v4();
  const avatarURL = gravatar.url(email, { protocol: "https" });
  const newUser = new User({ email, avatarURL, verificationToken });
  newUser.setPassword(password);
  await newUser.save();

  const mail = {
    to: email,
    subject: "email verification",
    html: `<a target='blank' href='${HOST}:${PORT}/api/users/verify/${verificationToken}'>Verify email</a>`,
  };

  await sendEmail(mail);

  // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  // const result = await User.create({ email, password: hashPassword });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        avatarURL,
        verificationToken,
      },
    },
  });
};

module.exports = register;
