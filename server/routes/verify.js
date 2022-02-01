const jwt = require("jsonwebtoken");
const router = require("express").Router();

const user = require("../models/user.js");

router.get("/", async (req, res) => {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token;

  if (!token) {
    return res.status(400).json({
      error: true,
      message: "Token is required.",
    });
  }
  // check token that was passed by decoding token using secret
  jwt.verify(token, process.env.TOKEN_SECRET, async function (err, userGET) {
    if (err)
      return res.status(401).json({
        error: true,
        message: "Invalid token.",
      });

    const registredUser = await user.findOne({
      where: { id: userGET.id },
    });

    // return 401 status if the userId does not match.
    if (registredUser === null) {
      return res.status(401).json({
        error: true,
        message: "Invalid user.",
      });
    }
    // get basic user details
    return res.json({ user: registredUser, token });
  });
});

module.exports = router;
