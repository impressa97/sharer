require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const config = require("./config");

const sequelize = require("./db/db.js");
sequelize.sync();

//import routes
const goodsRoute = require("./routes/goods");
const verifyRoute = require("./routes/verify");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

app.use(cors());
app.use(express.json());

app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/verify", verifyRoute);
app.use("/api/goods", goodsRoute);

app.use("/images", express.static("documents/images"));

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
