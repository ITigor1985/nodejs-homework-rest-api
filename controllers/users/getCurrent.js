const getCurrent = async (req, res) => {
  console.log(req.user);
  const { email } = req.user;
  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        email,
      },
    },
  });
};

module.exports = getCurrent;
