const router = require("express").Router();
const bcrypt = require("bcryptjs");
const users = require("../models/users.js");

const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const registredUser = await user.findOne({
    where: { email: req.body.email },
  });

  if (registredUser !== null) return res.status(400).send("Email is already exists");

  //HASH PAWWSORD
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  try {
    users
      .create({
        login: req.body.login,
        password: hashPassword,
        email: req.body.email,
        phone_number: req.body.phone_number,
      })
      .then((response) => {
        res.status(200).send({
          response: { user: registredUser, msg: "Пользователь создан" },
        });
      });
  } catch {
    res.status(400).send({
      msg: err.body,
    });
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const loginUser = await users.findOne({
    where: { email: req.body.email },
  });

  if (loginUser === null) return res.status(400).send("Email or Password does not exist");

  const validPass = await bcrypt.compare(req.body.password, loginUser.password);
  if (!validPass) return res.status(400).send("Invalid password");

  //CREATE TOKEN
  const token = jwt.sign({ id: loginUser.id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send({ user: loginUser, token: token });
});

module.exports = router;
