require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const { sequelize } = require('./db/models')


const app = express();
const registerRouter = require("./routes/register.router");
const loginRouter = require("./routes/login.router");
const logoutRouter = require("./routes/logout.router");
const getAPI = require("./routes/ApisRouter")

const checkSession = require('./routes/checkSession.router');


app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const PORT = process.env.PORT || 3002;

const sessionConfig = {
    store: new FileStore(),
    key: process.env.COOKIE_NAME,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    httpOnly: true,
    cookie: { expires: 24 * 60 * 60e3 },
};

app.use(session(sessionConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    if (req.session.userId) {
        res.locals.userId = req.session.userId;
        res.locals.userName = req.session.userName;
    }

    next();
});



app.use("/registration", registerRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/api", getAPI)
app.use('/checksession', checkSession);


app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Server has been started on PORT: ${PORT}`);
    console.log("Есть коннект с БД ))!");
  } catch (error) {
    console.error("Бяда с подключением к БД :(", error.message);
  }
});
