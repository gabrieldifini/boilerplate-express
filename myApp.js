let express = require("express");
let app = express();
require("dotenv").config();
let bodyParser = require("body-parser");

console.log("Hello World");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  const { method, path, ip } = req;
  console.log(`${method} ${path} - ${ip}`);
  next();
});
app.use("/public", express.static(__dirname + "/public"));

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({
      time: req.time,
    });
  }
);

app.get("/:word/echo", (req, res) => {
  res.json({
    echo: req.params.word,
  });
});

const returnName = (req, res) => {
  if (req.method === "GET") {
    res.json({
      name: `${req.query.first} ${req.query.last}`,
    });
  }
  if (req.method === "POST") {
    res.json({
      name: `${req.body.first} ${req.body.last}`,
    });
  }
};

app.route("/name").get(returnName).post(returnName);

app.get("/", (req, res) => {
  // res.send('Hello Express')
  const filePath = __dirname + "/views/index.html";
  res.sendFile(filePath);
});

app.get("/json", (req, res) => {
  const response = "Hello json";
  res.json({
    message:
      process.env.MESSAGE_STYLE === "uppercase"
        ? response.toUpperCase()
        : response,
  });
});

module.exports = app;
