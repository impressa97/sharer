const jwt = require("jsonwebtoken");
const router = require("express").Router();

const users = require("../models/users.js");

router.post("/", async (req, res) => {
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

    const registredUser = await users.findOne({
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
    res.status(200).json({ user: registredUser, token });
  });
});

module.exports = router;
