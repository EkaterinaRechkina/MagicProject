require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const sequelize = require("./db/models");

// const indexRouter = require("./routes/index.routes");
// const postsRouter = require("./routes/posts.routes");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use("/", indexRouter);
// app.use("/posts", postsRouter);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Server has been started on PORT: ${PORT}`);
    console.log("Есть коннект с БД ))!");
  } catch (error) {
    console.error("Бяда с подключением к БД :(", error.message);
  }
});
