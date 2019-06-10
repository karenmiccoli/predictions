const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");

const predictionsRouter = require("./routes/players");
const characterRouter = require("./routes/characters");
const dataRouter = require("./routes/data");

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://appservice:gameofthrones@cluster0-avl21.mongodb.net/gameOfThrones?retryWrites=true",
  { useNewUrlParser: true }
);
console.log("Connected");

const app = express();

// view engine setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    return res.json({ message: "ok" });
  }
  next();
});

app.use("/players", predictionsRouter);
app.use("/data", dataRouter);
app.use("/characters", characterRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
