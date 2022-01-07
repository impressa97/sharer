require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./config");

//import routes
const authRoute = require("./routes/auth.js");
const postRoute = require("./routes/posts.js");

app.use(cors());
app.use(express.json());

app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
