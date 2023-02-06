require("dotenv").config();
const express = require("express");
const path = require("path");
const http = require("http");
const routerCar = require("./routers/car.route");

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3003;

app.use(express.json());

app.use(express.urlencoded({ expentended: true }));

app.use(express.static("public"));
//подключаем статичные файлы
app.use((err, request, response, next) => {
  //middleware - промежуточный обработчик
  console.log(err);
  response.status(500).send("server crash");
  next();
});

app.use("/api/car", routerCar);

app.use("//", (req, res) => {
  res.status(200).json("Hello word");
});
server.listen(port, () => {
  console.log(`Server running on post http://localhost:${port}`);
});

module.exports = app;
