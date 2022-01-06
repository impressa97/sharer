const router = require("express").Router();
const user = require("../models/user.js");
const sequelize = require("../db/db");

router.post("/register", async (req, res) => {
  const { registerValidation } = require("../validation");
  sequelize.sync();
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const registredUser = await user.findOne({
    where: { email: req.body.email },
  });

  if (registredUser.id) return res.status(400).send("Email is already exists");

  try {
    user
      .create({
        login: req.body.login,
        password: req.body.password,
        email: req.body.email,
        phone_number: req.body.phone_number,
      })
      .then((response) => {
        res.send("Register");
        console.log(res);
      });
  } catch {
    res.status(400).send(err);
  }
});

router.post("/login", (req, res) => {
  res.send("Login");
});

module.exports = router;
