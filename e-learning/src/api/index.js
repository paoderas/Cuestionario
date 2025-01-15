const sequelize = require('../config/db');

require("dotenv").config({ path: "./src/.env" });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const quizRoutes = require("./routes/quizRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/quizzes", quizRoutes);

sequelize.sync({ force: false }).then(() => {
  console.log("Base de datos conectada");
  app.listen(3001, () => {
    console.log("Servidor corriendo en http://localhost:3001");
  });
});
