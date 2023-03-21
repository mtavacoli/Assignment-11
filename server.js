const express = require("express");
const path = require("path");
const api = require("./apiRoutes.js");
const htmlRoutes = require("./htmlRoutes.js");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", api);

app.use("/", htmlRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);


