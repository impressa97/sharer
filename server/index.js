require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./config");

//import routes
const verifyRoute = require("./routes/verify");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

app.use(cors());
app.use(express.json());

app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/verify", verifyRoute);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
