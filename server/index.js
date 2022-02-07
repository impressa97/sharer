require("dotenv").config();

var bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const config = require("./config");

const sequelize = require("./db/db.js");

//import routes
const goodsRoute = require("./routes/goods");
const objectivesRoute = require("./routes/objectives");
const verifyRoute = require("./routes/verify");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
sequelize.sync();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/verify", verifyRoute);
app.use("/api/goods", goodsRoute);
app.use("/api/objectives", objectivesRoute);

app.use("/images", express.static("documents/images"));

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
