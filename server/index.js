require("dotenv").config();

const express = require("express");
const app = express();
const config = require("./config");

//import routes
const authRoute = require("./routes/auth.js");

app.use(express.json());
app.use("/api/user", authRoute);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
