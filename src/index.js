const express = require("express");
const app = express();
const env = require("dotenv");
const myRoutes = require("./routes");

env.config();
const port = 3000;

app.use(express.json());

app.use("/", myRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
