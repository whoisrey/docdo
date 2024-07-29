require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const connectDB = require("./database/connection");

const initFirebaseAdmin = require("./middlewares/firebaseAdmin");
const jwtAuth = require("./middlewares/jwtAuth");

const auth = require("./routes/auth");
const documents = require("./routes/documents");

const app = express();

connectDB();
initFirebaseAdmin();

app.use(
  cors({
    origin: process.env.FIREBASE_PROJECT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/auth", auth);
app.use("/documents", jwtAuth, documents);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.json({ error: res.locals.message });
});

module.exports = app;
