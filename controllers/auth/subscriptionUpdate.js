const { User } = require("../../models");

const subscriptionUpdate = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  const subscriptionOptions = ["starter", "pro", "business"];
  const subscriptionVerification = subscriptionOptions.some(
    (item) => item === subscription
  );
  if (!subscriptionVerification) {
    throw new Error("There is no such subscription option");
  }
  const user = await User.findOneAndUpdate(
    { _id },
    { subscription },
    { new: true }
  );
  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        email: user.email,
        subscription: user.subscription,
      },
    },
  });
};

module.exports = subscriptionUpdate;
